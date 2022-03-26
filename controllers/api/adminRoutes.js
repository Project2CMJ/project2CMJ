const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/product', async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/delete/product/:id', withAuth, async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id : req.params.id
      }
    });


    res.status(200).json({
      success : true
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
