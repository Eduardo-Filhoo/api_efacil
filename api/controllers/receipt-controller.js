const db = require('../database/connections/sync')

const Receipt = db.receipts
const Provider = db.providers
const Customer = db.customers
const Item = db.itemsReceipts

const list = async (req, res) => {
  const receipts = await Receipt.findAll({
    include: [
      {
        model: Provider,
        as: 'receiptProvider'
      },
      {
        model: Customer,
        as: 'receiptCustomer'
      },
      {
        model: Item,
        as: 'itemReceiptReceipt'
      },
    ]
  });

  return res.status(201).json({ receipts })
}

const show = async (req, res) => {
  const { id } = req.params;
  const receipt = await Receipt.findByPk(id, {
    include: [
      {
        model: Provider,
        as: 'receiptProvider'
      },
      {
        model: Customer,
        as: 'receiptCustomer'
      },
      {
        model: Item,
        as: 'itemReceiptReceipt'
      },
    ]
  })

  return res.status(200).json({ receipt })
}

const create = async (req, res) => {
  try {
    const {
      doc,
      serie,
      transmission,
      value,
      entryDate,
      customerId,
      providerId
    } = req.body;

    var newTransmission = transmission.split('.').reverse().join('-')
    var newEntryDate = entryDate.split('.').reverse().join('.')

    await Receipt.create({
      doc,
      serie,
      transmission: newTransmission,
      value,
      entryDate: newEntryDate,
      customerId,
      providerId
    })

    return res.status(201).json({ success: "Receipt created successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to create Receipt!" })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      doc,
      serie,
      transmission,
      value,
      entryDate,
      customerId,
      providerId
    } = req.body;

    var newTransmission = transmission.split('.').reverse().join('-')
    var newEntryDate = entryDate.split('.').reverse().join('-')

    await Receipt.update({
      doc,
      serie,
      transmission: newTransmission,
      value,
      entryDate: newEntryDate,
      customerId,
      providerId
    }, { where: { id } })

    return res.status(200).json({ success: "Receipt updated successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to update Receipt!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const receipt = await Receipt.findByPk(id);

    await receipt.destroy();

    return res.status(200).json({ success: "Receipt deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Receipt!" })
  }
}

module.exports = {
  list,
  show,
  create,
  update,
  destroy
}
