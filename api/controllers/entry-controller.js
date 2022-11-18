const db = require('../services/sequelize')

const Carrying = db.carryings
const Provider = db.providers
const Entry = db.entries

const list = async (req, res) => {
  const entries = await Entry.findAll({
    include: [
      {
        model: Carrying,
        as: 'entryCarrying'
      },
      {
        model: Provider,
        as: 'entryprovider'
      },
    ]
  });

  return res.status(200).json({ entries })
}

const show = async (req, res) => {
  const { id } = req.params;
  const entry = await Entry.findByPk(id, {
    include: [
      {
        model: Carrying,
        as: 'entryCarrying'
      },
      {
        model: Provider,
        as: 'entryprovider'
      },
    ]
  })

  return res.status(200).json({ entry })
}

const create = async (req, res) => {
  try {
    const {
      entryDate,
      total,
      transport,
      receipt,
      carryingId,
      providerId
    } = req.body;

    await Entry.create({
      entryDate,
      total,
      transport,
      receipt,
      carryingId,
      providerId
    })

    return res.status(201).json({ success: "Entry created successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to create Entry!" })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      entryDate,
      total,
      transport,
      receipt,
      carryingId,
      providerId
    } = req.body;

    await Entry.update({
      entryDate,
      total,
      transport,
      receipt,
      carryingId,
      providerId
    }, { where: { id } })

    return res.status(200).json({ success: "Entry updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Entry!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Entry.findByPk(id);

    await entry.destroy();

    return res.status(200).json({ success: "Entry deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Entry!" })
  }
}

module.exports = {
  list,
  show,
  create,
  update,
  destroy
}
