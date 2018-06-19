[![npm](https://img.shields.io/npm/dt/markdown-it-vanilla-loader.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-it-vanilla-loader)

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Markdown-It-Vanilla-Loader</h1>
  <p>Uses <a href="https://github.com/markdown-it/markdown-it">markdown-it</a> to render markdown to HTML and assumes nothing about your configuration.</p>
</div>

## Install

```bash
yarn add -D markdown-it-vanilla-loader
```

## Usage

**Input**

```markdown
# Your Markdown File

With some content.
```

**webpack.config.js**

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'html-loader',
          {
            loader: 'markdown-it-vanilla-loader',
            options: {
              highlight: (code, language) => {
                return language && highlightjs.getLanguage(language)
                  ? highlightjs.highlight(language, code).value
                  : code;
              }
            }
          }
        ]
      }
    ]
  }
};
```

**Output**

```html
<h1>Your Markdown File</h1>

<p>With some content.</p>
```

## Options

This loader accepts any options that are allowed on `markdown-it`, those options can be found [here](https://github.com/markdown-it/markdown-it#init-with-presets-and-options).

|            Name            |   Type    | Default | Description                        |
| :------------------------: | :-------: | :-----: | :--------------------------------- |
| **[`plugins`](#fallback)** | `{array}` |  `[]`   | Plugins to load into `markdown-it` |

### `plugins`

Plugins can be defined in 2 ways.

1.  Just a string with no options.
2.  An array where the first item is the plugin name and the second item is an object with options for that plugin.

**webpack.config.js**

```javascript
{
  loader: 'markdown-it-vanilla-loader',
  options: {
    plugins: [
      // Just a string
      'markdown-it-anchor',
      // Array with options
      [
        'markdown-it-anchor',
        {
          permalink: true,
          permalinkSymbol: '',
          level: 2
        }
      ]
    ]
  }
}
```

### Example

```
cd example
yarn
yarn build
```
