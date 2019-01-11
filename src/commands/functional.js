const generateDefaults = require('../common')

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

    const { path, extension, name } = generateDefaults(parameters)


    await generate({
      template: 'functional.js.ejs',
      target: `${path}${extension}`,
      props: { name }
    })

    info(`Generated file at ${path}${extension}`)
  }
}
