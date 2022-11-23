const db = require("../util/sequelize");

const Customer = db.customers;

const list = async (req, res) => {
  const customers = await Customer.findAll();

  return res.status(201).json({ customers });
};

const find = async (req, res) => {
  const customers = await Customer.findAll({
    where: {
      isActive: true,
    },
  });

  return res.status(201).json({ customers });
};

const show = async (req, res) => {
  const { id } = req.params;
  const customer = await Customer.findByPk(id);

  return res.status(200).json({ customer });
};

const create = async (req, res) => {
  try {
    const {
      name,
      cpf,
      rg,
      email,
      cell,
      cep,
      address,
      number,
      district,
      city,
      uf,
      isActive,
    } = req.body;

    await Customer.create({
      name,
      cpf,
      rg,
      email,
      cell,
      cep,
      address,
      number,
      district,
      city,
      uf,
      isActive,
    });

    return res.status(201).json({ success: "Customer created successfully!" });
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({ error: "Failed to create Customer!" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      cpf,
      rg,
      email,
      cell,
      cep,
      address,
      number,
      district,
      city,
      uf,
      isActive,
    } = req.body;

    await Customer.update(
      {
        name,
        cpf,
        rg,
        email,
        cell,
        cep,
        address,
        number,
        district,
        city,
        uf,
        isActive,
      },
      { where: { id } }
    );

    return res.status(200).json({ success: "Customer updated successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: "Failed to update Customer!" });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);

    await customer.destroy();

    return res.status(200).json({ success: "Customer deleted successfully!" });
  } catch (err) {
    console.error(err.message);
    return res.status(400).json({ error: "Failed to deleted Customer!" });
  }
};

module.exports = {
  list,
  find,
  show,
  create,
  update,
  destroy,
};
