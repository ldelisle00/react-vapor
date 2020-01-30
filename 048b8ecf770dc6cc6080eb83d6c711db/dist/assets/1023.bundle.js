(window.webpackJsonp=window.webpackJsonp||[]).push([[1023],{2487:function(e,t,n){"use strict";n.r(t),n.d(t,"FeedBackExamples",(function(){return i}));var a=n(1),s=n(449),r=n(456),o=n(695),c=n(789),i=function(){return a.createElement(r.a,{title:"FeedBack Examples"},a.createElement(l,null),a.createElement(p,null))},l=function(){return a.createElement(r.a,{level:2,title:"UserFeedBacks",description:"UserFeedBacks will render with these state but won't render while in 'VALID' state."},a.createElement(r.a,{level:3},a.createElement(s.a,{name:"Warning Feedback",enabled:!0,className:"btn"}),a.createElement(c.a,{extraClasses:["mt1"],state:"WARNING",displayOnShow:"block",feedbackText:"UserFeedback on state WARNING"})),a.createElement(r.a,{level:3},a.createElement(s.a,{name:"Error FeedBack",enabled:!0,className:"btn"}),a.createElement(c.a,{extraClasses:["mt1"],state:"ERROR",displayOnShow:"block",feedbackText:"UserFeedback on state ERROR"})),a.createElement(r.a,{level:3},a.createElement(s.a,{name:"Side FeedBack",enabled:!0,className:"btn"}),a.createElement(c.a,{extraClasses:["ml1"],state:"WARNING",displayOnShow:"inline-block",feedbackText:"UserFeedback placed beside its related element"})),a.createElement(r.a,{level:3},a.createElement(s.a,{name:"styled FeedBack",enabled:!0,className:"btn"}),a.createElement(c.a,{extraClasses:["ml2","bold","italic"],state:"WARNING",displayOnShow:"inline-block",feedbackText:"extra classes for styling can be passed to the extraClasses prop"})))},p=function(){return a.createElement(r.a,{level:2,title:"SyncFeedBacks",description:"SyncFeedBack will render with these states but won't render while in 'NONE' state."},a.createElement(r.a,{level:3,title:"An invisible feedback",className:"mb3"},a.createElement(o.a,{state:o.b.NONE})),a.createElement(r.a,{level:3,title:"SyncFeedBacks with their default messages"},a.createElement(o.a,{state:o.b.SYNCING}),a.createElement(o.a,{state:o.b.SUCCESS}),a.createElement(o.a,{state:o.b.ERROR})),a.createElement(r.a,{level:3,title:"SyncFeedBack with custom messages"},a.createElement(o.a,{state:o.b.SYNCING,feedback:"This message is a SyncFeedback component on state SYNCING"}),a.createElement(o.a,{state:o.b.SUCCESS,feedback:"This message is a SyncFeedback component on state SUCCESS"}),a.createElement(o.a,{state:o.b.ERROR,feedback:"This message is a SyncFeedback component on state ERROR"})))}},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,s=n(9),r=n(1),o=n(0),c=n(83),i=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},p=["small","classes","enabled","name","link","target","primary","tooltip","tooltipPlacement","hideDisabled","onClick"],d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.onClick=function(){this.props.onClick&&this.props.enabled&&this.props.onClick()},t.prototype.getTemplate=function(e){var t,n=this,a=l(l({},o.omit(this.props,p)),{disabled:!this.props.enabled,onClick:function(){return n.onClick()}});return this.props.link?(a=o.extend(a,{target:this.props.target,rel:"noopener noreferrer",href:this.props.link}),t=r.createElement("a",l({className:e+" btn-container"},a),this.props.name,this.props.children)):t=r.createElement("button",l({className:e},a),this.props.name,this.props.children),o.isEmpty(this.props.tooltip)?t:r.createElement(c.a,{title:this.props.tooltip,placement:this.props.tooltipPlacement,className:"btn-container"},t)},t.prototype.getClasses=function(){return s("btn",{"mod-primary":this.props.primary,"mod-small":this.props.small,"state-disabled disabled":!this.props.enabled,"text-medium-grey":!this.props.primary&&!this.props.enabled},this.props.classes)},t.prototype.render=function(){return this.getTemplate(this.getClasses())},t.defaultProps={enabled:!0,name:"",tooltip:"",primary:!1,small:!1,tooltipPlacement:"right",target:""},t}(r.Component)},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(9),s=n(1),r=function(){return(r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},o=function(e){var t=e.children,n=e.title,o=e.description,c=e.className,i=e.mods,l=e.level,p=void 0===l?1:l,d={className:"text-medium-blue mb1",children:n},m="h"+(p+1);return s.createElement("fieldset",{className:a(c,i,"level-"+p+" form-group mod-padding-children")},n&&s.createElement(m,r({},d)),o&&s.createElement("p",{className:"description"},o),t)}},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={BLOCK:"block",INLINE:"inline",INLINE_BLOCK:"inline-block",HIDDEN:"hidden",TABLE:"table",TABLE_CELL:"table-cell"}},695:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a,s=n(1),r=n(82),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c={SYNCING:"SYNCING",SUCCESS:"SUCCESS",ERROR:"ERROR",NONE:"NONE"},i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=["sync-feedback"];return this.props.state===c.ERROR?e.push("mod-error"):this.props.state===c.SUCCESS&&e.push("mod-success"),s.createElement("div",{className:e.join(" ")},this.renderIcon(),this.renderContent())},t.prototype.renderIcon=function(){return this.props.state===c.SYNCING?s.createElement("span",{className:"status-dot syncing sync-feedback-icon"}):this.props.state===c.SUCCESS?s.createElement(r.a,{svgName:"check",className:"sync-feedback-icon",svgClass:"icon"}):this.props.state===c.ERROR?s.createElement(r.a,{svgName:"clear",className:"sync-feedback-icon",svgClass:"icon"}):null},t.prototype.renderContent=function(){return this.props.state===c.SYNCING?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Saving changes..."):this.props.state===c.SUCCESS?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Changes saved"):this.props.state===c.ERROR?s.createElement("span",{className:"sync-feedback-text"},this.props.feedback||"Changes could not be saved."):null},t}(s.Component)},789:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a,s=n(1),r=n(496),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c={VALID:"VALID",WARNING:"WARNING",ERROR:"ERROR"},i="text-dark-grey",l="text-red",p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.render=function(){var e=this.getUserFeedbackStyle();return s.createElement("div",{className:e.classes},this.props.feedbackText)},t.prototype.getUserFeedbackStyle=function(){var e=this.props.state in c?this.props.state:c.VALID,t=this.props.displayOnShow||r.a.BLOCK,n=e===c.VALID?r.a.HIDDEN:t,a=e===c.ERROR?l:i;return{classes:(this.props.extraClasses||[]).concat(a,n).join(" ")}},t}(s.Component)}}]);
//# sourceMappingURL=1023.bundle.js.map