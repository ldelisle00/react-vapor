(window.webpackJsonp=window.webpackJsonp||[]).push([[964],{1002:function(t,n,e){var o=e(624);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0},r=e(71)(o,i);o.locals&&(t.exports=o.locals),t.hot.accept(624,(function(){var n=e(624);if("string"==typeof n&&(n=[[t.i,n,""]]),!function(t,n){var e,o=0;for(e in t){if(!n||t[e]!==n[e])return!1;o++}for(e in n)o--;return 0===o}(o.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");r(n)})),t.hot.dispose((function(){r()}))},2303:function(t,n,e){"use strict";e.r(n),e.d(n,"FooterExample",(function(){return l}));var o=e(775),i=e(0),r=e(92),a=e(175),s=e(682),c=function(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var o,i,r=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(t){i={error:t}}finally{try{o&&!o.done&&(e=r.return)&&e.call(r)}finally{if(i)throw i.error}}return a},u=o({count:200}),l=function(){return i.createElement(p,null)},p=function(){var t=c(i.useState(!1),2),n=t[0],e=t[1];return i.createElement(a.a,{title:"A sticky footer example"},i.createElement(r.a,{name:"toggle sticky footer",onClick:function(){return e(!n)}}),i.createElement("div",{className:"mt2"},u),i.createElement(s.a,{className:"sticky-footer-mod-header",isOpened:n},i.createElement(r.a,{primary:!0,name:"fake button   "})))}},624:function(t,n,e){(n=t.exports=e(70)(!1)).push([t.i,"/* ----------- Deprecated Palette ----------- */\n.StickyFooter-stickyFooter-1xhGV9I_nUv3jgB_VJNY8z {\n  position: -webkit-sticky;\n  position: sticky;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #f1f3f4;\n  border-radius: 0 0 2px 2px;\n  -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n  visibility: hidden;\n  opacity: 0;\n  transition: width 0.1s ease-in-out, opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, width 0.1s ease-in-out, opacity 0.1s ease-in-out;\n  transition: transform 0.1s ease-in-out, width 0.1s ease-in-out, opacity 0.1s ease-in-out, -webkit-transform 0.1s ease-in-out;\n  will-change: transform; }\n\n.StickyFooter-stickyFooterOpened-1khYQMi5wJ0Iu-c_wzbjb3 {\n  height: unset;\n  padding: 12px 20px;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  visibility: visible;\n  opacity: 1; }\n\n.sticky-footer-mod-header {\n  margin-right: -40px;\n  margin-left: -40px; }\n",""]),n.locals={stickyFooter:"StickyFooter-stickyFooter-1xhGV9I_nUv3jgB_VJNY8z",stickyFooterOpened:"StickyFooter-stickyFooterOpened-1khYQMi5wJ0Iu-c_wzbjb3"}},682:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o,i=e(2),r=e(0),a=e(1002),s=(o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),c=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return s(n,t),n.prototype.render=function(){var t,n=this.props,e=n.id,o=n.className,s=n.isOpened;return r.createElement("div",{id:e,className:i(a.stickyFooter,(t={},t[a.stickyFooterOpened]=s,t),o)},this.props.children)},n.ID="StickyFooter",n.defaultProps={id:n.ID},n}(r.Component)},775:function(t,n,e){(function(n){function o(t){return-1===t.indexOf("s",t.length-1)?t+"s":t}t.exports=function(){var i=arguments.length?arguments[0]:{},r=i.count||1,a=i.units||"sentences",s=i.sentenceLowerBound||5,c=i.sentenceUpperBound||15,u=i.paragraphLowerBound||3,l=i.paragraphUpperBound||7,p=i.format||"plain",f=i.words||e(776).words,d=i.random||Math.random,m=i.suffix;if(!m){var h=t.exports,y="undefined"!=typeof product&&"ReactNative"===product.navigator,w=void 0!==n&&"win32"===n.platform;m=!y&&h&&w?"\r\n":"\n"}function x(t,n){return Math.floor(d()*(n-t+1)+t)}function k(t){return t[x(0,t.length-1)]}function v(t,n,e){for(var o="",i={min:0,max:x(n,e)};i.min<i.max;)o+=" "+k(t),i.min++;return o.length&&(o=(o=o.slice(1)).charAt(0).toUpperCase()+o.slice(1)),o}function g(t,n,e,o,i){for(var r="",a={min:0,max:x(n,e)};a.min<a.max;)r+=". "+v(t,o,i),a.min++;return r.length&&(r=r.slice(2),r+="."),r}a=o(a.toLowerCase());var b,F,O={min:0,max:r},_="";for("html"===p&&(b="<p>",F="</p>");O.min<O.max;){switch(a.toLowerCase()){case"words":_+=" "+k(f);break;case"sentences":_+=". "+v(f,s,c);break;case"paragraphs":var S=g(f,u,l,s,c);"html"===p?(S=b+S+F,O.min<O.max-1&&(S+=m)):O.min<O.max-1&&(S+=m+m),_+=S}O.min++}if(_.length){var E=0;0===_.indexOf(". ")?E=2:0!==_.indexOf(".")&&0!==_.indexOf(" ")||(E=1),_=_.slice(E),"sentences"===a&&(_+=".")}return _}}).call(this,e(807))},776:function(t,n){t.exports={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]}}}]);
//# sourceMappingURL=964.bundle.js.map