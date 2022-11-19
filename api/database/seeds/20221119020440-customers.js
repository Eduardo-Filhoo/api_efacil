const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('customers',
    [
      {
        id: uuidv4(),
        name: "Ryan Luan Vicente Almada",
        registration: "88153008307",
        phone: "9827236445",
        email: "ryan.luan.almada@edbrasil.net",
        cep: "65143970",
        address: "Avenida José da Silva Calvet",
        number: "306",
        district: "Centro",
        city: "Bacabeira",
        uf: "MA",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Giovana Benedita Barros",
        registration: "73312060958",
        phone: "48997861286",
        email: "giovana.benedita.barros@asproplastic.com.br",
        cep: "88465973",
        address: "Rua Geral de Barra Clara",
        number: "515",
        district: "Centro",
        city: "Barra Clara",
        uf: "SC",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Osvaldo Mário Peixoto",
        registration: "78468070998",
        phone: "83985409322",
        email: "osvaldo_peixoto@campanati.com.br",
        cep: "58713970",
        address: "Rua Coronel Justino Fernandes Vieira",
        number: "645",
        district: "Centro",
        city: "Malta",
        uf: "PB",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('customers', null, {}),
};
