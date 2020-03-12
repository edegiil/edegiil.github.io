module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"wingtree.github.io","short_name":"wingtree","start_url":"/","background_color":"#d8d8d8","theme_color":"#505050","display":"minimal-ui","icon":"src/images/favicon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Raleway:100,400,700","ZCOOL QingKe HuangYou:100,400,700","Jua:400","Noto Sans KR: 100, 400, 700"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
