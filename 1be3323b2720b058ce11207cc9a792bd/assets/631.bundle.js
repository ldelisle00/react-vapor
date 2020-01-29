(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{1736:function(t,n,r){"use strict";r.r(n),n.default="import {shallow} from 'enzyme';\r\nimport * as React from 'react';\r\n\r\nimport {PartialStringMatch} from './PartialStringMatch';\r\n\r\ndescribe('PartialStringMatch', () => {\r\n    const testString = 'test-string';\r\n\r\n    it('should not throw when there is no children', () => {\r\n        expect(() => shallow(<PartialStringMatch partialMatch=\"a\" />)).not.toThrow();\r\n    });\r\n\r\n    it('should render an empty string if the wholeString is a falsy value', () => {\r\n        [undefined, ''].forEach((falsyVal) => {\r\n            expect(shallow(<PartialStringMatch wholeString={falsyVal} />).html()).toBe(null);\r\n        });\r\n    });\r\n\r\n    it('should render the wholeString unchanged if partialMatch is undefined', () => {\r\n        expect(shallow(<PartialStringMatch wholeString={testString} />).text()).toBe(testString);\r\n    });\r\n\r\n    it('should render the wholeString unchanged if partialMatch is not in the wholeString', () => {\r\n        expect(\r\n            shallow(<PartialStringMatch wholeString={testString} partialMatch=\"i am not in whole string\" />).find(\r\n                'Highlight'\r\n            ).length\r\n        ).toBe(0);\r\n    });\r\n\r\n    it('should render the wholeString unchanged if partialMatch is in the wholeString but with different casing (if case sensitive)', () => {\r\n        expect(\r\n            shallow(<PartialStringMatch wholeString={testString} partialMatch={testString.toUpperCase()} />).find(\r\n                'Highlight'\r\n            ).length\r\n        ).toBe(0);\r\n    });\r\n\r\n    it('should highlight the partialString match in bold if contained in the wholeString', () => {\r\n        const partialMatch = testString.substr(3, 5);\r\n        const component = shallow(<PartialStringMatch wholeString={testString} partialMatch={partialMatch} />);\r\n\r\n        expect(component.find('Highlight').length).toBe(1);\r\n    });\r\n\r\n    it('should escape partialString match if dangerous', () => {\r\n        const partialMatch = '<script>alert(\"I could be dangerous\")<\/script>';\r\n        const wholeString = 'whole string <script>alert(\"I could be dangerous\")<\/script> with scripting';\r\n        const component = shallow(<PartialStringMatch wholeString={wholeString} partialMatch={partialMatch} />);\r\n\r\n        expect(component.find('Highlight').length).toBe(1);\r\n        expect(component.find('script').length).toBe(0); // it will still be a string\r\n    });\r\n\r\n    it('should highlight the partialString in bold regardless of casing, when caseInsensitive is passed as prop', () => {\r\n        const partialMatch = testString.substr(3, 5);\r\n        const component = shallow(\r\n            <PartialStringMatch wholeString={testString} partialMatch={partialMatch.toUpperCase()} caseInsensitive />\r\n        );\r\n\r\n        expect(component.find('Highlight').length).toBe(1);\r\n    });\r\n\r\n    it('should highlight all matches in a string', () => {\r\n        const partialMatch = 'match';\r\n        const multipleMatchString = 'match I have three match match';\r\n        const component = shallow(<PartialStringMatch wholeString={multipleMatchString} partialMatch={partialMatch} />);\r\n\r\n        expect(component.find('Highlight').length).toBe(3);\r\n    });\r\n\r\n    it('should highlight all matches in a string when there is multiple children', () => {\r\n        const partialMatch = 'match';\r\n        const component = shallow(\r\n            <PartialStringMatch partialMatch={partialMatch}>\r\n                Wow, is this really working? Because the <span className=\"some-wrapper\">match</span> can already be in\r\n                spans\r\n                <br />\r\n                <div>Or they can be in a div, like this match</div>\r\n            </PartialStringMatch>\r\n        );\r\n        expect(component.find('Highlight').length).toBe(2);\r\n    });\r\n\r\n    it('should highlight matches by rendering them in bold', () => {\r\n        const matcher = 'bacon';\r\n        const component = shallow(\r\n            <PartialStringMatch partialMatch={matcher}>bacon is my favorite vegetable</PartialStringMatch>\r\n        );\r\n        expect(\r\n            component\r\n                .find('Highlight')\r\n                .dive()\r\n                .hasClass('bold')\r\n        ).toBe(true);\r\n    });\r\n\r\n    it('should highlight all matches rendered throught a function component', () => {\r\n        const Porkchop: React.FunctionComponent = () => <span>porkchop is a chop of the pork</span>;\r\n        const matcher = 'chop';\r\n        const component = shallow(\r\n            <PartialStringMatch partialMatch={matcher}>\r\n                <Porkchop />\r\n            </PartialStringMatch>\r\n        );\r\n\r\n        expect(component.find('Highlight').length).toBe(2);\r\n    });\r\n});\r\n"}}]);
//# sourceMappingURL=631.bundle.js.map