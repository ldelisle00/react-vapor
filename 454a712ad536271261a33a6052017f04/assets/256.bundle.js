(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1353:function(e,n,r){"use strict";r.r(n),n.default="import * as loremIpsum from 'lorem-ipsum';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\n\r\nimport {CollapsibleOwnProps} from '../Collapsible';\r\nimport {ICollapsibleContainerOwnProps} from '../CollapsibleContainer';\r\n\r\nexport const collapsibleContainerPossibleProps: ICollapsibleContainerOwnProps[] = [\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        collapsibleHeaderClassName: 'header',\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        informationUrl: 'http://coveo.github.io/vapor/',\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        informationTooltip: {title: 'whatever', placement: 'top'},\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        informationUrl: 'http://coveo.github.io/vapor/',\r\n        informationTooltip: {title: 'whatever', placement: 'top'},\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        informationUrl: 'http://coveo.github.io/vapor/',\r\n        informationTooltip: {title: 'whatever', placement: 'top'},\r\n        expandedOnMount: true,\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        informationUrl: 'http://coveo.github.io/vapor/',\r\n        informationTooltip: {title: 'whatever', placement: 'top'},\r\n        expandedOnMount: true,\r\n        className: 'some classes mr1',\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        informationUrl: 'http://coveo.github.io/vapor/',\r\n        informationTooltip: {title: 'whatever', placement: 'top'},\r\n        expandedOnMount: true,\r\n        className: ['some', 'classes', 'mr1'],\r\n        collapsibleHeaderClassName: ['some', 'classes', 'mr1'],\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        title: loremIpsum(),\r\n        informationUrl: 'http://coveo.github.io/vapor/',\r\n        informationTooltip: {title: 'whatever', placement: 'top'},\r\n        expandedOnMount: true,\r\n        className: ['some', 'classes', 'mr1'],\r\n        collapsibleHeaderClassName: ['some', 'classes', 'mr1'],\r\n        collapsibleBodyClassName: ['some', ['class', 'mr1'], {hello: false, hi: true}],\r\n    },\r\n];\r\n\r\nexport const collapsiblePossibleProps: CollapsibleOwnProps[] = [\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        headerClasses: 'header',\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        headerContent: <div>Some header content</div>,\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        headerContent: <div>Some header content</div>,\r\n        headerClasses: 'text-medium-blue',\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        headerContent: <div>Some header content</div>,\r\n        headerClasses: 'text-medium-blue',\r\n        expandedOnMount: true,\r\n        toggleIconClassName: 'fill-medium-blue',\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        headerContent: <div>Some header content</div>,\r\n        headerClasses: 'text-medium-blue',\r\n        expandedOnMount: true,\r\n        toggleIconClassName: 'fill-medium-blue',\r\n        withBorders: true,\r\n    },\r\n    {\r\n        id: `collapsible-${_.uniqueId()}`,\r\n        headerContent: <div>Some header content</div>,\r\n        headerClasses: 'text-medium-blue',\r\n        expandedOnMount: true,\r\n        toggleIconClassName: 'fill-medium-blue',\r\n        withBorders: true,\r\n        className: 'bg-white',\r\n    },\r\n];\r\n"}}]);
//# sourceMappingURL=256.bundle.js.map