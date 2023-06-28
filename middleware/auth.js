import jwt from "jsonwebtoken"
import dotenv from "dotenv" // Credentials
import bcrypt from "bcrypt"
import UserModel from "../models/user.model.js"

dotenv.config()

const Authenticate = async (req, res) => {
  // Destructure Assignment af username og password fra request body
  const { username, password } = req.body

  // Hvis brugernavn og password findes...
  if (username && password) {
    // Henter db user ud fra username
    const user_result = await UserModel.findOne({
      attributes: ["id", "firstname", "lastname", "password"],
      where: { email: username, is_active: 1 },
    })

    if (!user_result) {
      // Returner forbidden hvis bruger ikke eksisterer
      res.sendStatus(401)
    } else {
      // Deklarerer user objekt af user values
      const data = {
        id: user_result.get("id"),
        firstname: user_result.get("firstname"),
        lastname: user_result.get("lastname"),
        password: user_result.get("password"),
      }

      // Validerer krypterede passwords
      bcrypt.compare(password, data.password, (err, result) => {
        if (result) {
          // REFRESH TOKEN

          // Deklarerer var med udløbsdtid for refresh_token
          // (plus foran konverterer til tal)
          const expRefreshDate =
            Math.floor(Date.now() / 1000) +
            +process.env.TOKEN_REFRESH_EXPIRATION_SECS

          // Genererer refresh token ud fra udløbstid, user_id og token_refresh_key
          const refresh_token = jwt.sign(
            {
              exp: expRefreshDate,
              data: { id: data.id },
            },
            process.env.TOKEN_REFRESH_KEY
          )

          // Updater refresh token i bruger database
          UserModel.update(
            { refresh_token, refresh_token },
            {
              where: { id: data.id },
            }
          )

          // ACCESS_TOKEN

          // Deklarerer var med udløbsdtid for access_token
          // (plus foran konverterer til tal)
          const expAccessDate =
            Math.floor(Date.now() / 1000) +
            +process.env.TOKEN_ACCESS_EXPIRATION_SECS

          // Deklarerer payload var af user values
          const payload = {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            email: username,
          }

          // Genererer access token
          const access_token = jwt.sign(
            {
              exp: expAccessDate,
              data: payload,
            },
            process.env.TOKEN_ACCESS_KEY
          )

          // Returnerer access_token til requester
          return res.json({
            access_token: access_token,
            created: Date(),
          })
        } else {
          // Returner 401 Unauthorized
          return res.sendStatus(401)
        }
      })
    }
  } else {
    // Returner 401 Forbidden
    return res.sendStatus(403)
  }
}

/**
 * Authorize User
 * Tjekker om bruger rent faktisk har adgang via en access_token og refresh_token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const Authorize = async (req, res, next) => {
  // Henter access token fra auth header
  const bearerHeader = req.headers["authorization"]
  const access_token = bearerHeader.substr(7) // Remove "Bearer "

  // Bekræfter access_token med access_key
  jwt.verify(access_token, process.env.TOKEN_ACCESS_KEY, (err, data) => {
    if (err) {
      switch (err.message) {
        case "invalied token":
          // Returnerer statuskode (403: Forbidden)
          res.sendStatus(403)
          break
        case "jwt expired":
          // Refresh token
          // Decoder auth token med access_key
          // Dette returnerer et objekt med brugerdata
          // og her henter vi bruger id
          const { id } = jwt.decode(
            access_token,
            process.env.TOKEN_ACCESS_KEY
          ).data

          // Henter db bruger ud fra id
          UserModel.findOne({
            where: { id: id, is_active: 1 },
          }).then((record) => {
            if (!record.refresh_token) {
              // Returnerer statuskode (400: Bad Request)
              res.sendStatus(400)
            } else {
              // Bekræfter brugers refresh_token
              jwt.verify(
                record.refresh_token,
                process.env.TOKEN_REFRESH_KEY,
                (err, data) => {
                  if (err) {
                    switch (err.message) {
                      case "jwt expired":
                        // Returerner besked om at refresh_token er udløbet
                        // Betyder at bruger skal logge ind igen
                        res.json({ message: "Refresh token expired" })
                        break
                      case "invalide token":
                        // Returnerer statuskode (400: Bad Request)
                        res.sendStatus(400)
                        break
                    }
                  } else {
                    // Genererer ny access token

                    // Deklarerer var med udløbsdtid for access_token
                    // (plus foran konverterer til tal)
                    const expDate =
                      Math.floor(Date.now() / 1000) +
                      +process.env.TOKEN_ACCESS_EXPIRATION_SECS

                    // Deklarerer payload var ud fra brugers db data
                    const payload = {
                      id: id,
                      firstname: record.firstname,
                      lastname: record.lastname,
                      email: record.email,
                    }

                    // Genererer token ud fra payload og access tid
                    const access_token = jwt.sign(
                      {
                        exp: expDate,
                        data: payload,
                      },
                      process.env.TOKEN_ACCESS_KEY
                    )

                    // Returnerer access_token til requester
                    return res.json({
                      access_token: access_token,
                      updated: Date(),
                    })
                  }
                }
              )
            }
          })
          break
      }
    } else {

      // Sender bruger videre til næste trin i router
    //   console.log('du er logget ind');
      next()

    }
  })
}

export { Authenticate, Authorize }