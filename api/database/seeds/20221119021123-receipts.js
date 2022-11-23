const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "receipts",
      [
        {
          id: uuidv4(),
          doc: "0000000001",
          serie: "001",
          transmission: "2022-10-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          doc: "0000000002",
          serie: "002",
          transmission: "2022-10-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          doc: "0000000003",
          serie: "001",
          transmission: "2022-10-30",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface) => queryInterface.bulkDelete("receipts", null, {}),
};
