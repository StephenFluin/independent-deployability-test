const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "remote1"
  },
  optimization: {
    // Only needed to bypass a temporary bug in Angular CLI's webpack support
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        './about.module': './projects/remote1/src/about/about.module.ts',
      },


      // For hosts (please adjust)
      /*
      remotes: {
          'mfe1': "mfe1@http://localhost:3000/remoteEntry.js" 
      },
      */

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
