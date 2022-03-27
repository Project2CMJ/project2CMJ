const router = require('express').Router();
const { Product, User } = require('../models');
const withAuth = require('../utils/auth');
const QRCode = require('qrcode')

router.get('/', async(req, res) => {
    try {
        // Pass serialized data and session flag into template
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/store', async(req, res) => {
    try {
        // Pass serialized data and session flag into template
        res.render('store');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/about', async(req, res) => {
    try {
        // Pass serialized data and session flag into template
        res.render('about', {

        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/admin', async(req, res) => {
    try {
        if (req.session.logged_in) {
            const userData = await User.findByPk(
                req.session.user_id
            );
            if (userData.dataValues.role_id == 1) {
                // go ahead and do admin stuff
                const productData = await Product.findAll({});
                const products = productData.map((product) => product.get({ plain: true }));
                res.render('admin', {
                    products,
                    logged_in: true
                });
            }

        } else {
            res.status(444).json(err);
        };
    } catch (e) {
        // there was an error with the request
        res.status(500).json(e);
    }
});

router.get('/product', async(req, res) => {
    try {
        // Get all products and JOIN with user data
        const productData = await Product.findAll({});
       
        // Serialize data so the template can read it
        const products = productData.map((product) => product.get({ plain: true }));
    console.log(products)
        // Pass serialized data and session flag into template
        res.render('product', {
            products,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/product/:id', async(req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
            include: []

        });

        const product = productData.get({ plain: true });
        console.log(product)
        res.render('items', {
            product,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async(req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });
        const user = userData.get({ plain: true });
        QRCode.toDataURL("Receive $1 off! (First time visit only)", function(err, url) {
            res.render('profile', {
                ...user,
                qrcodeURL: url,
                logged_in: true
            });
        })

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async(req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        const userData = await User.findByPk(
            req.session.user_id
        );
        if (userData.dataValues.role_id == 1) {
            // go ahead and do admin stuff

            res.redirect('/admin');
            return;
        } else { res.redirect('/profile') }
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user signed up, redirect to another route for coupon
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('signup');
});



module.exports = router;