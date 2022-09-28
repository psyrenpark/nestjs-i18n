"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},l="Plurals",i={unversionedId:"guides/plurals",id:"guides/plurals",title:"Plurals",description:"You can use plurals inside your translations as followed. You need to provide some of the listed categories required by your language rules Language Plural Rules. After finding your language in the table, check out the Type column. The cardinal type includes all plural categories you must implement. The next Example column will help you find out the correct form for each category.",source:"@site/docs/guides/plurals.md",sourceDirName:"guides",slug:"/guides/plurals",permalink:"/guides/plurals",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/guides/plurals.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Fallback languages",permalink:"/guides/fallback-languages"},next:{title:"GraphQL",permalink:"/guides/graphql"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plurals"},"Plurals"),(0,a.kt)("p",null,"You can use plurals inside your translations as followed. You need to provide some of the listed categories required by your language rules: ",(0,a.kt)("inlineCode",{parentName:"p"},"zero"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"one"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"two"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"few"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"many"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"other"),". To check which categories you need to specify for your language, you can use this reference: ",(0,a.kt)("a",{parentName:"p",href:"https://unicode-org.github.io/cldr-staging/charts/37/supplemental/language_plural_rules.html"},"Language Plural Rules"),". After finding your language in the table, check out the ",(0,a.kt)("strong",{parentName:"p"},"Type")," column. The ",(0,a.kt)("strong",{parentName:"p"},"cardinal")," type includes all plural categories you must implement. The next ",(0,a.kt)("strong",{parentName:"p"},"Example")," column will help you find out the correct form for each category."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/i18n/en/test.json"',title:'"src/i18n/en/test.json"'},'{\n  "day_interval": {\n    "one": "Every day",\n    "other": "Every {count} days",\n    "zero": "Never"\n  },\n  "cat": {\n    "one": "cat",\n    "other": "cats",\n    "zero": "cats"\n  }\n}\n')),(0,a.kt)("p",null,"For i18n to pick the right plural you need to provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," argument within the translation function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.controller.ts"',title:'"src/app.controller.ts"'},"await i18n.t('test.day_interval', {\n  args: { count: 1 },\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: English plural rules does not require ",(0,a.kt)("inlineCode",{parentName:"p"},"zero")," category. This behavior has been kept for backwards compatibility and will work for any language.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/i18n/uk/test.json"',title:'"src/i18n/uk/test.json"'},'{\n  "day_interval": {\n    "one": "{count} \u0434\u0435\u043d\u044c",\n    "few": "{count} \u0434\u043d\u0456",\n    "many": "{count} \u0434\u043d\u0456\u0432",\n    "other": "{count} \u0434\u043d\u044f"\n  }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.controller.ts"',title:'"src/app.controller.ts"'},"await i18n.t('test.day_interval', { args: { count: 1 } }); // => 1 \u0434\u0435\u043d\u044c\nawait i18n.t('test.day_interval', { args: { count: 2 } }); // => 2 \u0434\u043d\u0456\nawait i18n.t('test.day_interval', { args: { count: 5 } }); // => 5 \u0434\u043d\u0456\u0432\nawait i18n.t('test.day_interval', { args: { count: 1.5 } }); // => 1.5 \u0434\u043d\u044f\n")))}p.isMDXComponent=!0}}]);