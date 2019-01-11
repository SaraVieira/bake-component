const generateDefaults = require('../common')

module.exports = {
  name: 'styled',
  alias: ['s'],
  description: 'Creates a styled component',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const { path, extension, name } = generateDefaults(parameters)

    await generate({
      template: 'styled.js.ejs',
      target: `${path}${extension}`,
      props: { name }
    })

    info(`Generated file at ${path}${extension}`)
  }
}
