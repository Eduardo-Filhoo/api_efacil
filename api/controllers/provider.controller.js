const db = require('../services/sequelize')

const Provider = db.providers

const list = async (req, res) => {
  const providers = await Provider.findAll();

  return res.status(200).json({ providers })
}

const find = async (req, res) => {
  const providers = await Provider.findAll({
    where: {
      isActive: true
    }
  });

  return res.status(200).json({ providers })
}

const show = async (req, res) => {
  const { id } = req.params;
  const provider = await Provider.findByPk(id)

  return res.status(200).json({ provider })
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

    await Provider.create({
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

    return res.status(201).json({ success: "Provider created successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to create Provider!" })
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

    await Provider.update({
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

    return res.status(200).json({ success: "Provider updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Provider!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const provider = await Provider.findByPk(id);

    await provider.destroy();

    return res.status(200).json({ success: "Provider deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Provider!" })
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
