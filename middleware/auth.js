import UserModel from '../models/user.model.js'
const Authenticate = async (req, res) => { 
    const { username, password } = req.body

    if(username && password) {
        const user_result = await UserModel.findOne({
            // attributes: {"id", "firstname", "lastname", "password"},
            // where: { email: username, is_active: 1}
        })

    } else {
        console.log('Du skal udfylde alle felter')

    }

}

const Authorize = async (req, res) => { 

}

export {Authenticate, Authorize}