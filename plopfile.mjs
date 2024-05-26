export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Enter the directory path:',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      },
      {
        type: 'confirm',
        name: 'wantTest',
        message: 'Do you want to add a test file?'
      }
    ],
    actions: function(data) {
      let actions = [
        {
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'plop-templates/Component.stories.tsx.hbs'
        }
      ]

      if (data.wantTest) {
        actions.push({
          type: 'add',
          path: '{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'plop-templates/Component.test.tsx.hbs'
        })
      }

      return actions
    }
  });
}