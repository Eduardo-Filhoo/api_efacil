const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('carryings',
    [
      {
        id: uuidv4(),
        name: "Sérgio e Elza Mudanças Ltda",
        registration: "26766907000150",
        stateRegistration: "26766907000150",
        phone: "1927541731",
        email: "almoxarifado@sergioeelzamudancasltda.com.br",
        cep: "13873059",
        address: "Rua João Ferreira Varzim",
        number: "258",
        district: "Vila Valentin",
        city: "São João da Boa Vista",
        uf: "SP",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Filipe e Daniel Mudanças Ltda",
        registration: "63013627000105",
        stateRegistration: "63013627000105",
        phone: "11998776967",
        email: "ti@filipeedanielmudancasltda.com.br",
        cep: "13208430",
        address: "Rua Jader Ribeiro da Silva",
        number: "249",
        district: "Vila Ana",
        city: "Jundiaí",
        uf: "SP",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Jorge e Lucca Entregas Expressas Ltda",
        registration: "84017077000164",
        stateRegistration: "84017077000164",
        phone: "909514575227",
        email: "treinamento@jorgeeluccaentregasexpressasltda.com.br",
        cep: "18112660",
        address: "Rua Cristovan Castilho",
        number: "776",
        district: "Jardim Ana Claudia",
        city: "Votorantim",
        uf: "SP",
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('carryings', null, {}),
};
