const db = require('../services/sequelize')

const Carrying = db.carryings
const Provider = db.providers
const Entry = db.entries
const Receipt = db.receipts

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
      {
        model: Receipt,
        as: 'entryReceipt'
      }
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
      {
        model: Receipt,
        as: 'entryReceipt'
      }
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
      carryingId,
      providerId,
      receiptId
    } = req.body;

    var newEntryDate = entryDate.split('/').reverse().join('-')

    await Entry.create({
      entryDate: newEntryDate,
      total,
      transport,
      carryingId,
      providerId,
      receiptId
    })

    await Receipt.update({
      entryDate: newEntryDate,
    }, { where: { id: receiptId } })

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
      carryingId,
      providerId,
      receiptId
    } = req.body;

    var newEntryDate = entryDate.split('/').reverse().join('-')

    await Entry.update({
      entryDate: newEntryDate,
      total,
      transport,
      carryingId,
      providerId,
      receiptId
    }, { where: { id } })

    await Receipt.update({
      entryDate: newEntryDate,
    }, { where: { id: receiptId } })

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
