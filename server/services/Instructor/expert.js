const CryptoJS = require('crypto-js');
const { instructor } = require('../../models');
const secretkey = '123213211';
module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const data = await instructor.findAll({ where: { id } });
    return res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
