//next indicates that it passes on request to the next middleware
//in the chain.
module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "You don't have enough credits!" });
  }

  next();
};
