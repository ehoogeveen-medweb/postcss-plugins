"use strict";var s=require("@csstools/postcss-progressive-custom-properties"),e=require("@csstools/css-color-parser"),t=require("@csstools/utilities"),r=require("@csstools/css-parser-algorithms"),a=require("@csstools/css-tokenizer");const o=/\b(?:rgb|hsl|hwb|lab|lch|oklch|oklab|color)\(/i,l=/\b(?:rgb|hsl|hwb|lab|lch|oklch|oklab|color)\(\s*?from/i,i=/^(?:rgb|hsl|hwb|lab|lch|oklch|oklab|color)$/i,n=/from/i,basePlugin=s=>({postcssPlugin:"postcss-relative-color-syntax",Declaration(c){const u=c.value;if(!o.test(u)||!n.test(u))return;if(t.hasFallback(c))return;if(t.hasSupportsAtRuleAncestor(c,l))return;const p=a.tokenize({css:u}),g=r.replaceComponentValues(r.parseCommaSeparatedListOfComponentValues(p),(s=>{if(!r.isFunctionNode(s)||!i.test(s.getName()))return;const t=e.color(s);return t&&!t.syntaxFlags.has(e.SyntaxFlag.Experimental)&&!t.syntaxFlags.has(e.SyntaxFlag.HasNoneKeywords)&&t.syntaxFlags.has(e.SyntaxFlag.RelativeColorSyntax)?e.serializeRGB(t):void 0})),b=r.stringify(g);if(b===u)return;let y=b;s?.subFeatures.displayP3&&(y=r.stringify(r.replaceComponentValues(r.parseCommaSeparatedListOfComponentValues(p),(s=>{if(!r.isFunctionNode(s)||!i.test(s.getName()))return;const t=e.color(s);return t&&!t.syntaxFlags.has(e.SyntaxFlag.Experimental)&&!t.syntaxFlags.has(e.SyntaxFlag.HasNoneKeywords)&&t.syntaxFlags.has(e.SyntaxFlag.RelativeColorSyntax)?e.colorDataFitsRGB_Gamut(t)?e.serializeRGB(t):e.serializeP3(t):void 0})))),c.cloneBefore({value:b}),s?.subFeatures.displayP3&&y!==b&&c.cloneBefore({value:y}),s?.preserve||c.remove()}});basePlugin.postcss=!0;const postcssPlugin=e=>{const t=Object.assign({enableProgressiveCustomProperties:!0,preserve:!1,subFeatures:{displayP3:!0}},e);return t.subFeatures=Object.assign({displayP3:!0},t.subFeatures),t.enableProgressiveCustomProperties&&(t.preserve||t.subFeatures.displayP3)?{postcssPlugin:"postcss-relative-color-syntax",plugins:[s(),basePlugin(t)]}:basePlugin(t)};postcssPlugin.postcss=!0,module.exports=postcssPlugin;
