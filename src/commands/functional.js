module.exports = {
  name: 'functional',
  alias: ['f'],
  description: 'Creates a functional react component',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first || 'Component'
    const dir = parameters.second || null
    const path = dir || 'index'
    const extension = path.includes('.js') ? '' : '.js'

    await generate({
      template: 'functional.js.ejs',
      target: `${path}${extension}`,
      props: { name }
    })

    info(`Generated file at ${path}${extension}`)
  }
}
