(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1311:function(n,r,t){"use strict";t.r(r),r.default="import * as React from 'react';\r\n\r\nimport {XYChartContext} from './XYChart';\r\n\r\nexport interface XGridProps {\r\n    padding?: number;\r\n    color?: string;\r\n}\r\n\r\nexport const XGrid: React.FunctionComponent<XGridProps> = ({padding = 0, color = 'rgba(0,0,0,0.2)'}) => {\r\n    const context = React.useContext(XYChartContext);\r\n    const {yDomain, xScale, yScale} = context;\r\n\r\n    const lines = xScale\r\n        .range()\r\n        .map((tick: number) => (\r\n            <line\r\n                key={`x-grid-${tick}`}\r\n                stroke={color}\r\n                x1={xScale(tick)}\r\n                x2={xScale(tick)}\r\n                y1={yScale(yDomain[0]) + padding}\r\n                y2={yScale(yDomain[1]) - padding}\r\n            />\r\n        ));\r\n\r\n    return <>{lines}</>;\r\n};\r\nXGrid.displayName = 'XGrid';\r\n"}}]);
//# sourceMappingURL=200.bundle.js.map