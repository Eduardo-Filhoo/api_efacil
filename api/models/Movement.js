module.exports = (sequelize, DataTypes) => {

  const Movement = sequelize.define("movement", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  })

  return Movement

}
