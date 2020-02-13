(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{1825:function(n,e,i){"use strict";i.r(e),e.default="export const valuesPositionOnRange = {\n    lower: 'LOWER_THAN_CROSSING_POINT',\n    higher: 'HIGHER_THAN_CROSSING_POINT',\n    both: 'NO_VALUE_AT_CROSSING_POINT',\n};\n\nexport const getValuesPositionOnRange = (value: number[], crossingPoint: number): string => {\n    if (value.every((singleValue) => singleValue < crossingPoint)) {\n        return valuesPositionOnRange.lower;\n    } else if (value.every((singleValue) => singleValue > crossingPoint)) {\n        return valuesPositionOnRange.higher;\n    } else if (value.every((singleValue) => singleValue !== crossingPoint)) {\n        return valuesPositionOnRange.both;\n    }\n    return null;\n};\n\nexport const getCrossingPoint = (min: number, max: number): number => Math.round(((0 - min) / (max - min)) * 100);\n\nexport const convertInitialValuetoRangeValue = (min: number, max: number, initialValue: number): number =>\n    Math.round(((initialValue - min) / (max - min)) * 100);\n\nexport const handleIsAtCrossingPoint = (\n    lowRange: number,\n    highRange: number,\n    handleIndex: number,\n    crossingPoint: number\n) =>\n    (handleIndex === 1 && lowRange < crossingPoint && highRange === crossingPoint) ||\n    (handleIndex === 0 && highRange > crossingPoint && lowRange === crossingPoint);\n\nexport const getComputedRangeValue = (\n    lowRange: number,\n    highRange: number,\n    min: number,\n    max: number,\n    crossingPoint: number\n): number => {\n    if (lowRange < crossingPoint) {\n        return Math.round(((crossingPoint - lowRange) * min) / crossingPoint);\n    } else if (highRange > crossingPoint) {\n        return Math.round(((highRange - crossingPoint) * max) / (100 - crossingPoint));\n    }\n    return 0;\n};\n\nexport const propsValidator = (min: number, max: number, initialValue: number) => {\n    if (min > 0) {\n        throw new Error(\n            `${min} is not a valid minimum MiddleSlider range value. Minimum MiddleSlider range value should be under 0`\n        );\n    } else if (max < 0) {\n        throw new Error(\n            `${max} is not a valid maximum MiddleSlider range value. Maximum MiddleSlider range value should be over 0`\n        );\n    }\n    if (initialValue < min || initialValue > max) {\n        throw new Error(\n            `MiddleSlider initial value is not within defined range. initialValue:${initialValue} should be set between ${min} and ${max}`\n        );\n    }\n};\n"}}]);
//# sourceMappingURL=726.bundle.js.map