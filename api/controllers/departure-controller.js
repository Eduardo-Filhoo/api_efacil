const db = require('../services/sequelize')

const Carrying = db.carryings
const Customer = db.customers
const Departure = db.departures

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
      receipt,
      carryingId,
      customerId
    } = req.body;

    await Departure.create({
      departureDate,
      total,
      transport,
      receipt,
      carryingId,
      customerId
    })

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
      receipt,
      carryingId,
      customerId
    } = req.body;

    await Departure.update({
      departureDate,
      total,
      transport,
      receipt,
      carryingId,
      customerId
    }, { where: { id } })

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
