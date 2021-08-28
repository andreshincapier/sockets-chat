const aes256 = require("aes256");
const secret = "S3cre37K3y";

const encryptMessage = (message) => {
  return aes256.encrypt(secret, message);
};

const decryptMessage = (message) => {
  return aes256.decrypt(secret, message);
};

module.exports = {
  encryptMessage,
  decryptMessage,
};
