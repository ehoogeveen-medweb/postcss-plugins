import s from"@csstools/postcss-progressive-custom-properties";import{color as o,SyntaxFlag as e,serializeRGB as t}from"@csstools/css-color-parser";import{hasFallback as r,hasSupportsAtRuleAncestor as i}from"@csstools/utilities";import{replaceComponentValues as n,parseCommaSeparatedListOfComponentValues as c,isFunctionNode as a,stringify as p}from"@csstools/css-parser-algorithms";import{tokenize as l}from"@csstools/css-tokenizer";const u=/\bhwb\(/i,m=/^hwb$/i,basePlugin=s=>({postcssPlugin:"postcss-hwb-function",Declaration(f){const g=f.value;if(!u.test(g))return;if(r(f))return;if(i(f,u))return;const v=n(c(l({css:g})),(s=>{if(!a(s)||!m.test(s.getName()))return;const r=o(s);return r&&!(r.syntaxFlags.has(e.Experimental)||r.syntaxFlags.has(e.HasNoneKeywords)||r.syntaxFlags.has(e.RelativeColorSyntax))?t(r):void 0})),b=p(v);b!==g&&(f.cloneBefore({value:b}),s?.preserve||f.remove())}});basePlugin.postcss=!0;const postcssPlugin=o=>{const e=Object.assign({preserve:!1,enableProgressiveCustomProperties:!0},o);return e.enableProgressiveCustomProperties&&e.preserve?{postcssPlugin:"postcss-hwb-function",plugins:[s(),basePlugin(e)]}:basePlugin(e)};postcssPlugin.postcss=!0;export{postcssPlugin as default};
