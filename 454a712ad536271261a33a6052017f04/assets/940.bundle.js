(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{2025:function(r,x,n){"use strict";n.r(x),x.default="// tslint:disable\r\nexport class UUID {\r\n    // TODO: replace for https://www.npmjs.com/package/uuid\r\n    static generate() {\r\n        // Source: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript\r\n        let d = Date.now();\r\n        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {\r\n            const r = (d + Math.random() * 16) % 16 | 0;\r\n            d = Math.floor(d / 16);\r\n            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);\r\n        });\r\n    }\r\n}\r\n// tslint:enable\r\n"}}]);
//# sourceMappingURL=940.bundle.js.map