const User = require('./User');
const Product = require('./Product');
const Role = require('./Role');


User.belongsTo(Role, {
  foreignKey: 'role_id'
})

/*
const typeNumber = 4;
const errorCorrectionLevel = 'L';
const qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('Hi!');
qr.make();
document.getElementById('placeHolder').innerHTML = qr.createImgTag();
*/

module.exports = { User, Product, Role };
