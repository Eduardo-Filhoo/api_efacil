module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define("product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    code: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      uppercase: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitMeasure: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    descriptionUnitMeasure: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  })

  return Product

}
