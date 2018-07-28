const sass = require('@stencil/sass');

exports.config = {
  namespace: 'schematic',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  plugins: [
    sass()
  ]
};