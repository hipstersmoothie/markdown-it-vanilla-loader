module.exports = {
  mode: 'production',
  entry: './src/test.md',

  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          '../dist/markdown-it-loader.js'
        ]
      }
    ]
  }
};
