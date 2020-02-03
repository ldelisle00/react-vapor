(window.webpackJsonp=window.webpackJsonp||[]).push([[875],{1974:function(r,e,o){"use strict";o.r(e),e.default="import {mount, ReactWrapper, shallow} from 'enzyme';\r\n// tslint:disable-next-line:no-unused-variable\r\nimport * as React from 'react';\r\nimport * as _ from 'underscore';\r\nimport {\r\n    DESCRIPTION_LABEL,\r\n    ERROR_CODE_LABEL,\r\n    IErrorSection,\r\n    ITableErrorProps,\r\n    TableError,\r\n    TROUBLESHOOTING_LABEL,\r\n} from '../TableError';\r\n\r\ndescribe('Tables', () => {\r\n    const error: IErrorSection = {\r\n        errorDescription: 'error',\r\n        errorPrecision: 'the row is in error',\r\n        errorTroubleshoot: 'you should do something',\r\n        errorStatus: 'urgent',\r\n        errorCode: 'error_1',\r\n    };\r\n\r\n    describe('<TableError />', () => {\r\n        it('should render without errors', () => {\r\n            expect(() => {\r\n                shallow(<TableError error={error} />);\r\n            }).not.toThrow();\r\n        });\r\n    });\r\n\r\n    describe('<TableError />', () => {\r\n        let tableError: ReactWrapper<ITableErrorProps, any>;\r\n\r\n        beforeEach(() => {\r\n            tableError = mount(<TableError error={error} />, {attachTo: document.getElementById('App')});\r\n        });\r\n\r\n        afterEach(() => {\r\n            tableError.detach();\r\n        });\r\n\r\n        it('should get the error as a prop', () => {\r\n            const errorProp = tableError.props().error;\r\n\r\n            expect(errorProp).toBeDefined();\r\n            expect(errorProp).toBe(error);\r\n        });\r\n\r\n        it('should render an error-description-precision div if there is an error precision in the error', () => {\r\n            const errorNoPrecision = _.extend({}, error, {errorPrecision: undefined});\r\n\r\n            expect(tableError.find('.error-description-precision').length).toBe(1);\r\n\r\n            tableError.setProps({error: errorNoPrecision});\r\n\r\n            expect(tableError.find('.error-description-precision').length).toBe(0);\r\n        });\r\n\r\n        it('should display the error precision if there is an error precision in the error', () => {\r\n            const errorNoPrecision = _.extend({}, error, {errorPrecision: undefined});\r\n\r\n            expect(tableError.html()).toContain(error.errorPrecision);\r\n\r\n            tableError.setProps({error: errorNoPrecision});\r\n\r\n            expect(tableError.html()).not.toContain(error.errorPrecision);\r\n        });\r\n\r\n        it('should display the error status', () => {\r\n            expect(tableError.html()).toContain(error.errorStatus);\r\n        });\r\n\r\n        it('should display the error description', () => {\r\n            expect(tableError.html()).toContain(error.errorDescription);\r\n        });\r\n\r\n        it('should display the error troubleshoot if there is an erro troubleshoot in the error', () => {\r\n            const errorNoTroubleshoot = _.extend({}, error, {errorTroubleshoot: undefined});\r\n\r\n            expect(tableError.html()).toContain(error.errorTroubleshoot);\r\n\r\n            tableError.setProps({error: errorNoTroubleshoot});\r\n\r\n            expect(tableError.html()).not.toContain(error.errorTroubleshoot);\r\n        });\r\n\r\n        it('should display the error code', () => {\r\n            expect(tableError.html()).toContain(error.errorCode);\r\n        });\r\n\r\n        it('should display the description label passed as a prop or the default one', () => {\r\n            const expectedLabel = 'expected label';\r\n\r\n            expect(tableError.html()).toContain(DESCRIPTION_LABEL);\r\n            expect(tableError.html()).not.toContain(expectedLabel);\r\n\r\n            tableError.setProps({error: error, descriptionLabel: expectedLabel});\r\n            expect(tableError.html()).toContain(expectedLabel);\r\n            expect(tableError.html()).not.toContain(DESCRIPTION_LABEL);\r\n        });\r\n\r\n        it('should display the troubleshooting label passed as a prop or the default one', () => {\r\n            const expectedLabel = 'expected label';\r\n\r\n            expect(tableError.html()).toContain(TROUBLESHOOTING_LABEL);\r\n            expect(tableError.html()).not.toContain(expectedLabel);\r\n\r\n            tableError.setProps({error: error, troubleshootingLabel: expectedLabel});\r\n            expect(tableError.html()).toContain(expectedLabel);\r\n            expect(tableError.html()).not.toContain(TROUBLESHOOTING_LABEL);\r\n        });\r\n\r\n        it('should display the error code label passed as a prop or the default one', () => {\r\n            const expectedLabel = 'expected label';\r\n\r\n            expect(tableError.html()).toContain(ERROR_CODE_LABEL);\r\n            expect(tableError.html()).not.toContain(expectedLabel);\r\n\r\n            tableError.setProps({error: error, errorCodeLabel: expectedLabel});\r\n            expect(tableError.html()).toContain(expectedLabel);\r\n            expect(tableError.html()).not.toContain(ERROR_CODE_LABEL);\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=875.bundle.js.map