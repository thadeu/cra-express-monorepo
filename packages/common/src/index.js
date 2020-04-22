function logger() {
  return console.log(arguments);
}

function auth(req, res, next) {
  console.log(req);
  return next();
}

module.exports.logger = logger;
module.exports.auth = auth;
