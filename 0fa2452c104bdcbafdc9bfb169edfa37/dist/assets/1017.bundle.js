(window.webpackJsonp=window.webpackJsonp||[]).push([[1017],{2471:function(t,e,n){"use strict";n.r(e),n.d(e,"ToastExamples",(function(){return f}));var r=n(1),o=n(56),a=n(449),i=n(456),s=n(157),c=n(52),l=n(589),u=n(696),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},m=function(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,a=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},f=function(){return r.createElement(i.a,null,r.createElement(d,null),r.createElement(h,null))},d=function(){var t=m(r.useState({Success:!1,Warning:!1,Error:!1,Timed:!1}),2),e=t[0],n=t[1];return r.createElement(r.Fragment,null,r.createElement(i.a,{level:2,title:"Toasts with a local state"},r.createElement(a.a,{enabled:!0,className:"btn",name:"Top left",onClick:function(){return n(p(p({},e),{Success:!e.Success}))}}),r.createElement(a.a,{enabled:!0,className:"btn",name:"Middle Earth",onClick:function(){return n(p(p({},e),{Warning:!e.Warning}))}}),r.createElement(a.a,{className:"btn",name:"Top right",onClick:function(){return n(p(p({},e),{Error:!e.Error}))}}),r.createElement(a.a,{className:"btn",name:"Bottom",onClick:function(){return n(p(p({},e),{Timed:!e.Timed}))}})),r.createElement(l.a,{left:!0},e.Success&&r.createElement(s.a,{key:"toast-1",id:"toast-1",title:"Timed Sucess !!",dismiss:1e3,onClose:function(){return n(p(p({},e),{Success:!1}))}})),r.createElement(l.a,null,e.Warning&&r.createElement(s.a,{key:"toast-1",id:"toast-1",title:"Warning !!",type:"Warning",onClose:function(){return n(p(p({},e),{Warning:!1}))}})),r.createElement(l.a,{right:!0},e.Error&&r.createElement(s.a,{key:"toast-1",id:"toast-1",title:"Error !!",type:"Error",onClose:function(){return n(p(p({},e),{Error:!1}))}})),r.createElement(l.a,{bottom:!0},e.Timed&&r.createElement(s.a,{key:"toast-1",id:"toast-1",title:"An eternal Success !",dismissible:!1,onClose:function(){return n(p(p({},e),{Timed:!1}))}})))},h=Object(o.b)(null,(function(t){return{renderToast:function(e,n,r){return t(Object(c.b)(e,n,r))}}}))((function(t){var e=t.renderToast,n=function(){return r.createElement("ul",null,r.createElement("li",{style:{marginBottom:"5px"}},r.createElement("a",{href:"#"},"Some Link")),r.createElement("li",null,"Complex React Component"))};return r.createElement(r.Fragment,null,r.createElement(i.a,{level:2,title:"Toasts with a redux store"},r.createElement(a.a,{enabled:!0,className:"btn",name:"Success",onClick:function(){return e("containerId","Success !")}}),r.createElement(a.a,{enabled:!0,className:"btn",name:"Warning   ",onClick:function(){return e("containerId","Warning !",{type:"Warning"})}}),r.createElement(a.a,{className:"btn",name:"Error",onClick:function(){return e("containerId","Error !",{type:"Error"})}}),r.createElement(a.a,{className:"btn",name:"Timed Success",onClick:function(){return e("containerId","Timed Success !",{dismiss:1e3})}}),r.createElement(a.a,{className:"btn",name:"custom JSX",onClick:function(){return e("containerId","Custom JSX !",{content:n})}}),r.createElement(a.a,{className:"btn",name:"custom String",onClick:function(){return e("containerId","Timed Success!",{content:"I am a string !"})}})),r.createElement(u.a,{id:"containerId"}))}))},449:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r,o=n(9),a=n(1),i=n(0),s=n(83),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},e.prototype.getTemplate=function(t){var e,n=this,r=l(l({},i.omit(this.props,u)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(r=i.extend(r,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),e=a.createElement("a",l({className:t+" btn-container"},r),this.props.name,this.props.children)):e=a.createElement("button",l({className:t},r),this.props.name,this.props.children),i.isEmpty(this.props.tooltip)?e:a.createElement(s.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},e)},e.prototype.getClasses=function(){return o("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},e.prototype.render=function(){return this.getTemplate(this.getClasses())},e.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},e}(a.Component)},456:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(9),o=n(1),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(t){var e=t.children,n=t.title,i=t.description,s=t.className,c=t.mods,l=t.level,u=void 0===l?1:l,p={className:"text-medium-blue mb1",children:n},m="h"+(u+1);return o.createElement("fieldset",{className:r(s,c,"level-"+u+" form-group mod-padding-children")},n&&o.createElement(m,a({},p)),i&&o.createElement("p",{className:"description"},i),e)}},589:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,o=n(9),a=n(1),i=n(0),s=n(157),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender()},e.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},e.prototype.onCloseToast=function(t){this.props.onCloseToast&&this.props.onCloseToast(t)},e.prototype.render=function(){var t=this,e=o("toast-container",this.props.classes,{"mod-bottom":this.props.bottom,"mod-left":this.props.left,"mod-right":this.props.right}),n=this.props.toasts?i.map(this.props.toasts,(function(e){return a.createElement(s.a,l({key:e.id},e,{onClose:function(){var n,r;t.onCloseToast(e.id),null===(r=(n=e).onClose)||void 0===r||r.call(n)}}))})):this.props.children;return a.createElement("div",{className:e},n)},e}(a.Component)},696:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(56),o=n(0),a=n(55),i=n(52),s=n(589),c=Object(r.b)((function(t,e){return{toasts:(o.findWhere(t.toastContainers,{id:e.id})||{id:null,toasts:[]}).toasts}}),(function(t,e){return{onRender:function(){return t(Object(i.c)(e.id))},onDestroy:function(){return t(Object(i.e)(e.id))},onCloseToast:function(n){return t(Object(i.d)(e.id,n))}}}),a.c.mergeProps)(s.a)}}]);
//# sourceMappingURL=1017.bundle.js.map