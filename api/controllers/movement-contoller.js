const db = require('../services/sequelize')

const Movement = db.movements
const Receipt = db.receipts

const list = async (req, res) => {
  const movements = await Movement.findAll({
    include: [
      {
        model: Receipt,
        as: 'movementReceipt'
      },
    ]
  });

  return res.status(201).json({ movements })
}

const show = async (req, res) => {
  const { id } = req.params;
  const movement = await Movement.findByPk(id, {
    include: [
      {
        model: Receipt,
        as: 'receiptMovement'
      }
    ]
  })

  return res.status(200).json({ movement })
}

const createEntry = async (req, res) => {
  try {
    const {
      type,
      receiptId,
      entryDate
    } = req.body;

    await Movement.create({
      type,
      receiptId
    })

    var newEntryDate = entryDate.split('/').reverse().join('-')

    await Receipt.update({
      entryDate: newEntryDate
    }, { where: { id: receiptId } })

    return res.status(201).json({ success: "Movement created successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to create Movement!" })
  }
}

const createDeparture = async (req, res) => {
  try {
    const {
      type,
      receiptId,
      departureDate
    } = req.body;

    await Movement.create({
      type,
      receiptId
    })

    var newDepartureDate = departureDate.split('/').reverse().join('-')

    await Receipt.update({
      departureDate: newDepartureDate
    }, { where: { id: receiptId } })

    return res.status(201).json({ success: "Movement created successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to create Movement!" })
  }
}

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      type,
      receiptId,
      entryDate
    } = req.body;

    var newEntryDate = entryDate.split('/').reverse().join('-')

    await Movement.update({
      type,
      receiptId
    }, { where: { id } })

    await Receipt.update({
      entryDate: newEntryDate
    }, { where: { id: receiptId} })

    return res.status(200).json({ success: "Movement updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Movement!" })
  }
}

const updateDeparture = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      type,
      receiptId,
      departureDate
    } = req.body;

    var newDepartureDate = departureDate.split('/').reverse().join('-')

    await Movement.update({
      type,
      receiptId
    }, { where: { id } })

    await Receipt.update({
      departureDate: newDepartureDate
    }, { where: { id: receiptId} })

    return res.status(200).json({ success: "Movement updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Movement!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const movement = await Movement.findByPk(id);

    await movement.destroy();

    return res.status(200).json({ success: "Movement deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Movement!" })
  }
}

module.exports = {
  list,
  show,
  createEntry,
  createDeparture,
  updateEntry,
  updateDeparture,
  destroy
}
