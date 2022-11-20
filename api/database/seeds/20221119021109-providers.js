const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('providers',
    [
      {
        id: uuidv4(),
        name: "Mariana e Sônia Informática ME",
        registration: "44612292000199",
        stateRegistration: "44612292000199",
        phone: "1129593523",
        email: "financeiro@marianaesoniainformaticame.com.br",
        cep: "08694020",
        address: "Rua do Cruzeiro",
        number: "628",
        district: "Jardim Revista",
        city: "Suzano",
        uf: "SP",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Murilo e Filipe Consultoria Financeira ME",
        registration: "26412295000105",
        stateRegistration: "26412295000105",
        phone: "1125092958",
        email: "contato@muriloefilipeconsultoriafinanceirame.com.br",
        cep: "07744020",
        address: "Rua Joaquim Cerca",
        number: "992",
        district: "Laranjeiras",
        city: "Caieiras",
        uf: "SP",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Raquel e Alícia Corretores Associados ME",
        registration: "55102821000120",
        stateRegistration: "55102821000120",
        phone: "1935714277",
        email: "juridico@raquelealiciacorretoresassociadosme.com.br",
        cep: "13840135",
        address: "Rua Dracena",
        number: "183",
        district: "Vila José de Paula",
        city: "Mogi Guaçu",
        uf: "SP",
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('providers', null, {}),
};
