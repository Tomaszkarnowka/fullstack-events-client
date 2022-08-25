module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userSecondName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Users;
};
