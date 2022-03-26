const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/product', async(req, res) => {
    try {
        const newProduct = await Product.create({
            ...req.body,
        });

        res.status(200).json(newProduct);
    } catch (err) {
        res.status(400).json(err);
    }
});

<<<<<<< HEAD
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
=======
router.delete('/:id', async(req, res) => {
    try {
        const productData = await Product.destroy({});

        if (!productData) {
            res.status(404).json({ message: 'No product found with this id!' });
            return;
        }

        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
>>>>>>> 3dab054c61a31582dfe9f3ef82dab8950e11d795
});

module.exports = router;