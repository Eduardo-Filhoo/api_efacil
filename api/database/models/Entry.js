module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define("entry", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    entryDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    transport: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });

  return Entry;
};
