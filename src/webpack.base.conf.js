// var webpack = require('webpack')
module.exports = {
    plugins: [
      // new webpack.DefinePlugin({ "global.GENTLY": true }),
      // new webpack.IgnorePlugin(/\.(css|less)$/),
      // new webpack.optimize.CommonsChunkPlugin({
      //     names: ['vendor', 'manifest']
      //   }),
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        }),
    //     new webpack.ProvidePlugin({
    //       $: "jquery",
    //       jQuery: "jquery",
    //       "window.jQuery": "jquery"
    // }),
  ],
  externals: [
    {
        formidable: 'commonjs formidable',
    },
],};