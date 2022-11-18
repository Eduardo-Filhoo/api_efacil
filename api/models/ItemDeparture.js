module.exports = (sequelize, DataTypes) => {

  const ItemDeparture = sequelize.define("itemDeparture", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    unitary: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    }
  })

  return ItemDeparture

}
