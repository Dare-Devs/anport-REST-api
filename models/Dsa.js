const { Sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Dsa = sequelize.define('Dsa', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    schoolId: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(`MALE`, `FEMALE`),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    passwordHash: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  })
  return Dsa
}
