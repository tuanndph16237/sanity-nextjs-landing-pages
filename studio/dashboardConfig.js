export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '624ce950d2a3032b38992acd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9tcfogha',
                  apiId: 'ea8cc100-f23b-49cc-8020-a6b657d0130e'
                },
                {
                  buildHookId: '624ce950d64ee1190fff2088',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sfxf4i9b',
                  apiId: '888c28d2-b664-46a1-aeed-60cc9d8ec4c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tuanndph16237/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sfxf4i9b.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
