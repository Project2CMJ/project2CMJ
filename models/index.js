const User = require('./User');
const Product = require('./Product');
const Role = require('./Role');


User.belongsTo(Role, {
    foreignKey: 'role_id'
})

module.exports = { User, Product, Role };