(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{1299:function(r,n,e){"use strict";e.r(n),n.default="import * as moment from 'moment';\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport * as s from 'underscore.string';\r\n\r\nimport {Button} from '../../button/Button';\r\nimport {VaporColors} from '../../color/Color';\r\nimport {BarSeries} from '../BarSeries';\r\nimport {ChartContainer} from '../ChartContainer';\r\nimport {ChartTooltip} from '../ChartTooltip';\r\nimport {InfoLine} from '../InfoLine';\r\nimport {LineSeries} from '../LineSeries';\r\nimport {ScatterSeries} from '../ScatterSeries';\r\nimport {XGrid} from '../XGrid';\r\nimport {XYAxis} from '../XYAxis';\r\nimport {XYChart, XYPoint} from '../XYChart';\r\nimport {YGrid} from '../YGrid';\r\n\r\nconst data = [\r\n    {\r\n        label: 'First',\r\n        data: [\r\n            {x: -1, y: 3},\r\n            {x: 0, y: 3},\r\n            {x: 1, y: 3},\r\n            {x: 2, y: 6},\r\n            {x: 3, y: 2},\r\n            {x: 4, y: 12},\r\n            {x: 5, y: 8},\r\n        ],\r\n    },\r\n    {\r\n        label: 'Second',\r\n        data: [\r\n            {x: -1, y: 1},\r\n            {x: 0, y: 5},\r\n            {x: 1, y: 4},\r\n            {x: 2, y: 0},\r\n            {x: 3, y: 6},\r\n            {x: 4, y: 7},\r\n            {x: 5, y: 4},\r\n        ],\r\n    },\r\n    {\r\n        label: 'Third',\r\n        data: [\r\n            {x: -1, y: 4},\r\n            {x: 0, y: 7},\r\n            {x: 1, y: 1},\r\n            {x: 2, y: 1},\r\n            {x: 3, y: 1},\r\n            {x: 4, y: 2},\r\n            {x: 5, y: 7},\r\n        ],\r\n    },\r\n];\r\n\r\nconst dateData = [\r\n    {\r\n        label: 'First',\r\n        data: _.range(25).map((i: number) => ({\r\n            x: moment()\r\n                .startOf('day')\r\n                .subtract(i, 'day')\r\n                .unix(),\r\n            y: i + 1,\r\n        })),\r\n    },\r\n];\r\n\r\nconst overPattern = [VaporColors['orange-1'], VaporColors['orange-2'], VaporColors['orange-3']];\r\nconst ChartType = {\r\n    Scatter: 'scatter',\r\n    Line: 'line',\r\n    Bar: 'bar',\r\n};\r\n\r\nexport const ChartExamples: React.FunctionComponent = () => {\r\n    const [chartType, setChartType] = React.useState(ChartType.Scatter);\r\n    return (\r\n        <div className=\"mt2\">\r\n            <div className=\"form-group\">\r\n                <label className=\"form-control-label\">Basic {s.capitalize(chartType)} Chart</label>\r\n                <div className=\"form-control\" style={{height: '300px'}}>\r\n                    <ChartContainer\r\n                        renderChart={(width, height) => (\r\n                            <XYChart\r\n                                series={[data[0]]}\r\n                                height={height}\r\n                                width={width}\r\n                                padding={\r\n                                    chartType === ChartType.Bar ? {left: width / 12, right: width / 12} : undefined\r\n                                }\r\n                            >\r\n                                {chartType === ChartType.Scatter && <ScatterSeries />}\r\n                                {chartType === ChartType.Line && <LineSeries />}\r\n                                {chartType === ChartType.Bar && <BarSeries />}\r\n                            </XYChart>\r\n                        )}\r\n                    />\r\n                </div>\r\n                {_.map(ChartType, (type) => (\r\n                    <Button\r\n                        key={type}\r\n                        enabled={chartType !== type}\r\n                        onClick={() => setChartType(type)}\r\n                        name={`${type} Series`}\r\n                    />\r\n                ))}\r\n            </div>\r\n\r\n            <div className=\"form-group\">\r\n                <label className=\"form-control-label\">Chart with tooltip</label>\r\n                <div className=\"form-control\" style={{height: '300px'}}>\r\n                    <ChartContainer\r\n                        renderChart={(width, height) => (\r\n                            <XYChart series={data} height={height} width={width}>\r\n                                <ScatterSeries />\r\n                                <ChartTooltip />\r\n                            </XYChart>\r\n                        )}\r\n                    />\r\n                </div>\r\n            </div>\r\n\r\n            <div className=\"form-group\">\r\n                <label className=\"form-control-label\">Chart with y-axis and Info Lines</label>\r\n                <div className=\"form-control\" style={{height: '300px'}}>\r\n                    <ChartContainer\r\n                        renderChart={(width, height) => (\r\n                            <XYChart series={data} height={height} width={width}>\r\n                                <XYAxis x={{innerPadding: 30}} y={{innerPadding: 30}}>\r\n                                    <XGrid padding={30} />\r\n                                    <YGrid padding={30} />\r\n                                    <LineSeries />\r\n                                    <InfoLine value={3} label=\"Three\" padding={30} />\r\n                                    <InfoLine value={2} label=\"Two\" padding={30} isVertical />\r\n                                </XYAxis>\r\n                            </XYChart>\r\n                        )}\r\n                    />\r\n                </div>\r\n            </div>\r\n\r\n            <div className=\"form-group\">\r\n                <label className=\"form-control-label\">Combined Chart</label>\r\n                <div className=\"form-control\" style={{height: '500px'}}>\r\n                    <ChartContainer\r\n                        renderChart={(width, height) => (\r\n                            <XYChart\r\n                                series={data}\r\n                                height={height}\r\n                                width={width}\r\n                                color={(serie: number, colorPattern: string[], point?: XYPoint) =>\r\n                                    point && point.y > 7 ? overPattern[serie] : colorPattern[serie]\r\n                                }\r\n                                xFormat={(value: number) =>\r\n                                    ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'][value + 1]\r\n                                }\r\n                                yFormat={(value: number) => value * 10 + '%'}\r\n                            >\r\n                                <XYAxis x={{innerPadding: width / 12}} y={{show: false}}>\r\n                                    <BarSeries />\r\n                                    <LineSeries />\r\n                                    <ScatterSeries />\r\n                                    <ChartTooltip sort />\r\n                                </XYAxis>\r\n                            </XYChart>\r\n                        )}\r\n                    />\r\n                </div>\r\n            </div>\r\n\r\n            <div className=\"form-group\">\r\n                <label className=\"form-control-label\">Date Chart</label>\r\n                <div className=\"form-control\" style={{height: '300px'}}>\r\n                    <ChartContainer\r\n                        renderChart={(width, height) => (\r\n                            <XYChart\r\n                                series={dateData}\r\n                                height={height}\r\n                                width={width}\r\n                                xFormat={(value: number) => moment.unix(value).format('YYYY-MM-DD')}\r\n                            >\r\n                                <XYAxis x={{tickTextSize: 120}} y={{show: false}}>\r\n                                    <BarSeries />\r\n                                    <ChartTooltip sort />\r\n                                </XYAxis>\r\n                            </XYChart>\r\n                        )}\r\n                    />\r\n                </div>\r\n            </div>\r\n            <div className=\"form-group\">\r\n                <label className=\"form-control-label\">Date Chart</label>\r\n                <div className=\"form-control\" style={{height: '300px'}}>\r\n                    <ChartContainer\r\n                        renderChart={(width, height) => (\r\n                            <XYChart\r\n                                series={[\r\n                                    {\r\n                                        label: 'First',\r\n                                        data: [\r\n                                            {\r\n                                                x: moment()\r\n                                                    .startOf('day')\r\n                                                    .unix(),\r\n                                                y: 500,\r\n                                            },\r\n                                        ],\r\n                                    },\r\n                                ]}\r\n                                height={height}\r\n                                width={width}\r\n                                xFormat={(value: number) => moment.unix(value).format('YYYY-MM-DD')}\r\n                            >\r\n                                <XYAxis x={{tickTextSize: 120}} y={{show: false}}>\r\n                                    <BarSeries />\r\n                                    <ChartTooltip sort />\r\n                                </XYAxis>\r\n                            </XYChart>\r\n                        )}\r\n                    />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=200.bundle.js.map