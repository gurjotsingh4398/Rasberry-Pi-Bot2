const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const schema = mongoose.Schema;

const UserSchema = new schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = mongoose.model("User", UserSchema);
