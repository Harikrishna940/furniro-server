import bcrypt from 'bcrypt'
import User from "../models/user.js";
import jwt from 'jsonwebtoken'


export const logincontroller = async (req, res) => {
    try {
        console.log(req.body);

        const { name, password } = req.body
        const user = await User.findOne({ name })

        const comparePass = await bcrypt.compare(password, user.password)
        if (!comparePass) {
            return res.status(401).json({ message: 'invalid passwaord' })
        }

        const data = {
            name: user.name,
            id: user._id,
            email: user.email,
        }

        console.log(data);

        const token = jwt.sign(data, 'secretkey')
        console.log(token);

        return res.status(200).json({ message: 'login sucess', token })







    } catch (error) {
        console.log(error);

    }

}
