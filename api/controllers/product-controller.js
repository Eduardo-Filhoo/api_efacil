const db = require('../database/connections/sync')

const Product = db.products

const list = async (req, res) => {
  const products = await Product.findAll();

  return res.status(201).json({ products })
}

const show = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByPk(id)

  return res.status(200).json({ product })
}

const create = async (req, res) => {
  try {
    const { description, manufacturer, unitMeasure, descriptionUnitMeasure, isActive } = req.body;

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength)).toUpperCase();
      }
      return result;
    }

    await Product.create({
      code: makeid(6),
      description,
      manufacturer,
      unitMeasure,
      descriptionUnitMeasure,
      isActive
    })

    return res.status(201).json({ success: "Product created successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to create Product!" })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { description, manufacturer, unitMeasure, descriptionUnitMeasure, isActive } = req.body;

    await Product.update({
      description,
      manufacturer,
      unitMeasure,
      descriptionUnitMeasure,
      isActive
    }, { where: { id } })

    return res.status(200).json({ success: "Product updated successfully!" })

  } catch (err) {
    console.error(err)
    return res.status(400).json({ error: "Failed to update Product!" })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    await product.destroy();

    return res.status(200).json({ success: "Product deleted successfully!" })

  } catch (err) {
    console.error(err.message)
    return res.status(400).json({ error: "Failed to deleted Product!" })
  }
}

module.exports = {
  list,
  show,
  create,
  update,
  destroy
}
