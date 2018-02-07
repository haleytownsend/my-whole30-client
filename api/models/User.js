const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

schema.methods.apiRepr = function () {
  const repr = { id: this._id }

  Object.keys(this).forEach(key => {
    if (key !== '_id') Object.assign(repr, { [key]: this[key] })
  })

  return repr
}

const User = mongoose.model('User', schema)

module.exports = User
