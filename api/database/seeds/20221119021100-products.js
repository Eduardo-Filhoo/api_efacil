const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('products',
    [
      {
        id: uuidv4(),
        name: "Smart TV 43 Polegadas UHD 4K",
        description: "Smart TV Samsung 43 Polegadas UHD 4K, 3 HDMI, 1 USB, Processador Crystal 4K, Tela sem limites, Alexa, Controle Único",
        model: "UN43AU7700GXZD",
        manufacturer: "Samsung",
        unitMeasure: "UN",
        descriptionUnitMeasure: "UNIDADE",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Macbook Air 13.3",
        description: "Macbook Air Apple 13.3´, Processador M1, 8GB, SSD 256GB, Space Grey",
        model: "MGN63BZ/A",
        manufacturer: "Apple",
        unitMeasure: "UN",
        descriptionUnitMeasure: "UNIDADE",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Calculadora Financeira 12C Gold",
        description: "Calculadora Financeira HP 12C Gold, 120 Funções, Visor LCD, RPN e ALG",
        model: "HP12C",
        manufacturer: "HP",
        unitMeasure: "UN",
        descriptionUnitMeasure: "UNIDADE",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Cervejeira 82L",
        description: "Cervejeira Consul, 82L, 220V, Titanium - CZD12ATBNA",
        model: "CZD12ATBNA",
        manufacturer: "Consul",
        unitMeasure: "UN",
        descriptionUnitMeasure: "UNIDADE",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "iPhone 12",
        description: "iPhone 12 64GB Branco, 5G, Tela de 6.1, Câmera Dupla 12MP + Selfie 12MP",
        model: "MGJ63BR/A",
        manufacturer: "Apple",
        unitMeasure: "UN",
        descriptionUnitMeasure: "UNIDADE",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Console Playstation 5",
        description: "Console Sony Playstation 5",
        model: "PlayStation 5",
        manufacturer: "Sony",
        unitMeasure: "UN",
        descriptionUnitMeasure: "UNIDADE",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
