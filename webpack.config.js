const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "shell"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      /*
      name: "id-test",
      library: { type: "var", name: "id-test" },
      filename: "remoteEntry.js",
      exposes: {
          './Component': './/src/app/app.component.ts',
      },        
      */

      // For hosts (please adjust)

      remotes: {
        // 'remote1': "remote1"
        // 'remote1': "remote1@http://localhost:4201/remoteEntry.js" 
      },
      remoteType: 'var',

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
