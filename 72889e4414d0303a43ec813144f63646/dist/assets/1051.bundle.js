(window.webpackJsonp=window.webpackJsonp||[]).push([[1051],{2319:function(e,t,a){"use strict";a.r(t),a.d(t,"SingleSelectExamples",(function(){return d}));var l,r=a(0),n=a(1),c=a(536),o=a(690),i=a(193),s=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),m=[{displayValue:"Test",value:"0"},{displayValue:"Test One",value:"1"},{displayValue:"Disabled",value:"disabled",disabled:!0},{displayValue:"Three",value:"3"},{displayValue:"Four",value:"4"},{displayValue:"Five",value:"5"},{displayValue:"Six",value:"6"},{displayValue:"Seven",value:"7",selectedDisplayValue:"007 Bond, James"}],u=[{id:c.a.generate(),option:{content:"All"},selected:!0},{id:c.a.generate(),option:{content:"even"}},{id:c.a.generate(),option:{content:"odd"}}],d=function(e){function t(t,a){var l=e.call(this,t,a)||this,c=n.map(m,(function(e){return n.clone(e)}));c[0].selected=!0;var o=n.map(m,(function(e){return n.extend({},e,{append:{content:function(){return r.createElement("span",{className:"text-medium-grey ml1"},e.value)}}})}));return o[0].selected=!0,l.state={first:n.clone(m),second:c,hoc:o},l}return s(t,e),t.prototype.render=function(){var e=this;return r.createElement("div",{className:"my2"},r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Simple Single Select with a Custom Placeholder"),r.createElement("br",null),r.createElement(i.a,{id:c.a.generate(),items:this.state.first,placeholder:"Select something"})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Simple Single Select with a Clear Button"),r.createElement("br",null),r.createElement(i.a,{id:c.a.generate(),items:this.state.first,canClear:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Disabled Simple Single Select"),r.createElement("br",null),r.createElement(i.a,{id:c.a.generate(),items:this.state.hoc,disabled:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Single Select with prepended text"),r.createElement("br",null),r.createElement(i.a,{id:c.a.generate(),items:this.state.hoc,disabled:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Single Select With Filter"),r.createElement("br",null),r.createElement(o.d,{id:c.a.generate(),items:this.state.hoc})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Single Select With Filter and a custom value"),r.createElement("br",null),r.createElement(o.d,{id:c.a.generate(),items:this.state.hoc,customValues:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Single Select With Filter that only match display value"),r.createElement("br",null),r.createElement(o.d,{id:c.a.generate(),items:this.state.hoc,matchFilter:function(e,t){return!!n.isString(t.displayValue)&&-1!==t.displayValue.indexOf(e)}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Single Select With Predicates"),r.createElement("br",null),r.createElement(o.e,{id:c.a.generate(),items:this.state.hoc,options:u,matchPredicate:function(t,a){return e.matchPredicate(t,a)}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Single Select With Filter and Predicates"),r.createElement("br",null),r.createElement(o.f,{id:c.a.generate(),items:this.state.hoc,options:u,matchPredicate:function(t,a){return e.matchPredicate(t,a)}})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A Single Select With Filter, Predicates and a custom value"),r.createElement("br",null),r.createElement(o.f,{id:c.a.generate(),items:this.state.hoc,options:u,matchPredicate:function(t,a){return e.matchPredicate(t,a)},customValues:!0})),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"A single select with a filter, predicates, a lots of values and a footer"),r.createElement("br",null),r.createElement(o.f,{id:c.a.generate(),items:this.state.hoc,options:u,matchPredicate:function(t,a){return e.matchPredicate(t,a)},dropClasses:"drop-this",footer:r.createElement("div",{className:"select-footer"},"The single select footer")})))},t.prototype.matchPredicate=function(e,t){var a=parseInt(t.value,10);return e===u[0].id||(e===u[1].id?a%2==0:e!==u[2].id||a%2==1)},t.description="A Single Select component allows users to choose a single option from a list or, if relevant, to create and select their own custom option.",t}(r.PureComponent)}}]);
//# sourceMappingURL=1051.bundle.js.map