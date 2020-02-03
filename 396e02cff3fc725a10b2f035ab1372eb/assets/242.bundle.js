(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1351:function(n,e,o){"use strict";o.r(e),e.default="import {mount, ReactWrapper} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {ChosenSelect, IChosenSelectProps} from './ChosenSelect';\r\n\r\ndescribe('<ChosenSelect>', () => {\r\n    let chosenSelectWrapper: ReactWrapper<IChosenSelectProps, any>;\r\n\r\n    let chosenSelectProps: IChosenSelectProps;\r\n\r\n    const onChosenChangeSpy: jasmine.Spy = jasmine.createSpy('OnChosenChange');\r\n\r\n    beforeEach(() => {\r\n        chosenSelectProps = {\r\n            onChosenChange: onChosenChangeSpy,\r\n        };\r\n    });\r\n\r\n    it('should render without error', () => {\r\n        expect(() =>\r\n            mount(\r\n                <ChosenSelect {...chosenSelectProps}>\r\n                    <option value=\"1\">Option 1</option>\r\n                    <option value=\"2\">Option 2</option>\r\n                    <option value=\"3\">Option 3</option>\r\n                </ChosenSelect>\r\n            )\r\n        ).not.toThrow();\r\n    });\r\n\r\n    it('should mount and unmount/detach without error', () => {\r\n        expect(() => {\r\n            chosenSelectWrapper = mount(\r\n                <ChosenSelect {...chosenSelectProps}>\r\n                    <option value=\"1\">Option 1</option>\r\n                    <option value=\"2\">Option 2</option>\r\n                    <option value=\"3\">Option 3</option>\r\n                </ChosenSelect>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        }).not.toThrow();\r\n\r\n        expect(() => {\r\n            chosenSelectWrapper.unmount();\r\n            chosenSelectWrapper.detach();\r\n        }).not.toThrow();\r\n    });\r\n\r\n    describe('On change handler', () => {\r\n        beforeEach(() => {\r\n            chosenSelectWrapper = mount(\r\n                <ChosenSelect {...chosenSelectProps}>\r\n                    <option value=\"1\">Option 1</option>\r\n                    <option value=\"2\">Option 2</option>\r\n                    <option value=\"3\">Option 3</option>\r\n                </ChosenSelect>,\r\n                {attachTo: document.getElementById('App')}\r\n            );\r\n        });\r\n\r\n        afterEach(() => {\r\n            chosenSelectWrapper.detach();\r\n        });\r\n\r\n        it('should call the onChosenChange prop on change', () => {\r\n            const chosenSelect: ChosenSelect = chosenSelectWrapper.instance() as ChosenSelect;\r\n\r\n            // Mock the change event\r\n            chosenSelect.select.trigger('change');\r\n\r\n            expect(onChosenChangeSpy).toHaveBeenCalled();\r\n        });\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=242.bundle.js.map