const sequelize = require('../config/connection');
const { User, Product, Role } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
const roleData = require('./roleData.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
   const roles = await Role.bulkCreate(roleData, {
    individualHooks: true,
    returning: true,
  });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const product of productData) {
    await Product.create({
      ...product,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
 

  process.exit(0);
};

seedDatabase();
