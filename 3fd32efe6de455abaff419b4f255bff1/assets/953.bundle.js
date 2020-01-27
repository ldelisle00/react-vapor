(window.webpackJsonp=window.webpackJsonp||[]).push([[953],{1004:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(1),r={getIsDirty:function(e,t){return o.contains(e.dirtyComponents||[],t.id)}}},2285:function(e,t,n){"use strict";n.r(t),n.d(t,"ModalWindowExamples",(function(){return g}));var o=n(775),r=n(0),a=n(7),i=n(1),l=n(199),s=n(1004),c=n(92),p=n(536),u=n(175),d=n(13),m=n(40),f=n(758),h=n(51),v=n(630),y=n(759),g=function(){return r.createElement(u.a,{title:"Modal Window Examples"},r.createElement(b,null),r.createElement(O,{id:"UnsavedChangeModal"}),r.createElement(w,null))};g.title="Modal Window",g.description="Modal windows appear in front of the main page and disable it while they are visible. They act as a zoom in on an element of the main page that allows additionnal interaction or configuration. They make possible for users to focus on their content whilst avoiding leaving the context from which they have been called.";var C=function(e){return{open:function(t){return e(Object(h.e)(t))},close:function(t){return e(Object(h.c)(t))},toggleIsDirty:function(t,n){return e(l.b.toggle(t,n))}}},b=Object(a.b)(null,C)((function(e){var t=e.open,n=e.close,a=e.toggleIsDirty,i=function(e){n(e),a(e,!1)},l="Modal-Connected-#1";return r.createElement(u.a,{level:2,title:"Modals connected to the redux store"},r.createElement(u.a,{level:3,title:"A simple modal window connected"},r.createElement(c.a,{className:"btn",onClick:function(){return t(l)}},"Open Modal"),r.createElement(v.a,{id:l,title:"Modal composite",modalHeaderChildren:r.createElement(m.a,{title:"A tooltip for the title"},r.createElement(d.a,{svgName:"help",className:"icon mod-2x ml1",svgClass:"fill-orange"})),modalBodyChildren:r.createElement("div",{className:"mt2"},o({count:10})),modalFooterChildren:r.createElement(c.a,{className:"btn",onClick:function(){return i(l)}},"Close"),modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"]})),r.createElement(u.a,{level:3,title:"A modal with additionnal configuration props"},r.createElement(c.a,{className:"btn",onClick:function(){return t("example-4")}},"Open Modal"),r.createElement(v.a,{id:"example-4",title:"Modal with addtional ReactModal props",classes:["mod-fade-in-scale"],modalBodyChildren:"This modal only closes by using the close button or the X.",modalFooterChildren:r.createElement(c.a,{className:"btn",onClick:function(){return i("example-4")}},"Close"),modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"],docLink:{url:"https://www.coveo.com",tooltip:{title:"Go to coveo.com"}},shouldCloseOnEsc:!1,shouldCloseOnOverlayClick:!1,onAfterOpen:function(){return alert("The modal content has mounted and is ready to open.")},closeCallback:function(){return alert("The modal has closed.")}})))})),O=Object(a.b)((function(e,t){return{isDirty:s.a.getIsDirty(e,{id:t.id})}}),C)((function(e){var t=e.id,n=e.close,a=e.open,l=e.toggleIsDirty,s=e.isDirty,d=function(){n(t),l(t,!1)};return r.createElement(u.a,{level:3,title:"A modal implemented with the <UnsavedChangesModalProvider/>"},r.createElement(c.a,{className:"btn",onClick:function(){return a(t)}},"Open Modal"),r.createElement(y.a,{isDirty:s},(function(e){var n=e.promptBefore;return r.createElement(v.a,{id:t,title:"A modal with a dirty change discard prevention",classes:["mod-fade-in-scale"],modalBodyChildren:r.createElement("div",{className:"mt2"},r.createElement("div",{className:"mb2"},r.createElement(p.a,{id:"input",labelTitle:"Try to close me with dirty changes.",onChange:function(e){return l(t,!i.isEmpty(e))}})),o({count:10})),modalFooterChildren:r.createElement(c.a,{className:"btn",onClick:function(){return n((function(){return d()}))&&d()}},"Close"),validateShouldNavigate:function(){return n((function(){return d()}))},modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"],docLink:{url:"https://www.coveo.com",tooltip:{title:"Go to coveo.com"}}})})))})),w=Object(a.b)(null,C)((function(e){var t=e.open;return r.createElement(u.a,{level:3,title:"A loading modal"},r.createElement(c.a,{className:"btn",onClick:function(){return t("Loading-modal-example")}},"Open Modal"),r.createElement(f.a,{id:"Loading-modal-example",title:"my loading title",openOnMount:!1}))}))},536:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o,r=n(2),a=n(0),i=n(1),l=n(556),s=n(176),c=n(40),p=n(537),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(){return(d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e},h=["number","text","password"],v=["id","classes","innerInputClasses","validate","labelTitle","labelProps","validateOnChange","disabledOnMount","validateOnMount","disabledTooltip","minimum","maximum","onBlur","defaultValue","valid","indeterminate","onDestroy","onRender","onChange","onClick"],y=function(e){function t(t,n){var o=e.call(this,t,n)||this;return o.state={valid:o.props.valid},o}return u(t,e),t.prototype.componentWillMount=function(){if(this.props.onRender){var e=this.props.validateOnMount&&this.props.validate&&this.props.validate(this.props.defaultValue||"");this.props.onRender(this.props.defaultValue,e,this.props.disabledOnMount)}},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},t.prototype.componentDidUpdate=function(e){this.props.valid!==e.valid&&this.validate(),e.value!==this.props.value&&this.innerInput&&(this.innerInput.value=this.props.value)},t.prototype.reset=function(){this.innerInput.value=""},t.prototype.getInnerValue=function(){return this.innerInput&&this.innerInput.value||""},t.prototype.validate=function(){this.setState({valid:this.props.valid&&!(this.props.validate&&!this.props.validate(this.getInnerValue()))})},t.prototype.handleBlur=function(){this.props.onBlur&&this.props.onBlur(this.getInnerValue())},t.prototype.handleChange=function(){if(this.props.onChange){var e=this.props.validateOnChange&&this.props.validate&&this.props.validate(this.getInnerValue());this.props.onChange(this.getInnerValue(),e)}},t.prototype.handleClick=function(e){this.props.onClick&&this.props.onClick(e)},t.prototype.handleKeyUp=function(e){this.props.onKeyUp&&this.props.onKeyUp(e)},t.prototype.getLabel=function(){var e=this.props,t=e.labelProps,n=e.labelTitle;return"string"==typeof n?n||this.props.validate?a.createElement(p.a,d({key:this.props.id+"label",htmlFor:this.props.id},t),n):null:n},t.prototype.render=function(){var e=this,t=r("input-wrapper validate",{"input-field":Object(i.contains)(h,this.props.type)},this.props.classes),n=r({invalid:!this.state.valid&&Object(i.contains)(h,this.props.type)},this.props.innerInputClasses),o=[a.createElement("input",d({key:this.props.id,id:this.props.id,className:n,defaultValue:Object(i.isUndefined)(this.props.value)?this.props.defaultValue:this.props.value,ref:function(t){return e.innerInput=t},onBlur:function(){return e.handleBlur()},onChange:function(){return e.handleChange()},onKeyUp:function(t){return e.handleKeyUp(t)},min:this.props.minimum,max:this.props.maximum},i.omit(this.props,f(l.a.input,v)))),this.getLabel(),this.props.children];return this.props.disabled&&this.props.disabledTooltip?a.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},a.createElement(c.a,{title:this.props.disabledTooltip,placement:s.a.Right},o)):a.createElement("div",{className:t,onClick:function(t){return e.handleClick(t)}},o)},t.defaultProps={id:Object(i.uniqueId)("input"),type:"text",valid:!0,labelTitle:"",required:!0},t}(a.Component)},537:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o,r=n(2),a=n(0),i=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=r(this.props.classes),t=this.props,n=t.validMessage,o=t.invalidMessage,i=t.children,c=s(t,["validMessage","invalidMessage","children"]);return a.createElement("label",l({className:e,"data-valid-message":n,"data-invalid-message":o},c),i)},t}(a.Component)},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},r=["children","dangerouslySetInnerHTML"],a={internal:r,input:function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e}(r,["defaultValue","onClick","onChange","onBlur","value","valid"])}},561:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,r=n(2),a=n(0),i=n(1),l=n(13),s=n(590),c=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.componentDidMount=function(){this.canClose=this.props.lastOpened},t.prototype.componentDidUpdate=function(){var e=this;this.canClose=!1,i.defer((function(){return e.canClose=e.props.lastOpened}))},t.prototype.close=function(){var e,t;this.canClose&&(null===(t=(e=this.props).onClose)||void 0===t||t.call(e))},t.prototype.render=function(){var e=this,t=r("modal-header",this.props.classes),n=this.props.docLink?p({svg:{svgName:"help",svgClass:"fill-orange icon mod-20"}},this.props.docLink):null,o=null;return this.props.onClose&&(o=a.createElement("span",{className:"small-close",onClick:function(){e.close()}},a.createElement(l.a,{svgName:"close",className:"icon mod-lg fill-pure-white"}))),a.createElement("header",{className:t},a.createElement("div",{className:"truncate"},a.createElement(s.a,{text:this.props.title,documentationLink:n,classes:["regular"]})),this.props.children,o)},t.defaultProps={lastOpened:!0},t}(a.Component)},577:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var o,r=n(2),a=n(0),i=n(275),l=n(1),s=n(46),c=n(588),p=n(186),u=n(561),d=n(661),m=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(){return(f=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=["modalHeaderChildren","modalHeaderClasses","modalBodyChildren","modalBodyClasses","modalFooterChildren","modalFooterClasses","isPrompt","validateShouldNavigate","id","classes","closeCallback","closeTimeout","openOnMount","contentRef","title","docLink","displayFor","layer","withReduxState","isOpened","onDestroy","onRender","onClose"],v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onRequestClose=function(e){var n,o,r,a;e.preventDefault(),e.stopPropagation(),t.props.validateShouldNavigate?t.props.validateShouldNavigate(t.props.isDirty)&&(null===(o=(n=t.props).onClose)||void 0===o||o.call(n)):null===(a=(r=t.props).onClose)||void 0===a||a.call(r)},t.getModalBody=function(){return t.props.modalBodyChildren&&a.createElement(c.a,{key:"modal-body",classes:t.props.modalBodyClasses},t.props.modalBodyChildren)},t.getModalFooter=function(){return t.props.modalFooterChildren&&a.createElement(p.a,{key:"modal-footer",classes:t.props.modalFooterClasses},t.props.modalFooterChildren)},t.getParent=function(){return document.querySelector(s.a.MODAL_ROOT)},t}return m(t,e),t.prototype.render=function(){var e,t=l.omit(this.props,h);return a.createElement(i,f({key:this.props.id,isOpen:this.props.isOpened,className:{base:r("modal-container --react-modal",this.props.classes),afterOpen:"opened",beforeClose:"closed"},overlayClassName:{base:r("modal-backdrop --react-modal",(e={},e["layer-"+this.props.layer]=this.props.layer>0,e)),afterOpen:"opened",beforeClose:"clear"},onRequestClose:this.onRequestClose,closeTimeoutMS:this.props.closeTimeout,contentRef:this.props.contentRef,parentSelector:this.getParent,onAfterClose:this.props.closeCallback},t),a.createElement("div",{className:"modal-content",id:this.props.id},this.getModalHeader(),this.getModalBody(),this.getModalFooter()))},t.prototype.componentDidMount=function(){var e,t;null===(t=(e=this.props).onRender)||void 0===t||t.call(e)},t.prototype.componentWillUnmount=function(){var e,t;null===(t=(e=this.props).onDestroy)||void 0===t||t.call(e)},t.prototype.getModalHeader=function(){var e={id:this.props.id,title:this.props.title,classes:this.props.modalHeaderClasses,docLink:this.props.docLink};return this.props.title?this.props.withReduxState?a.createElement(d.a,f({key:"modal-header"},e),this.props.modalHeaderChildren):a.createElement(u.a,f({key:"modal-header"},e,{onClose:this.props.onClose}),this.props.modalHeaderChildren):null},t.defaultProps={id:l.uniqueId("modal"),closeTimeout:s.a.MODAL_TIMEOUT},t}(a.PureComponent)},588:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o,r=n(2),a=n(0),i=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=r("modal-body relative",this.props.classes);return a.createElement("div",{className:e},this.props.children)},t}(a.Component)},630:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(7),r=n(6),a=n(51),i=n(577),l=Object(o.b)((function(e,t){return{withReduxState:!0,isOpened:e.modals&&e.modals.some((function(e){return e.id===t.id&&e.isOpened})),layer:e.openModals?e.openModals.indexOf(t.id)+1:0}}),(function(e,t){return{onRender:function(){return e(Object(a.b)(t.id,t.openOnMount))},onDestroy:function(){return e(Object(a.f)(t.id))},onClose:function(){return e(Object(a.c)(t.id))}}}),r.c.mergeProps)(i.a)},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(7),r=n(6),a=n(51),i=n(561),l=Object(o.b)(void 0,(function(e,t){return{onClose:function(){return e(Object(a.c)(t.id))}}}),r.c.mergeProps)(i.a)},758:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(77),a=n(630),i=function(e){return o.createElement(a.a,{id:e.id,classes:"mod-prompt",modalBodyChildren:o.createElement("div",{className:"loading-prompt"},e.title?o.createElement("div",null,e.title):null,o.createElement(r.a,{fullContent:!0})),openOnMount:e.openOnMount,isPrompt:!0})};i.defaultProps={openOnMount:!0}},759:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(92),a=n(577),i=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},l=["mod-prompt","mod-fade-in-scale"],s=function(e){var t=e.isDirty,n=e.children,s=e.modalTitle,c=void 0===s?"Unsaved Changes":s,p=e.className,u=void 0===p?l:p,d=e.unsavedChangesDescription,m=void 0===d?"Are you sure you want to leave this page without saving? All unsaved changes will be lost.":d,f=e.confirmButtonText,h=void 0===f?"Exit without applying changes":f,v=i(o.useState(!1),2),y=v[0],g=v[1],C=i(o.useState(null),2),b=C[0],O=C[1],w=function(){g(!1)};return o.createElement(o.Fragment,null,n({promptBefore:function(e){return!t||(g(!0),O((function(){return function(){e(),w()}})),!1)}}),o.createElement(a.a,{title:c,classes:u,modalHeaderClasses:["mod-confirmation"],modalBodyClasses:["mod-header-padding","mod-form-top-bottom-padding"],modalBodyChildren:o.createElement("div",null,m),modalFooterChildren:o.createElement(o.Fragment,null,o.createElement(r.a,{small:!0,name:h,onClick:b,primary:!0}),o.createElement(r.a,{small:!0,autoFocus:!0,name:"Cancel",onClick:w})),isOpen:y,onClose:w}))}},775:function(e,t,n){(function(t){function o(e){return-1===e.indexOf("s",e.length-1)?e+"s":e}e.exports=function(){var r=arguments.length?arguments[0]:{},a=r.count||1,i=r.units||"sentences",l=r.sentenceLowerBound||5,s=r.sentenceUpperBound||15,c=r.paragraphLowerBound||3,p=r.paragraphUpperBound||7,u=r.format||"plain",d=r.words||n(776).words,m=r.random||Math.random,f=r.suffix;if(!f){var h=e.exports,v="undefined"!=typeof product&&"ReactNative"===product.navigator,y=void 0!==t&&"win32"===t.platform;f=!v&&h&&y?"\r\n":"\n"}function g(e,t){return Math.floor(m()*(t-e+1)+e)}function C(e){return e[g(0,e.length-1)]}function b(e,t,n){for(var o="",r={min:0,max:g(t,n)};r.min<r.max;)o+=" "+C(e),r.min++;return o.length&&(o=(o=o.slice(1)).charAt(0).toUpperCase()+o.slice(1)),o}function O(e,t,n,o,r){for(var a="",i={min:0,max:g(t,n)};i.min<i.max;)a+=". "+b(e,o,r),i.min++;return a.length&&(a=a.slice(2),a+="."),a}i=o(i.toLowerCase());var w,E,M={min:0,max:a},x="";for("html"===u&&(w="<p>",E="</p>");M.min<M.max;){switch(i.toLowerCase()){case"words":x+=" "+C(d);break;case"sentences":x+=". "+b(d,l,s);break;case"paragraphs":var k=O(d,c,p,l,s);"html"===u?(k=w+k+E,M.min<M.max-1&&(k+=f)):M.min<M.max-1&&(k+=f+f),x+=k}M.min++}if(x.length){var _=0;0===x.indexOf(". ")?_=2:0!==x.indexOf(".")&&0!==x.indexOf(" ")||(_=1),x=x.slice(_),"sentences"===i&&(x+=".")}return x}}).call(this,n(807))},776:function(e,t){e.exports={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]}}}]);
//# sourceMappingURL=953.bundle.js.map