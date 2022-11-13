module.exports = (sequelize, DataTypes) => {

  const ItemReceipt = sequelize.define("itemReceipt", {
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
    value: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
  })

  return ItemReceipt

}
