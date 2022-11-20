const db = require('../services/sequelize')

const Receipt = db.receipts

const list = async (req, res) => {
  const receipts = await Receipt.findAll();

  return res.status(200).json({ receipts })
}

const show = async (req, res) => {
  const { id } = req.params;
  const receipt = await Receipt.findByPk(id)

  return res.status(200).json({ receipt })
}

const create = async (req, res) => {
  try {
    const {
      doc,
      serie,
      transmission,
      total
    } = req.body;

    const receipt = await Receipt.create({
      doc,
      serie,
      transmission,
      total
    })

    return res.status(201).json({ success: "Receipt created successfully!", id: receipt.id })

  } catch (err) {
    console.error(err)
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
      total
    } = req.body;

    await Receipt.update({
      doc,
      serie,
      transmission,
      total
    }, { where: { id } })

    return res.status(200).json({ success: "Receipt updated successfully!" })

  } catch (err) {
    console.error(err)
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
