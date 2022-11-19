const db = require('../services/sequelize')

const Carrying = db.carryings
const Customer = db.customers
const Departure = db.departures
const Receipt = db.receipts

const list = async (req, res) => {
  const departures = await Departure.findAll({
    include: [
      {
        model: Carrying,
        as: 'departureCarrying'
      },
      {
        model: Customer,
        as: 'departureCustomer'
      },
      {
        model: Receipt,
        as: 'departureReceipt'
      }
    ]
  });

  return res.status(200).json({ departures })
}

const show = async (req, res) => {
  const { id } = req.params;
  const departure = await Departure.findByPk(id, {
    include: [
      {
        model: Carrying,
        as: 'departureCarrying'
      },
      {
        model: Customer,
        as: 'departureCustomer'
      },
      {
        model: Receipt,
        as: 'departureReceipt'
      }
    ]
  })

  return res.status(200).json({ departure })
}

const create = async (req, res) => {
  try {
    const {
      departureDate,
      total,
      transport,
      carryingId,
      customerId,
      receiptId
    } = req.body;

    var newDepartureDate = departureDate.split('/').reverse().join('-')

    await Departure.create({
      departureDate: newDepartureDate,
      total,
      transport,
      carryingId,
      customerId,
      receiptId
    })

    await Receipt.update({
      departureDate: newDepartureDate,
    }, { where: { id: receiptId } })

    return res.status(201).json({ success: "Departure created successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to create Departure!" })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      departureDate,
      total,
      transport,
      carryingId,
      customerId,
      receiptId
    } = req.body;

    var newDepartureDate = departureDate.split('/').reverse().join('-')

    await Departure.update({
      departureDate: newDepartureDate,
      total,
      transport,
      carryingId,
      customerId,
      receiptId
    }, { where: { id } })

    await Receipt.update({
      departureDate: newDepartureDate,
    }, { where: { id: receiptId } })

    return res.status(200).json({ success: "Departure updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Departure!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const departure = await Departure.findByPk(id);

    await departure.destroy();

    return res.status(200).json({ success: "Departure deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Departure!" })
  }
}

module.exports = {
  list,
  show,
  create,
  update,
  destroy
}
