(window.webpackJsonp=window.webpackJsonp||[]).push([[985],{1163:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return l}));var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},a=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(o(arguments[e]));return t},i={_id:"5aa97c3a188912df4047d157",index:0,guid:"a77733c5-01ea-4d3d-9f22-9ec4d06c2da6",isActive:!1,balance:"$3,307.29",picture:"http://placehold.it/32x32",age:33,eyeColor:"green",name:{first:"Natasha",last:"Jenkins"},company:"ZANYMAX",email:"natasha.jenkins@zanymax.net",phone:"+1 (917) 404-3066",address:"555 Linden Boulevard, Stonybrook, Wisconsin, 2342",about:"Nulla sunt excepteur veniam elit laboris pariatur. Occaecat aliquip magna aliqua sunt tempor sunt id.",registered:"Sunday, January 31, 2016 2:37 AM",latitude:"-11.761137",longitude:"-23.176443",tags:["voluptate","et","sunt","sunt","cupidatat"],range:[0,1,2],friends:[{id:0,name:"Mccray Kerr"},{id:1,name:"Cristina Osborn"}],greeting:"Hello, Natasha! You have 8 unread messages.",favoriteFruit:"apple"},s=n(n({},i),{range:[5,6],friends:a(i.friends,[{id:4,name:"Someone New"}]),otherThing:"This is a new property"});delete s.isActive;var c=s,l=function(t){return JSON.stringify(t,void 0,2)}},2293:function(t,e,r){"use strict";r.r(e),r.d(e,"JSONEditorExamples",(function(){return c}));var n,o=r(0),a=r(1163),i=r(779),s=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return o.createElement("div",{className:"mt2"},o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"JSON Editor using codemirror"),o.createElement(i.a,{value:Object(a.a)(a.b)})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"JSON Editor using codemirror in readonly mode"),o.createElement(i.a,{value:Object(a.a)(a.b),readOnly:!0})),o.createElement("div",{className:"form-group"},o.createElement("label",{className:"form-control-label"},"JSON Editor using codemirror with an action on change"),o.createElement(i.a,{value:Object(a.a)(a.b),onChange:function(t){return alert(t)}})))},e}(o.Component)},569:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n={LineNumbers:"CodeMirror-linenumbers",FoldGutter:"CodeMirror-foldgutter",LintMarkers:"CodeMirror-lint-markers"},o={JSON:"application/json",XML:"xml",Python:"python"}},623:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r(815),r(1132),r(1133),r(1134),r(1135),r(1136),r(1137),r(1138),r(1139);var n,o=r(553),a=r(0),i=r(1140),s=r(1),c=r(569),l=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.codemirror=a.createRef(),n.state={value:e.value},n}return l(e,t),e.prototype.componentDidMount=function(){var t,e;null===(e=(t=this.props).onMount)||void 0===e||e.call(t,this.codemirror.current)},e.prototype.componentDidUpdate=function(t){t.value!==this.props.value&&this.editor&&(this.setState({value:this.props.value}),this.editor.getDoc().clearHistory())},e.prototype.render=function(){var t=this;return a.createElement(i.Controlled,{ref:this.codemirror,editorDidMount:function(e){t.editor=e,t.addExtraKeywords()},onBeforeChange:function(e,r,n){t.setState({value:n})},value:this.state.value,onChange:function(e,r,n){return t.handleChange(n)},options:s.extend({},e.Options,{readOnly:this.removeCursorWhenEditorIsReadOnly(),mode:this.props.mode}),className:this.props.className})},e.prototype.removeCursorWhenEditorIsReadOnly=function(){return this.props.readOnly?"nocursor":this.props.readOnly},e.prototype.handleChange=function(t){var e,r;null===(r=(e=this.props).onChange)||void 0===r||r.call(e,t)},e.prototype.addExtraKeywords=function(){if(this.props.extraKeywords){var t=this.props.mode.name||this.props.mode;o.helpers.hintWords[t]=o.helpers.hintWords[t].concat(this.props.extraKeywords)}},e.defaultProps={className:"mod-border"},e.Options={lineNumbers:!0,foldGutter:!0,lint:!0,gutters:[c.a.LineNumbers,c.a.FoldGutter,c.a.LintMarkers],extraKeys:{"Ctrl-Space":"autocomplete","Alt-F":"findPersistent"}},e}(a.Component)},779:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r(972);var n,o=r(2),a=r(0),i=r(13),s=r(623),c=r(569),l=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.state={isInError:!1},n}return l(e,t),e.prototype.render=function(){var t=this,e=o("form-group",{"input-validation-error":this.state.isInError});return a.createElement("div",{className:e},a.createElement(s.a,{value:this.props.value,onChange:function(e){return t.handleChange(e)},mode:c.b.JSON,readOnly:this.props.readOnly}),this.getValidationDetails())},e.prototype.getValidationDetails=function(){return this.state.isInError?a.createElement("div",{className:"input-validation-error-details"},a.createElement(i.a,{className:"input-validation-error-icon",svgName:"message-alert",svgClass:"icon fill-white"}),a.createElement("span",{className:"input-validation-error-message"},this.props.errorMessage)):null},e.prototype.handleChange=function(t){var e=!1;try{JSON.parse(t)}catch(t){e=!0}this.setState({isInError:e}),this.callOnChange(t,e)},e.prototype.callOnChange=function(t,e){var r,n;null===(n=(r=this.props).onChange)||void 0===n||n.call(r,t,e)},e.defaultProps={errorMessage:"The JSON configuration is syntactically invalid."},e}(a.Component)}}]);
//# sourceMappingURL=985.bundle.js.map