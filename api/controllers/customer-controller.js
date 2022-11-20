const db = require('../services/sequelize')

const Costumer = db.customers

const list = async (req, res) => {
  const costumers = await Costumer.findAll();

  return res.status(201).json({ costumers })
}

const find = async (req, res) => {
  const costumers = await Costumer.findAll({
    where: {
      isActive: true
    }
  });

  return res.status(201).json({ costumers })
}

const show = async (req, res) => {
  const { id } = req.params;
  const costumer = await Costumer.findByPk(id)

  return res.status(200).json({ costumer })
}

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
      isActive
    } = req.body;

    await Costumer.create({
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
      isActive
    })

    return res.status(201).json({ success: "Costumer created successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to create Costumer!" })
  }
}

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
      isActive
    } = req.body;

    await Costumer.update({
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
      isActive
    }, { where: { id } })

    return res.status(200).json({ success: "Costumer updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Costumer!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const costumer = await Costumer.findByPk(id);

    await costumer.destroy();

    return res.status(200).json({ success: "Costumer deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Costumer!" })
  }
}

module.exports = {
  list,
  find,
  show,
  create,
  update,
  destroy
}
