<!-- Available Variables: -->
<!-- <humanReadableName> PostCSS Your Plugin -->
<!-- <exportName> postcssYourPlugin -->
<!-- <packageName> @csstools/postcss-your-plugin -->
<!-- <packageVersion> 1.0.0 -->
<!-- <packagePath> plugins/postcss-your-plugin -->
<!-- <cssdbId> your-feature -->
<!-- <specUrl> https://www.w3.org/TR/css-color-4/#funcdef-color -->
<!-- <example.css> file contents for examples/example.css -->
<!-- <header> -->
<!-- <usage> usage instructions -->
<!-- <envSupport> -->
<!-- <corsWarning> -->
<!-- <linkList> -->
<!-- to generate : npm run docs -->

<header>

[<humanReadableName>] lets you easily use `vb` and `vi` length units following the [CSS-Values-4 Specification].

```pcss
<example.css>

/* becomes */

<example.expect.css>
```

<usage>

<envSupport>

## Options

 ### inlineDirection

 The `inlineDirection` option allows you to specify the direction of the inline axe. The default value is `left-to-right` respectively which would match any latin language.

 You might want to tweak these value if you are using a different writing system, such as Arabic, Hebrew or Chinese for example.

 ```js
 <exportName>({
 	inlineDirection: 'top-to-bottom'
 })
 ```

 ```pcss
 <example.css>

 /* becomes */

 <example.vertical.expect.css>
 ```

 Each direction must be one of the following:

 - `top-to-bottom`
 - `bottom-to-top`
 - `left-to-right`
 - `right-to-left`

 Please do note that transformations won't do anything particular for `right-to-left` or `bottom-to-top`.

### preserve

The `preserve` option determines whether the original notation
is preserved. By default, it is preserved.

```js
<exportName>({ preserve: false })
```

```pcss
<example.css>

/* becomes */

<example.preserve-false.expect.css>
```

<linkList>
[CSS-Values-4 Specification]: <specUrl>
