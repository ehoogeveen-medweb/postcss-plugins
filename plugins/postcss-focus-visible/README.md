# PostCSS Focus Visible [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][PostCSS]

[<img alt="npm version" src="https://img.shields.io/npm/v/postcss-focus-visible.svg" height="20">][npm-url] [<img alt="Build Status" src="https://github.com/csstools/postcss-plugins/actions/workflows/test.yml/badge.svg?branch=main" height="20">][cli-url] [<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]<br><br>[<img alt="Baseline Status" src="https://cssdb.org/images/badges-baseline/focus-visible-pseudo-class.svg" height="20">][css-url] [<img alt="CSS Standard Status" src="https://cssdb.org/images/badges/focus-visible-pseudo-class.svg" height="20">][css-url] 

```bash
npm install postcss-focus-visible --save-dev
```

[PostCSS Focus Visible] lets you use the `:focus-visible` pseudo-class in CSS, 
following the [Selectors Level 4 specification].

To use this feature you need to do two things :
- add the [PostCSS plugin](#usage) that transforms the selector into a class or attribute
- add the [focus-visible polyfill] that sets the attribute or class on elements in a browser

[!['Can I use' table](https://caniuse.bitsofco.de/image/css-focus-visible.png)](https://caniuse.com/#feat=css-focus-visible)

```css

```css
:focus:not(:focus-visible) {
	outline: none;
}

/* becomes */

:focus:not(.focus-visible).js-focus-visible, .js-focus-visible :focus:not(.focus-visible) {
	outline: none;
}
:focus:not(:focus-visible) {
	outline: none;
}
```

[PostCSS Focus Visible] duplicates rules using the `:focus-visible` pseudo-class
with a `.focus-visible` class selector, the same selector used by the
[focus-visible polyfill].

## Usage

Add [PostCSS Focus Visible] to your project:

```bash
npm install postcss postcss-focus-visible --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssFocusVisible = require('postcss-focus-visible');

postcss([
	postcssFocusVisible(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS Focus Visible] runs in all Node environments, with special
instructions for:

- [Node](INSTALL.md#node)
- [PostCSS CLI](INSTALL.md#postcss-cli)
- [PostCSS Load Config](INSTALL.md#postcss-load-config)
- [Webpack](INSTALL.md#webpack)
- [Next.js](INSTALL.md#nextjs)
- [Gulp](INSTALL.md#gulp)
- [Grunt](INSTALL.md#grunt)

## Options

### preserve

The `preserve` option determines whether the original notation
is preserved. By default, it is preserved.

```js
postcssFocusVisible({ preserve: false })
```

```css
:focus:not(:focus-visible) {
	outline: none;
}

/* becomes */

:focus:not(.focus-visible).js-focus-visible, .js-focus-visible :focus:not(.focus-visible) {
	outline: none;
}
```

### replaceWith

The `replaceWith` option defines the selector to replace `:focus-visible`. By
default, the replacement selector is `.focus-visible`.

```js
postcssFocusVisible({ replaceWith: '[data-focus-visible-added]' })
```

```css
:focus:not(:focus-visible) {
	outline: none;
}

/* becomes */

<example.preserve-true.expect.css>
```

Note that if you want to keep using [focus-visible polyfill], the only 
acceptable value would be `[data-focus-visible-added]`,
given that the polyfill does not support arbitrary values.

### disablePolyfillReadyClass

The `disablePolyfillReadyClass` option determines if selectors are prefixed with an indicator class.
This class is only set on your document if the polyfill loads and is needed.

By default this option is `false`.
Set this to `true` to prevent the class from being added.

```js
postcssFocusVisible({ disablePolyfillReadyClass: true })
```

```css
:focus:not(:focus-visible) {
	outline: none;
}

/* becomes */

:focus:not(.focus-visible) {
	outline: none;
}
:focus:not(:focus-visible) {
	outline: none;
}
```

[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[css-url]: https://cssdb.org/#focus-visible-pseudo-class
[discord]: https://discord.gg/bUadyRwkJS
[npm-url]: https://www.npmjs.com/package/postcss-focus-visible

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Focus Visible]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-focus-visible
[Selectors Level 4 specification]: https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo
[focus-visible polyfill]: https://github.com/WICG/focus-visible
