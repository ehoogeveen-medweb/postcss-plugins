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

[<humanReadableName>] lets you use logical, rather than physical, direction and dimension mappings in CSS, following the [CSS Logical Properties and Values] specification.

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
	inlineDirection: 'right-to-left'
})
```

```pcss
<example.css>

/* becomes */

<example.hebrew.expect.css>
```

Each direction must be one of the following:

- `top-to-bottom`
- `bottom-to-top`
- `left-to-right`
- `right-to-left`

Please do note that transformations won't run if `inlineDirection` becomes vertical.

<linkList>
[CSS Logical Properties and Values]: <specUrl>
