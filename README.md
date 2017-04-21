# simple_static_website_template
Simple Static Website Templates with pug.js, Sass, babel and Webpack

## Set up
1. Clone this repository
2. Install dependencies with `yarn`or `npm install`

## Start local server
Run `yarn start` or `npm run start`

## Development tips

### Create a new page
1. Create .pug file in app/templates/ directory.
2. Write following code into webpack.config.babel.js. See also https://github.com/jantimon/html-webpack-plugin
```
let plugins = [
    new ExtractTextPlugin({
        filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
        filename: `index.html`,
        template: `app/templates/index.pug`,
    }),
//new File
    new HtmlWebpackPlugin({
        filename: `new-page.html`,
        template: `app/templates/your_new_template.pug`,
    }),

]; 
```

### Require assets in your template file
```
img(src=require('./path/to/image.png'))
```
See details: https://github.com/pugjs/pug-loader
