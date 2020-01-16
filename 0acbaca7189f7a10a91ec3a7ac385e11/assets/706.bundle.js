(window.webpackJsonp=window.webpackJsonp||[]).push([[706],{1795:function(r,s,e){"use strict";e.r(s),s.default="import * as classNames from 'classnames';\r\nimport RCSlider, {createSliderWithTooltip, SliderProps, WithTooltipProps} from 'rc-slider';\r\nimport 'rc-slider/assets/index.css';\r\nimport * as React from 'react';\r\n\r\nexport interface ISliderProps {\r\n    slider?: WithTooltipProps & SliderProps;\r\n    classes?: string[];\r\n    hasTooltip?: boolean;\r\n}\r\n\r\nconst Slider: React.SFC<ISliderProps> = ({hasTooltip, slider, classes}) => {\r\n    const HtmlTag = hasTooltip ? createSliderWithTooltip(RCSlider) : RCSlider;\r\n    if (hasTooltip) {\r\n        (slider as any).tipProps = {\r\n            overlayClassName: 'vapor-slider-overlay',\r\n            ...slider.tipProps,\r\n        };\r\n    }\r\n\r\n    return <HtmlTag className={classNames('vapor-slider input-wrapper input-field', classes)} {...slider} />;\r\n};\r\n\r\nSlider.defaultProps = {\r\n    slider: {},\r\n    hasTooltip: false,\r\n};\r\n\r\nexport {Slider};\r\n"}}]);
//# sourceMappingURL=706.bundle.js.map