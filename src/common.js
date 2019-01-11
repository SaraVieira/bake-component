
module.exports = (parameters) => {
  const name = parameters.first || 'Component'
  const dir = parameters.second || null
  const path = dir || 'index'
  const extension = path.includes('.js') || path.includes('.jsx') ? '' : '.js'

  return {
    extension,
    name,
    path
  }
}
