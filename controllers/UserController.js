const { User } = require("../models")
const middleware = require("../middleware")

const register = async (req, res) => {
  try {
      const { email, password, name } = req.body
      let passwordDigest = await middleware.hashPassword(password)
      console.log(passwordDigest)
      const user = await User.create({ email, password: passwordDigest, name})
      res.send(user)
  } catch (error) {
      throw error
  }
}

const signIn = async (req, res) => {
  try {
      const user = await User.findOne({
          where: { email: req.body.email },
          raw: true
      })
      let matched = await middleware.comparePassword(
          user.passwordDigest,
          req.body.password
      )
      if (matched) {
          let payload = {
            id: user.id,
            email: user.email,
            name: user.name,
            profileImage: user.profileImage,
            backgroundImage: user.backgroundImage
          }
          let token = middleware.createToken(payload)
          return res.send({ user: payload, token })
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
      throw error
  }
}

module.exports = {
  register,
  signIn
}