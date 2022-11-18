const db = require('../services/sequelize')

const Item = db.itemsEntries
const Product = db.products
const Entry = db.entries

const list = async (req, res) => {
  const items = await Item.findAll({
    include: [
      {
        model: Product,
        as: 'productEntry'
      },
      {
        model: Entry,
        as: 'itemsEntry'
      },
    ]
  });

  return res.status(200).json({ items })
}

const show = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByPk(id, {
    include: [
      {
        model: Product,
        as: 'productEntry'
      },
      {
        model: Entry,
        as: 'itemsEntry'
      },
    ]
  })

  return res.status(200).json({ item })
}

const create = async (req, res) => {
  try {
    const { unitary, quantity, total, productId, entryId } = req.body;

    await Item.create({
      unitary,
      quantity,
      total,
      productId,
      entryId
    })

    return res.status(201).json({ success: "Item created successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to create Item!" })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { unitary, quantity, total, productId, entryId } = req.body;

    await Item.update({
      unitary,
      quantity,
      total,
      productId,
      entryId
    }, { where: { id } })

    return res.status(200).json({ success: "Item updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Item!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByPk(id);

    await item.destroy();

    return res.status(200).json({ success: "Item deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Item!" })
  }
}

module.exports = {
  list,
  show,
  create,
  update,
  destroy
}
