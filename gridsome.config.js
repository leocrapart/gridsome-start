// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Valerie Confitures',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: 'keyD7bLHEY2n5a1wb',
        base: 'appaB8go9Ez5TcfQR',
        tables: [
          {
            name: 'Table 1',
            typeName: 'Products'
          }
        ]
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  }
}
