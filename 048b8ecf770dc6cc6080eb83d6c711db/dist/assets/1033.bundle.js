(window.webpackJsonp=window.webpackJsonp||[]).push([[1033],{2336:function(t,e,o){"use strict";o.r(e),o.d(e,"FlatSelectExamples",(function(){return u}));var n,r=o(1),a=o(467),i=o(143),c=o(82),p=o(519),l=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=function(){return(s=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.render=function(){var t=[{id:a.a.generate(),option:{content:"Option 1"}},{id:a.a.generate(),option:{content:"Option 2"}},{id:a.a.generate(),option:{content:"Option 3"}}],e={svgName:"domain-google",svgClass:"icon"},o={content:function(){return r.createElement(c.a,s({},e))},classes:["mr1"]},n={content:function(){return r.createElement(c.a,s({},e))},classes:["ml1"]};return r.createElement("div",{className:"mt2"},r.createElement("h1",{className:"text-blue mb1"},"Flat Select List"),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Default Flat Select"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:t})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select mod group"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:t,group:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select mod option picker"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:t,optionPicker:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option tooltip"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},tooltip:{title:"Option 1 tooltip",container:"body",placement:"bottom"}},{id:a.a.generate(),option:{content:"Option 2"},tooltip:{title:"Option 2 tooltip",container:"body",placement:"bottom"}}]})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select mod group with option tooltip"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},tooltip:{title:"Option 1 tooltip",container:"body",placement:"bottom"}},{id:a.a.generate(),option:{content:"Option 2"},tooltip:{title:"Option 2 tooltip",container:"body",placement:"bottom"}}],group:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option prepend"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},prepend:o},{id:a.a.generate(),option:{content:"Option 2"},prepend:o}]})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option append"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:"Option 1"},append:n},{id:a.a.generate(),option:{content:"Option 2"},append:n}]})))),r.createElement("div",{className:"form-group"},r.createElement("label",{className:"form-control-label"},"Flat Select with option component"),r.createElement("div",{className:"form-control"},r.createElement(p.a,s({},{id:a.a.generate(),options:[{id:a.a.generate(),option:{content:i.a}},{id:a.a.generate(),option:{content:i.a}}]})))))},e}(r.Component)},467:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n=function(){function t(){}return t.generate=function(){var t=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var o=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?o:3&o|8).toString(16)}))},t}()},519:function(t,e,o){"use strict";o.d(e,"a",(function(){return p}));var n=o(55),r=o(56),a=o(550),i=o(64),c=o(146),p=Object(n.b)((function(t,e){return{selectedOptionId:c.a.getSelectedOptionId(t,e)}}),(function(t,e){return{onRender:function(){return t(Object(i.b)(e.id,e.defaultSelectedOptionId||e.options.length&&e.options[0].id))},onDestroy:function(){return t(Object(i.c)(e.id))},onOptionClick:function(o){return t(Object(i.d)(e.id,o.id))}}}),r.c.mergeProps)(a.a)},550:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n,r=o(9),a=o(1),i=o(0),c=o(551),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),l=function(){return(l=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender()},e.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy()},e.prototype.handleOnOptionClick=function(t){this.props.onOptionClick&&this.props.onOptionClick(t),this.props.onClick&&this.props.onClick(t)},e.prototype.getOptions=function(){var t=this;return i.map(this.props.options,(function(e,o){return e.selected=t.props.selectedOptionId&&t.props.selectedOptionId===e.id,e.onClick=function(e){return t.handleOnOptionClick(e)},a.createElement(c.a,l({key:o},e,{disabled:t.props.disabled}))}))},e.prototype.render=function(){var t=r("flat-select",{"mod-btn-group":this.props.group,"mod-option-picker":this.props.optionPicker},this.props.classes,this.props.className);return a.createElement("div",{className:t},this.getOptions())},e}(a.Component)},551:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var n,r=o(9),a=o(1),i=o(75),c=o(83),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),l=function(){return(l=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.onClick=function(){this.props.onClick&&this.props.onClick(this.props)},e.prototype.render=function(){var t=this,e=r("flat-select-option",{selectable:!this.props.selected,disabled:this.props.disabled},this.props.classes);return a.createElement("a",{className:e,onClick:function(){return t.onClick()}},a.createElement(c.a,l({},this.props.tooltip),this.props.prepend?a.createElement(i.a,l({},this.props.prepend)):null,a.createElement(i.a,l({},this.props.option)),this.props.append?a.createElement(i.a,l({},this.props.append)):null))},e.defaultProps={selected:!1},e}(a.Component)}}]);
//# sourceMappingURL=1033.bundle.js.map