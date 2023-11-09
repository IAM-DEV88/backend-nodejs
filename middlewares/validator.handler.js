const boom = require('@hapi/boom')

function validatorHandler(schema, property) {
  console.log("validatorHandler");
  return (req, res, next) => {
    const data = req[property]
    const {error} = schema.validate(data)
    if (error) {
      boom.badRequest(error)
    }
  }
}

module.exports = validatorHandler
