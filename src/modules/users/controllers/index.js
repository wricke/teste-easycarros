const { signIn } = require('../services');

module.exports.auth = async (req, res, next) => {
  try {
    const user = await signIn(req.body);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
