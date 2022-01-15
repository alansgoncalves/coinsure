const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, { timestamps: false });

  return user;
};

module.exports = User;