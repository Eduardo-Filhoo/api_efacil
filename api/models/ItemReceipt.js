module.exports = (sequelize, DataTypes) => {

  const ItemReceipt = sequelize.define("itemReceipt", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
  })

  return ItemReceipt

}
