(window.webpackJsonp=window.webpackJsonp||[]).push([[973],{2304:function(e,t,a){"use strict";a.r(t),a.d(t,"SplitLayoutExamples",(function(){return m}));var n=a(776),r=a(0),i=a(1),l=a(683),s=a(682),o="I am a left child. "+n({count:5,sentenceUpperBound:15}),c="I am a right child. "+n({count:5,sentenceUpperBound:15}),m=function(){return r.createElement("div",{className:"mt2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"SplitLayout with one JSX.Element on each side"),r.createElement("div",{className:"form-control"},r.createElement(s.a,{leftChildren:r.createElement("div",{className:"p1"},o),rightChildren:r.createElement("div",{className:"p1"},c)}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"SplitLayout with multiple JSX.Elements on each side"),r.createElement("div",{className:"form-control"},r.createElement(s.a,{leftChildren:Object(i.range)(2).map((function(e){return r.createElement("div",{key:e,className:"p1"},o)})),rightChildren:[r.createElement("div",{key:"div",className:"p1"},"Something is loading:"),r.createElement(l.a,{key:"progress",className:"p1",numberOfSteps:10,currentStep:5})]}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"SplitLayout with classes on container"),r.createElement("div",{className:"form-control"},r.createElement(s.a,{leftChildren:r.createElement("div",{className:"p1"},o),rightChildren:r.createElement("div",{className:"p1"},c),className:"text-medium-blue bold"}))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"SplitLayout with classes on left and right children container"),r.createElement("div",{className:"form-control"},r.createElement("div",{className:"form-control"},r.createElement(s.a,{leftChildren:Object(i.range)(2).map((function(e){return r.createElement("div",{key:e,className:"p1"},o)})),rightChildren:Object(i.range)(2).map((function(e){return r.createElement("div",{key:e,className:"p1"},c)})),leftContainerClassName:"text-medium-blue bold",rightContainerClassName:"text-orange italic"})))))}},682:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),r=a(0),i=function(e){return r.createElement("div",{className:n("split-layout",e.className)},r.createElement("div",{className:n("column",e.leftContainerClassName)},e.leftChildren),r.createElement("div",{className:n("column",e.rightContainerClassName)},e.rightChildren))}},683:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(2),r=a(0),i=a(1),l=function(e){var t=e.numberOfSteps,a=e.currentStep,l=Object(i.range)(t).map((function(e){return r.createElement("div",{key:"step-progress-bar-"+Object(i.uniqueId)(),className:n("step-progress-bar",{"step-progress-bar-done":e<a,"step-progress-bar-doing":e===a,"step-progress-bar-to-do":e>a})})}));return r.createElement("div",{className:n("step-progress-bar-container",e.className)},l)}},776:function(e,t,a){(function(t){function n(e){return-1===e.indexOf("s",e.length-1)?e+"s":e}e.exports=function(){var r=arguments.length?arguments[0]:{},i=r.count||1,l=r.units||"sentences",s=r.sentenceLowerBound||5,o=r.sentenceUpperBound||15,c=r.paragraphLowerBound||3,m=r.paragraphUpperBound||7,u=r.format||"plain",d=r.words||a(777).words,p=r.random||Math.random,f=r.suffix;if(!f){var h=e.exports,g="undefined"!=typeof product&&"ReactNative"===product.navigator,v=void 0!==t&&"win32"===t.platform;f=!g&&h&&v?"\r\n":"\n"}function N(e,t){return Math.floor(p()*(t-e+1)+e)}function E(e){return e[N(0,e.length-1)]}function b(e,t,a){for(var n="",r={min:0,max:N(t,a)};r.min<r.max;)n+=" "+E(e),r.min++;return n.length&&(n=(n=n.slice(1)).charAt(0).toUpperCase()+n.slice(1)),n}function x(e,t,a,n,r){for(var i="",l={min:0,max:N(t,a)};l.min<l.max;)i+=". "+b(e,n,r),l.min++;return i.length&&(i=i.slice(2),i+="."),i}l=n(l.toLowerCase());var C,w,y={min:0,max:i},S="";for("html"===u&&(C="<p>",w="</p>");y.min<y.max;){switch(l.toLowerCase()){case"words":S+=" "+E(d);break;case"sentences":S+=". "+b(d,s,o);break;case"paragraphs":var O=x(d,c,m,s,o);"html"===u?(O=C+O+w,y.min<y.max-1&&(O+=f)):y.min<y.max-1&&(O+=f+f),S+=O}y.min++}if(S.length){var k=0;0===S.indexOf(". ")?k=2:0!==S.indexOf(".")&&0!==S.indexOf(" ")||(k=1),S=S.slice(k),"sentences"===l&&(S+=".")}return S}}).call(this,a(808))},777:function(e,t){e.exports={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]}}}]);
//# sourceMappingURL=973.bundle.js.map