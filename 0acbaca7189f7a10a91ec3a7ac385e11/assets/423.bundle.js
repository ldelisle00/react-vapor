(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1519:function(n,r,t){"use strict";t.r(r),r.default="import {IBreadcrumbProps} from '../../breadcrumbs/Breadcrumb';\r\nimport {IBreadcrumbLinkProps} from '../../breadcrumbs/BreadcrumbLink';\r\nimport {Button} from '../../button/Button';\r\nimport {IContentProps} from '../../content/Content';\r\nimport {ILinkSvgProps} from '../../svg/LinkSvg';\r\nimport {ITabProps} from '../../tab/Tab';\r\nimport {ITitleProps} from '../../title/Title';\r\n\r\nexport const link1: IBreadcrumbLinkProps = {\r\n    name: 'Pikachu',\r\n    link: 'https://www.google.ca/?q=pikachu',\r\n};\r\n\r\nexport const link2: IBreadcrumbLinkProps = {\r\n    name: 'Squirtle',\r\n    link: 'https://www.google.ca/?q=squirtle',\r\n};\r\n\r\nexport const documentationLink: ILinkSvgProps = {\r\n    url: 'https://www.google.ca',\r\n    target: '_blank',\r\n    svg: {\r\n        svgName: 'help',\r\n        svgClass: 'fill-orange icon mod-20',\r\n    },\r\n};\r\n\r\nexport const defaultTitle: ITitleProps = {\r\n    text: 'Charmeleon title',\r\n    documentationLink,\r\n};\r\n\r\nexport const actions: IContentProps[] = [\r\n    {\r\n        content: Button,\r\n        componentProps: {name: 'Add'},\r\n        classes: ['btn-container'],\r\n    },\r\n    {\r\n        content: Button,\r\n        componentProps: {name: 'Add'},\r\n        classes: ['btn-container'],\r\n    },\r\n];\r\n\r\nexport const defaultBreadcrumb: IBreadcrumbProps = {\r\n    title: defaultTitle,\r\n    links: [link1, link2],\r\n};\r\n\r\nexport const defaultBreadcrumbLongTitle: IBreadcrumbProps = {\r\n    title: {\r\n        text:\r\n            'Pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika pika ',\r\n        prefix: 'Catch this pokemon:',\r\n        documentationLink,\r\n    },\r\n    links: [link1, link2],\r\n};\r\n\r\nexport const defaultTabs: ITabProps[] = [\r\n    {id: 'tab1', title: 'Digimon'},\r\n    {id: 'tab2', title: 'Beyblade'},\r\n    {id: 'tab3', title: 'Pokemon'},\r\n];\r\n"}}]);
//# sourceMappingURL=423.bundle.js.map