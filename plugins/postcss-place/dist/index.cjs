"use strict";var e=require("postcss-value-parser");function onCSSDeclaration(r,o,s){const n=r.prop.match(t)?.[1].toLowerCase();if(!n)return;let a;try{a=e(r.value)}catch(e){r.warn(o,`Failed to parse value '${r.value}'. Leaving the original value intact.`)}if(void 0===a)return;let i=[];i=a.nodes.length?a.nodes.filter((e=>"word"===e.type||"function"===e.type)).map((t=>e.stringify(t))):[e.stringify(a.nodes)],r.cloneBefore({prop:`align-${n}`,value:i[0]}),r.cloneBefore({prop:`justify-${n}`,value:i[1]||i[0]}),s.preserve||r.remove()}const t=/^place-(content|items|self)/i,creator=e=>{const r=Object.assign({preserve:!0},e);return{postcssPlugin:"postcss-place",Declaration(e,{result:o}){t.test(e.prop)&&onCSSDeclaration(e,o,r)}}};creator.postcss=!0,module.exports=creator;
