module.exports = (sequelize, DataTypes) => {

  const Departure = sequelize.define("departure", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    departureDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    transport: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    receipt: {
      type: DataTypes.CHAR,
      allowNull: false,
    }
  })

  return Departure

}
