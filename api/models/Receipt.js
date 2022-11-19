module.exports = (sequelize, DataTypes) => {

  const Receipt = sequelize.define("receipt", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    doc: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    serie: {
      type: DataTypes.CHAR(4),
      allowNull: false,
    },
    transmission: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    entryDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    departureDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    }
  })

  return Receipt

}
