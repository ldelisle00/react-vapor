(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{2312:function(e,t,r){"use strict";r.r(t),r.d(t,"ServerSideSelectExamples",(function(){return g}));var n=r(0),o=r(7),i=r(1),s=r(286),l=r(73),a=r(628),u=r(800),c=r(190),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e};function d(){var e=h(n.useState([]),2),t=e[0],r=e[1],o=h(n.useState(0),2),s=o[0],l=o[1];return[t,s,function(e,n){void 0===n&&(n=!0);var o=i(e).pick(i.identity),s=i.isEmpty(o)?"":"?"+new URLSearchParams(Object.entries(o)).toString();return fetch("https://jsonplaceholder.typicode.com/photos"+s).then((function(e){return l(parseInt(e.headers.get("x-total-count"),10)),e.json()})).then((function(e){r(n?e:f(t,e))}))}]}var m=function(e){e.id;var t=e.url,r=e.title,o=e.thumbnailUrl;return n.createElement("div",{className:"flex flex-center"},n.createElement("a",{href:t,target:"__blank",className:"mr2"},n.createElement("img",{src:o,alt:r,width:50,height:50})),n.createElement("span",null,r))},v=i.compose(s.a,a.a,u.a)(c.a);var y=Object(o.b)((function(e,t){return{filterValue:l.a.getFilterText(e,t)}}))((function(e){var t=e.filterValue,r=e.id,o=h(d(),3),i=o[0],s=o[1],l=o[2],a=h(n.useState(1),2),u=a[0],c=a[1];return n.useEffect((function(){l({_page:1,_limit:10})}),[]),n.createElement("div",{className:"form-group"},n.createElement("p",{className:"form-control-label"},"SingleSelect using server-side filtering and pagination with infinite scroll"),n.createElement("div",{className:"form-control"},n.createElement(v,{id:r,items:i.map((function(e){return{value:e.id,displayValue:n.createElement(m,p({},e))}})),totalEntries:s,next:function(){l({_page:u+1,_limit:10,q:t},!1),c(u+1)},onUpdate:function(){l({_page:1,_limit:10,q:t}),c(1)},canClear:!0})))}));function g(){return n.createElement("div",{className:"mod-form-top-bottom-padding"},n.createElement("h1",{className:"mb2"},"Server-side selects"),n.createElement(y,{id:"server-side-single-select"}))}},534:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(){function e(){}return e.generate=function(){var e=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?r:3&r|8).toString(16)}))},e}()},628:function(e,t,r){"use strict";r.d(t,"a",(function(){return w}));var n,o=r(2),i=r(0),s=r(50),l=r(1),a=r(47),u=r(6),c=r(534),p=r(92),h=r(179),f=r(73),d=r(13),m=r(62),v=(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),y=function(){return(y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g=function(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},b=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)s.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return s},T=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e},x=["defaultCustomValues","matchFilter","customValues","addValueText","duplicateText","noResultFilterText","noItemsText","filterButton","filter"],w=function(e){var t=function(e,t){return Object(s.b)({filterValue:f.a.getFilterText,items:t.isServer?m.a.getServerFilteredItems:m.a.getCustomItemsWithFilter,selected:m.a.getListBoxSelected})},r=function(e,t){return{onRenderFilter:function(r){return e(Object(a.b)(t.id,r))},onDestroyFilter:function(){return e(Object(a.d)(t.id))},onSelectCustomValue:function(r){return e(Object(a.c)(t.id,r))}}};return function(n){function s(){var e=null!==n&&n.apply(this,arguments)||this;return e.dividerId=c.a.generate(),e.handleOnClick=function(){l.isEmpty(e.props.filterValue)||e.props.onSelectCustomValue(e.props.filterValue)},e}return v(s,n),s.prototype.componentWillMount=function(){this.props.onRenderFilter(this.props.defaultCustomValues)},s.prototype.componentDidUpdate=function(e){var t,r;e.filterValue!==this.props.filterValue&&(null===(r=(t=this.props).onUpdate)||void 0===r||r.call(t))},s.prototype.componentWillUnmount=function(){this.props.onDestroyFilter()},s.prototype.addItemBoxCustomValue=function(){var e=this,t={displayValue:this.props.addValueText(this.props.filterValue),value:this.props.filterValue,onOptionClick:function(){return e.props.onSelectCustomValue(e.props.filterValue)}},r=l.some(this.props.items,(function(e){return!e.hidden}))?[{value:this.dividerId,divider:!0,disabled:!0}]:[];return T([t],r)},s.prototype.noResultFilter=function(){return{value:this.props.noResultFilterText(this.props.filterValue)}},s.prototype.duplicateValue=function(){return{value:this.props.duplicateText,disabled:!0}},s.prototype.noItems=function(){return{value:this.props.noItemsText,disabled:!0}},s.prototype.getAddValueButton=function(){return this.props.customValues&&i.createElement("div",{className:"ml1"},i.createElement(p.a,y({classes:["p1"],onClick:this.handleOnClick},this.props.filterButton),i.createElement(d.a,{svgName:"add",className:"icon mod-lg mod-align-with-text"})))},s.prototype.isDuplicateValue=function(){return-1!==l.chain(this.props.items).pluck("value").concat(this.props.selected).indexOf(this.props.filterValue).value()},s.prototype.allValuesAreSelected=function(){return!l.chain(this.props.items).pluck("value").contains(this.props.selected).value()},s.prototype.render=function(){var t=this,r=o({"flex flex-center":this.props.customValues,mb2:!!this.props.children}),n=this.props.noResultItem||this.noResultFilter(),s=this.props.items.map((function(e){return y(y({},e),{highlight:t.props.filterValue})}));this.isDuplicateValue()?n=this.duplicateValue():!l.isEmpty(this.props.filterValue)&&this.props.customValues?s=T(this.addItemBoxCustomValue(),s):this.props.customValues&&l.every(s,(function(e){return e.hidden}))?n=this.noItems():s.length&&this.allValuesAreSelected()&&(n=this.noItems());var a=y(y({},l.omit(this.props,T(x,["selected"]))),{items:s});return i.createElement(e,y({},a,{noResultItem:n,noDisabled:this.props.customValues,hasFocusableChild:!0}),i.createElement(h.a,y({},this.props.filter,{id:this.props.id,onKeyDown:this.props.onKeyDown,onKeyUp:this.props.onKeyUp,className:r,isAutoFocus:!0}),this.getAddValueButton()),this.props.children)},s.displayName="withFilter("+e.displayName+")",s.defaultProps={duplicateText:"Cannot add a duplicate value",noResultFilterText:function(e){return'No results match "'+e+'"'},noItemsText:"No items, enter a new value",addValueText:function(e){return'Add "'+e+'"'},filterButton:{enabled:!0,tooltip:"Add",tooltipPlacement:"top"},defaultCustomValues:[]},s=g([Object(u.b)(t,r)],s)}(i.Component)}},670:function(e,t,r){var n;n=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var s=r(8),l=i(s),a=i(r(6)),u=i(r(2)),c=r(1),p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,r){for(var n=!0;n;){var o=e,i=t,s=r;n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,i);if(void 0!==l){if("value"in l)return l.value;var a=l.get;if(void 0===a)return;return a.call(s)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=i,r=s,n=!0,l=u=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.state={showLoader:!1,lastScrollTop:0,actionTriggered:!1,pullToRefreshThresholdBreached:!1},this.startY=0,this.currentY=0,this.dragging=!1,this.maxPullDownDistance=0,this.onScrollListener=this.onScrollListener.bind(this),this.throttledOnScrollListener=(0,u.default)(this.onScrollListener,150).bind(this),this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.getScrollableTarget=this.getScrollableTarget.bind(this)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown.firstChild.getBoundingClientRect().height,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')}},{key:"componentWillUnmount",value:function(){this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd))}},{key:"componentWillReceiveProps",value:function(e){this.props.dataLength!==e.dataLength&&this.setState({showLoader:!1,actionTriggered:!1,pullToRefreshThresholdBreached:!1})}},{key:"getScrollableTarget",value:function(){return this.props.scrollableTarget instanceof HTMLElement?this.props.scrollableTarget:"string"==typeof this.props.scrollableTarget?document.getElementById(this.props.scrollableTarget):(null===this.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)}},{key:"onStart",value:function(e){this.state.lastScrollTop||(this.dragging=!0,this.startY=e.pageY||e.touches[0].pageY,this.currentY=this.startY,this._infScroll.style.willChange="transform",this._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)")}},{key:"onMove",value:function(e){this.dragging&&(this.currentY=e.pageY||e.touches[0].pageY,this.currentY<this.startY||(this.currentY-this.startY>=this.props.pullDownToRefreshThreshold&&this.setState({pullToRefreshThresholdBreached:!0}),this.currentY-this.startY>1.5*this.maxPullDownDistance||(this._infScroll.style.overflow="visible",this._infScroll.style.transform="translate3d(0px, "+(this.currentY-this.startY)+"px, 0px)")))}},{key:"onEnd",value:function(e){var t=this;this.startY=0,this.currentY=0,this.dragging=!1,this.state.pullToRefreshThresholdBreached&&this.props.refreshFunction&&this.props.refreshFunction(),requestAnimationFrame((function(){t._infScroll.style.overflow="auto",t._infScroll.style.transform="none",t._infScroll.style.willChange="none"}))}},{key:"isElementAtBottom",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?.8:arguments[1],r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=(0,c.parseThreshold)(t);return n.unit===c.ThresholdUnits.Pixel?e.scrollTop+r>=e.scrollHeight-n.value:e.scrollTop+r>=n.value/100*e.scrollHeight}},{key:"onScrollListener",value:function(e){var t=this;"function"==typeof this.props.onScroll&&setTimeout((function(){return t.props.onScroll(e)}),0);var r=this.props.height||this._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;this.state.actionTriggered||(this.isElementAtBottom(r,this.props.scrollThreshold)&&this.props.hasMore&&(this.setState({actionTriggered:!0,showLoader:!0}),this.props.next()),this.setState({lastScrollTop:r.scrollTop}))}},{key:"render",value:function(){var e=this,t=n({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!(!this.props.children||!this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return l.default.createElement("div",{style:o},l.default.createElement("div",{className:"infinite-scroll-component",ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&l.default.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},l.default.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},!this.state.pullToRefreshThresholdBreached&&this.props.pullDownToRefreshContent,this.state.pullToRefreshThresholdBreached&&this.props.releaseToRefreshContent)),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))}}]),t}(s.Component);t.default=p,p.defaultProps={pullDownToRefreshContent:l.default.createElement("h3",null,"Pull down to refresh"),releaseToRefreshContent:l.default.createElement("h3",null,"Release to refresh"),pullDownToRefreshThreshold:100,disableBrowserPullToRefresh:!0},p.propTypes={next:a.default.func,hasMore:a.default.bool,children:a.default.node,loader:a.default.node.isRequired,scrollThreshold:a.default.oneOfType([a.default.number,a.default.string]),endMessage:a.default.node,style:a.default.object,height:a.default.number,scrollableTarget:a.default.node,hasChildren:a.default.bool,pullDownToRefresh:a.default.bool,pullDownToRefreshContent:a.default.node,releaseToRefreshContent:a.default.node,pullDownToRefreshThreshold:a.default.number,refreshFunction:a.default.func,onScroll:a.default.func,dataLength:a.default.number.isRequired},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseThreshold=function(e){return"number"==typeof e?{unit:r.Percent,value:100*e}:"string"==typeof e?e.match(/^(\d*(.\d+)?)px$/)?{unit:r.Pixel,value:parseFloat(e)}:e.match(/^(\d*(.\d+)?)%$/)?{unit:r.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),n):(console.warn("scrollThreshold should be string or number"),n)};var r={Pixel:"Pixel",Percent:"Percent"};t.ThresholdUnits=r;var n={unit:r.Percent,value:.8}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n,o;return t||(t=250),function(){var i=r||this,s=+new Date,l=arguments;n&&s<n+t?(clearTimeout(o),o=setTimeout((function(){n=s,e.apply(i,l)}),t)):(n=s,e.apply(i,l))}},e.exports=t.default},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o,i,s,l){if(!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,o,i,s,l],c=0;(a=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw a.framesToPop=1,a}}},function(e,t,r){"use strict";var n=r(3),o=r(4),i=r(7);e.exports=function(){function e(e,t,r,n,s,l){l!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){e.exports=r(5)()},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,r){t.exports=e}])},e.exports=n(r(0))},800:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),o=r(670),i=r(1),s=r(77),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e){var t=function(t){var r=i.size(t.items),a=t.totalEntries-r>0;return n.createElement(e,l({},t,{wrapItems:function(e){return n.createElement(o,{dataLength:r,hasMore:a,loader:n.createElement(s.a,{className:"p2 full-content-x"}),next:t.next,scrollableTarget:t.id,scrollThreshold:1,style:{overflow:"initial"}},e)}}))};return t.displayName="withInfiniteScroll("+e.displayName+")",t.defaultProps={totalEntries:0},t}}}]);
//# sourceMappingURL=976.bundle.js.map