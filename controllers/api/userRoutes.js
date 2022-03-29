const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async(req, res) => {
    console.log('we are hear creating a user')
    try {
        const userData = await User.create({
            ...req.body,
            role_id: 2
        });

        req.session.save(() => {
            req.session.role_id = userData.role_id;
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            //We are aware that returning "userData" is not best practice and is danger to our users. Due to lack of time, we have chosen to keep the code "as is" but will remove it at a later time.//
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async(req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        console.log('userData ===', userData, req.body.email);

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        console.log(userData.role_id)

        let admin = false
        if (userData.role_id == 1) {
            admin = true
        }


        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            req.session.admin = admin

            res.json({ user: { role_id: userData.role_id }, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;