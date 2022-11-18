const db = require('../services/sequelize')

const Carrying = db.carryings

const list = async (req, res) => {
  const carryings = await Carrying.findAll();

  return res.status(200).json({ carryings })
}

const show = async (req, res) => {
  const { id } = req.params;
  const costumer = await Carrying.findByPk(id)

  return res.status(200).json({ costumer })
}

const create = async (req, res) => {
  try {
    const {
      name,
      registration,
      phone,
      email,
      cep,
      address,
      number,
      district,
      city,
      uf,
      isActive
    } = req.body;

    await Carrying.create({
      name,
      registration,
      phone,
      email,
      cep,
      address,
      number,
      district,
      city,
      uf,
      isActive
    })

    return res.status(201).json({ success: "Carrying created successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to create Carrying!" })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      registration,
      email,
      phone,
      cep,
      address,
      number,
      district,
      city,
      uf,
      isActive
    } = req.body;

    await Carrying.update({
      name,
      registration,
      email,
      phone,
      cep,
      address,
      number,
      district,
      city,
      uf,
      isActive
    }, { where: { id } })

    return res.status(200).json({ success: "Carrying updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Carrying!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const costumer = await Carrying.findByPk(id);

    await costumer.destroy();

    return res.status(200).json({ success: "Carrying deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Carrying!" })
  }
}

module.exports = {
  list,
  show,
  create,
  update,
  destroy
}
