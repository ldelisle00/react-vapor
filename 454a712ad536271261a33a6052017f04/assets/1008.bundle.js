(window.webpackJsonp=window.webpackJsonp||[]).push([[1008],{2296:function(t,e,n){"use strict";n.r(e),n.d(e,"LastUpdatedConnectedExamples",(function(){return s}));var o,r=n(0),c=n(6),i=n(80),a=n(681),u=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},f=function(){return{}},d=function(t){return{onRefresh:function(){t(Object(i.c)("LastUpdatedConnectedExampleComponent"))}}},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.componentDidMount=function(){var t=this;setInterval((function(){t.props.onRefresh()}),1e4)},e.prototype.render=function(){return r.createElement("div",{className:"form-group",style:{width:400}},r.createElement("div",null,r.createElement("label",{className:"form-control-label"},"Last update updating with Redux (every 10 seconds here with the changeLastUpdated action with the id)"),r.createElement(a.a,{id:"LastUpdatedConnectedExampleComponent"})))},e=p([Object(c.b)(f,d)],e)}(r.Component)},681:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n(7),r=n(1),c=n(6),i=n(193),a=n(80),u=Object(o.b)((function(t,e){var n=r.findWhere(t.lastUpdatedComposite,{id:e.id});return{time:n?n.time:new Date}}),(function(t,e){return{onRender:function(){return t(Object(a.b)(e.id))},onDestroy:function(){return t(Object(a.d)(e.id))}}}),c.c.mergeProps)(i.a)}}]);
//# sourceMappingURL=1008.bundle.js.map