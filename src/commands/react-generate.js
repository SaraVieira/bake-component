const FunctionalComponent = require('./functional')
const ClassComponent = require('./component')

module.exports = {
  name: 'react-generate',
  description: 'Creates a react component',
  run: async toolbox => {
    const { print } = toolbox

    const whatComponent = {
      type: 'list',
      name: 'type',
      message: 'What Type of Component?',
      choices: [
        { name: 'Functional', message: 'Functional', hint: 'Creates a functional react component' },
        {
          name: 'Class Component',
          message: 'Class Component',
          hint: 'Creates a functional Class Component'
        },
        {
          name: 'Styled Component',
          message: 'Styled Component',
          hint: 'Creates a Styled Component'
        }
      ]
    }

    const componentName = {
      type: 'input',
      name: 'name',
      message: 'What is the Component name? (defaults to Component)'
    }

    const componentDir = {
      type: 'input',
      name: 'where',
      message:
        'Where do you want to generate your component? (Defaults to ./index.js)'
    }

    const questions = [whatComponent, componentName, componentDir]
    const { name, type, where } = await toolbox.prompt.ask(questions)

    if (type === 'Functional') {
      return FunctionalComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: where
        }
      })
    }

    if (type === 'Class Component') {
      return ClassComponent.run({
        ...toolbox,
        parameters: {
          first: name,
          second: where
        }
      })
    }
  }
}
