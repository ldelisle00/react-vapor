(window.webpackJsonp=window.webpackJsonp||[]).push([[1010],{2336:function(e,t,n){"use strict";n.r(t),n.d(t,"FacetConnectedExamples",(function(){return u}));var o=n(1),r=n(56),c=n(558),a=n(18),s=n(762),i={name:"facetTitle1",formattedName:"The first facet"},l={name:"facetTitle2",formattedName:"The second facet"},p=[{name:"row1",formattedName:"Row 1"},{name:"row2",formattedName:"The second row"},{name:"row3",formattedName:"Third row with a count property",count:"23412"},{name:"row4",formattedName:"Row 4, count of 0",count:"0"}],u=Object(r.b)(null,(function(e){return{onRender:function(){e(Object(a.c)(i.name,{name:"row2",formattedName:"Irrelevent"})),e(Object(a.c)(l.name,{name:"row1",formattedName:"it does not matter"})),e(Object(a.c)(l.name,{name:"row2",formattedName:"why is this mandatory ?",exclude:!0}))}}}))((function(e){var t=e.onRender;return o.useEffect((function(){t()}),[t]),o.createElement(c.a,{level:2,title:"Facets connected to store"},o.createElement("div",{style:{width:400}},o.createElement("label",{className:"form-control-label"},"Facet with the second row selectd"),o.createElement(s.a,{facet:i,facetRows:p,clearFacet:function(){},toggleFacet:function(){}})),o.createElement("div",{style:{width:400}},o.createElement("label",{className:"form-control-label"},"Facet with exclusions, the first row selected and the second row already excluded"),o.createElement(s.a,{facet:l,facetRows:p,clearFacet:function(){},enableExclusions:!0,toggleFacet:function(){}})))}))},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(9),r=n(1),c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},a=function(e){var t=e.children,n=e.title,a=e.description,s=e.className,i=e.mods,l=e.level,p=void 0===l?1:l,u={className:"text-medium-blue mb1",children:n},f="h"+(p+1);return r.createElement("fieldset",{className:o(s,i,"level-"+p+" form-group mod-padding-children")},n&&r.createElement(f,c({},u)),a&&r.createElement("p",{className:"description"},a),t)}},467:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o,r=n(9),c=n(1),a=n(82),s=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(t){var n=e.call(this,t)||this;return n.handleChange=function(e){n.filterInput.value=e,n.filterInput.nextElementSibling.setAttribute("class",n.filterInput.value.length?"":"hidden"),n.props.onFilterCallback&&n.props.onFilterCallback(n.props.id,n.filterInput.value),n.props.onFilter&&n.props.onFilter(n.props.id,n.filterInput.value)},n.clearValue=function(){n.filterInput.focus(),n.handleChange("")},n}return s(t,e),t.prototype.handleOnBlur=function(){this.props.onBlur&&this.props.onBlur()},t.prototype.handleOnKeyDown=function(e){this.props.onKeyDown&&this.props.onKeyDown(e)},t.prototype.handleOnKeyUp=function(e){this.props.onKeyUp&&this.props.onKeyUp(e)},t.prototype.placeCursorAtEndOfInputValue=function(e){var t=e.target,n=t.value;t.value="",t.value=n},t.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender(this.props.id)},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy(this.props.id)},t.prototype.componentWillReceiveProps=function(e){this.props.filterText!==e.filterText&&this.filterInput.value!==e.filterText&&this.handleChange(e.filterText)},t.prototype.render=function(){var e=this,t={maxWidth:this.props.maxWidth+"px"},n=this.props.filterPlaceholder||"Filter",o=r("filter-container",this.props.containerClasses),s=r("filter-box",{truncate:this.props.truncate}),i=r({hidden:!(this.filterInput&&this.filterInput.value)});return c.createElement("div",{className:this.props.className},c.createElement("div",{id:this.props.id,className:o,style:t,title:this.filterInput&&this.props.withTitleOnInput?this.filterInput.value:void 0},c.createElement("input",{ref:function(t){return e.filterInput=t},type:"text",className:s,placeholder:n,onChange:function(t){return e.handleChange(t.currentTarget.value)},onBlur:function(){return e.handleOnBlur()},onFocus:function(t){e.placeCursorAtEndOfInputValue(t)},onKeyDown:function(t){return e.handleOnKeyDown(t)},onKeyUp:function(t){return e.handleOnKeyUp(t)},style:t,autoFocus:this.props.isAutoFocus}),c.createElement(a.a,{svgName:"clear",className:i,svgClass:"icon mod-lg fill-medium-grey",onClick:function(){return e.clearValue()}}),c.createElement(a.a,{svgName:"filter",className:"filter-icon",svgClass:"icon fill-medium-grey mod-lg"})),this.props.children)},t.defaultProps={isAutoFocus:!1},t}(c.Component)},472:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(56),r=n(0),c=n(55),a=n(467),s=n(35),i=n(107),l=r.debounce((function(e,t,n){return e(Object(s.c)(t,n))}),400),p=Object(o.b)((function(e,t){return{filterText:i.a.getFilterText(e,{id:t.id})}}),(function(e){return{onRender:function(t){return e(Object(s.b)(t))},onDestroy:function(t){return e(Object(s.d)(t))},onFilter:function(t,n){return l(e,t,n)}}}),c.c.mergeProps)(a.a)},558:function(e,t,n){"use strict";var o=n(456);n.d(t,"a",(function(){return o.a}))},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,r=n(1),c=n(12),a=n(0),s=n(16),i=n(467),l=n(472),p=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleDocumentClick=function(e){t.props.isOpened&&(c.findDOMNode(t.facetSearch).contains(e.target)||t.props.onDocumentClick())},t}return p(t,e),t.prototype.componentWillMount=function(){this.props.onDocumentClick&&document.addEventListener("click",this.handleDocumentClick)},t.prototype.componentWillReceiveProps=function(e){this.props.onOpen&&!this.props.isOpened&&e.isOpened&&this.props.onOpen()},t.prototype.componentWillUnmount=function(){this.props.onDocumentClick&&document.removeEventListener("click",this.handleDocumentClick)},t.prototype.componentDidUpdate=function(){this.props.isOpened&&this.facetSearch.getElementsByTagName("input")[0].focus()},t.prototype.render=function(){var e=this,t="facet-more-search"+(this.props.isOpened?"":" hidden"),n=this.props.filterText&&this.props.filterText.length?a.map(this.props.facetRows,(function(t){var n=t.props.facetRow.formattedName;if(s.contains(n.toLowerCase(),e.props.filterText.toLowerCase()))return t})).filter(Boolean):this.props.facetRows,o="facet-search-results"+(n.length?"":" hidden"),c="filter-"+this.props.facet,p=this.props.withReduxState?r.createElement(l.a,{id:c,filterPlaceholder:this.props.filterPlaceholder}):r.createElement(i.a,{id:c,filterPlaceholder:this.props.filterPlaceholder});return r.createElement("div",{className:t},r.createElement("div",{className:"facet-search",ref:function(t){return e.facetSearch=t}},p),r.createElement("ul",{className:o},n))},t}(r.Component)},569:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o,r=n(1),c=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleOnChange=function(){t.props.onToggleMore&&t.props.onToggleMore(t.props.facet)},t}return c(t,e),t.prototype.render=function(){var e=this,t="facet-value facet-selectable facet-more"+(!!this.props.isOpened&&this.props.isOpened?" hidden":""),n=this.props.moreLabel||"More";return r.createElement("li",{className:t,onClick:function(e){return e.nativeEvent.stopImmediatePropagation()}},r.createElement("label",{className:"coveo-checkbox-label facet-value-label"},r.createElement("input",{type:"checkbox",className:"coveo-checkbox facet-checkbox-input",onChange:function(){return e.handleOnChange()}}),r.createElement("span",{className:"facet-more-button"}),r.createElement("span",{className:"label"},n)))},t}(r.Component)},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o,r=n(1),c=n(0),a=n(82),s=n(83),i=n(568),l=n(662),p=n(569),u=n(663),f=n(664),h=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildFacet=function(e){t.props.toggleFacet(t.props.facet.name,e),t.props.onToggleFacet&&t.props.onToggleFacet(t.props.facet.name,e)},t.clearFacet=function(){t.props.clearFacet(t.props.facet.name),t.props.onClearFacet&&t.props.onClearFacet(t.props.facet.name)},t}return h(t,e),t.prototype.sortFacetRows=function(e){return c.sortBy(e,(function(e){return e.formattedName.toLowerCase()}))},t.prototype.componentWillMount=function(){this.props.onRender&&this.props.onRender(this.props.facet.name)},t.prototype.componentWillUnmount=function(){this.props.onDestroy&&this.props.onDestroy(this.props.facet.name)},t.prototype.render=function(){var e=this;if(!this.props.facetRows.length&&!this.props.selectedFacetRows.length)return null;var t="facet-header-eraser"+(this.props.selectedFacetRows.length?"":" hidden"),n=this.sortFacetRows(this.props.selectedFacetRows),o=this.sortFacetRows(this.props.facetRows),i=c.union(n,o),l=c.uniq(i,!1,(function(e){return e.name})),h=c.map(l,(function(t){var o=c.contains(c.pluck(n,"name"),t.name);return r.createElement(f.a,{key:t.name,facet:e.props.facet.name,facetRow:t,onToggleFacet:e.buildFacet,isChecked:o,enableExclusions:e.props.enableExclusions,maxTooltipLabelLength:e.props.maxTooltipLabelLength,excludeTooltipMessage:e.props.excludeTooltipMessage})})),m=Math.max(this.props.selectedFacetRows.length,this.props.maxRowsToShow);h.length===m+1&&(m+=1);var d=h.length>m?this.props.withReduxState?r.createElement(u.a,{facet:this.props.facet.name,moreLabel:this.props.moreLabel}):r.createElement(p.a,{facet:this.props.facet.name,moreLabel:this.props.moreLabel}):null,g=this.props.facet.name+" facet"+(this.props.isOpened?" facet-opened":"");return r.createElement("div",{className:g},r.createElement("div",{className:"facet-header"},r.createElement("div",{className:t,onClick:function(){return e.clearFacet()}},r.createElement(s.a,{className:"remove-selected-tooltip",title:this.props.clearFacetLabel+" "+this.props.facet.formattedName},r.createElement(a.a,{svgName:"clear",className:"icon fill-medium-grey"}))),r.createElement("div",{className:"facet-header-title bold text-medium-blue"},this.props.facet.formattedName)),r.createElement("ul",{className:"facet-values"},h.slice(0,m),d),this.getMoreRows(!!d,h.slice(m)))},t.prototype.getMoreRows=function(e,t){if(e)return this.props.withReduxState?r.createElement(l.a,{facet:this.props.facet.name,facetRows:t,filterPlaceholder:this.props.filterPlaceholder}):r.createElement(i.a,{facet:this.props.facet.name,facetRows:t,filterPlaceholder:this.props.filterPlaceholder})},t.defaultProps={clearFacetLabel:"Clear",selectedFacetRows:[],maxRowsToShow:5},t}(r.Component)},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n(56),r=n(0),c=n(55),a=n(35),s=n(18),i=n(568),l=Object(o.b)((function(e,t){var n=r.findWhere(e.facets,{facet:t.facet}),o=r.findWhere(e.filters,{id:"filter-"+t.facet});return{isOpened:n&&n.opened,filterText:o?o.filterText:"",withReduxState:!0}}),(function(e,t){return{onOpen:function(){return e(Object(a.c)("filter-"+t.facet,""))},onDocumentClick:function(){return e(Object(s.d)())}}}),c.c.mergeProps)(i.a)},663:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(56),r=n(0),c=n(55),a=n(18),s=n(569),i=Object(o.b)((function(e,t){var n=r.findWhere(e.facets,{facet:t.facet});return{isOpened:n&&n.opened}}),(function(e){return{onToggleMore:function(t){return e(Object(a.g)(t))}}}),c.c.mergeProps)(s.a)},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o,r=n(9),c=n(1),a=n(0),s=n(82),i=n(83),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return(p=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"isExclude",{get:function(){return!!this.props.enableExclusions&&!!this.props.facetRow.exclude},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=r("facet-value","facet-selectable",{"facet-exclude":this.props.enableExclusions});return c.createElement("li",{className:t},this.getExcludeCheckbox(),c.createElement("label",{className:"coveo-checkbox-label facet-value-label",onClick:function(t){t.preventDefault(),e.toggleFacet()}},c.createElement("input",{type:"checkbox",name:this.props.facetRow.name,className:"coveo-checkbox facet-checkbox-input",checked:this.props.isChecked&&!this.isExclude,onClick:this.stopEvent,onChange:a.noop}),c.createElement("button",{type:"button",className:this.props.isChecked&&this.isExclude?"exclude-box":""},c.createElement(s.a,{svgName:"clear",className:"icon hide exclude-icon",svgClass:"fill-red"})),this.getLabel(),this.getCount()))},t.prototype.getLabel=function(){var e=this.props.facetRow.count?this.props.maxTooltipLabelLength-this.props.facetRow.count.length:this.props.maxTooltipLabelLength,t=r({"text-exclude":this.props.isChecked&&this.isExclude}),n=c.createElement("span",{className:t},this.props.facetRow.formattedName);return this.props.facetRow.formattedName.length>e?c.createElement(i.a,{title:this.props.facetRow.tooltipLabel||this.props.facetRow.formattedName,placement:"top",className:"label"},n):c.createElement("span",{className:"label"},n)},t.prototype.getCount=function(){if(!a.isUndefined(this.props.facetRow.count))return c.createElement("span",{className:r("facet-value-count",{"text-exclude":this.props.isChecked&&this.isExclude})},this.props.facetRow.count)},t.prototype.getExcludeCheckbox=function(){var e=this;if(this.props.enableExclusions)return c.createElement("div",{className:"flex center-align facet-exclude-button",onClick:function(){return e.toggleFacetToExclude()}},c.createElement("input",{type:"checkbox",className:"coveo-checkbox",checked:this.props.isChecked&&this.isExclude,onClick:this.stopEvent,onChange:a.noop}),this.getExcludeButton())},t.prototype.getExcludeButton=function(){return this.props.excludeTooltipMessage?c.createElement(i.a,{className:"exclude-button",title:this.props.excludeTooltipMessage(this.props.facetRow.formattedName)},c.createElement(s.a,{svgName:"exclude",className:"icon",svgClass:"fill-medium-grey"})):c.createElement(s.a,{svgName:"exclude",className:"exclude-button icon",svgClass:"fill-medium-grey"})},t.prototype.stopEvent=function(e){e.preventDefault(),e.stopPropagation()},t.prototype.toggleFacetToExclude=function(){this.props.onToggleFacet(p(p({},this.props.facetRow),{exclude:!this.isExclude}))},t.prototype.toggleFacet=function(){this.props.onToggleFacet(p(p({},this.props.facetRow),{exclude:!1}))},t.defaultProps={maxTooltipLabelLength:25},t}(c.Component)},762:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(56),r=n(0),c=n(55),a=n(661),s=n(18),i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){return r.compact(r.map(e,(function(e){var n=r.findWhere(t,{name:e.name});return n&&i(i({},n),e)})))},p=Object(o.b)((function(e,t){var n=r.findWhere(e.facets,{facet:t.facet.name}),o=n?l(t.facetRows,n.selected):[];return{isOpened:n&&n.opened,selectedFacetRows:o,withReduxState:!0}}),(function(e){return{onRender:function(t){return e(Object(s.b)(t))},onDestroy:function(t){return e(Object(s.f)(t))},onToggleFacet:function(t,n){return e(Object(s.c)(t,n))},onClearFacet:function(t){return e(Object(s.e)(t))}}}),c.c.mergeProps)(a.a)}}]);
//# sourceMappingURL=1010.bundle.js.map