export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6089536f803c6a00d9787cf8',
                  title: 'Sanity Studio',
                  name: 'koda-2023-studio',
                  apiId: '8fbcd926-5c6d-4989-8ec0-aa45a9f64642'
                },
                {
                  buildHookId: '6089536f36b9c8057dec782e',
                  title: 'Blog Website',
                  name: 'koda-2023',
                  apiId: '25be6734-4245-4978-9edb-e18e7c7cafbc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RobertBrown772/Koda2023',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://koda-2023.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
