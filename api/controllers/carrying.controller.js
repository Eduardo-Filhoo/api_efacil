const db = require('../services/sequelize')

const Carrying = db.carryings

const list = async (req, res) => {
  const carryings = await Carrying.findAll();

  return res.status(200).json({ carryings })
}

const find = async (req, res) => {
  const carryings = await Carrying.findAll({
    where: {
      isActive: true
    }
  });

  return res.status(201).json({ carryings })
}

const show = async (req, res) => {
  const { id } = req.params;
  const carrying = await Carrying.findByPk(id)

  return res.status(200).json({ carrying })
}

const create = async (req, res) => {
  try {
    const {
      name,
      registration,
      stateRegistration,
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
      stateRegistration,
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
      stateRegistration,
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
      stateRegistration,
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
    const carrying = await Carrying.findByPk(id);

    await carrying.destroy();

    return res.status(200).json({ success: "Carrying deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Carrying!" })
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
