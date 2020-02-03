(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1224:function(n,t,r){"use strict";r.r(t),t.default="// inspired from https://github.com/frankwallis/react-slidedown\r\n// implemented with the new react-transition-group https://github.com/reactjs/react-transition-group\r\n\r\nimport * as React from 'react';\r\nimport Transition from 'react-transition-group/Transition';\r\n\r\nexport interface SlideYProps {\r\n    id?: string;\r\n    duration?: number;\r\n    in?: boolean;\r\n    timeout?: number | {enter?: number; exit?: number};\r\n}\r\n\r\nexport class SlideY extends React.PureComponent<SlideYProps> {\r\n    private el: HTMLElement;\r\n\r\n    static defaultTimeout: number = 200;\r\n    static defaultDuration: number = 200;\r\n\r\n    static defaultProps: Partial<SlideYProps> = {\r\n        timeout: SlideY.defaultTimeout,\r\n        duration: SlideY.defaultDuration,\r\n    };\r\n\r\n    componentDidMount() {\r\n        if (this.props.in) {\r\n            this.el.classList.remove('slide-y-closed');\r\n            this.el.style.height = 'auto';\r\n        }\r\n    }\r\n\r\n    componentDidUpdate(prevProps: SlideYProps) {\r\n        if (prevProps.in !== this.props.in) {\r\n            this.el.style.height = this.getCurrentHeight();\r\n\r\n            if (this.props.in) {\r\n                this.onEntering();\r\n            } else {\r\n                this.onExiting();\r\n            }\r\n        }\r\n    }\r\n\r\n    render() {\r\n        const style = this.props.duration && {\r\n            style: {transitionDuration: `${this.props.duration}ms`, transitionTimingFunction: 'ease-in-out'},\r\n        };\r\n        return (\r\n            <Transition\r\n                in={this.props.in}\r\n                timeout={this.props.timeout}\r\n                onEntering={() => this.onEntering()}\r\n                onExiting={() => this.onExiting()}\r\n                onTransitionEnd={() => this.handleTransitionEnd()}\r\n            >\r\n                <div className=\"slide-y slide-y-closed\" ref={(el: HTMLElement) => (this.el = el)} {...style}>\r\n                    {this.props.children}\r\n                </div>\r\n            </Transition>\r\n        );\r\n    }\r\n\r\n    private onEntering() {\r\n        const prevHeight = this.getCurrentHeight();\r\n\r\n        this.el.classList.remove('slide-y-closed');\r\n        this.el.style.height = 'auto';\r\n\r\n        const endHeight = this.getCurrentHeight();\r\n\r\n        if (parseFloat(endHeight).toFixed(2) !== parseFloat(prevHeight).toFixed(2)) {\r\n            this.transitionHeight(prevHeight, endHeight);\r\n        }\r\n    }\r\n\r\n    private onExiting() {\r\n        this.transitionHeight(this.getCurrentHeight(), '0px');\r\n    }\r\n\r\n    private handleTransitionEnd() {\r\n        this.el.classList.remove('slide-y-transition');\r\n        this.el.style.transitionProperty = 'none';\r\n        this.el.style.height = !this.props.in ? '0px' : 'auto';\r\n\r\n        if (!this.props.in) {\r\n            this.el.classList.add('slide-y-closed');\r\n        }\r\n    }\r\n\r\n    private transitionHeight(from: string, to: string) {\r\n        this.el.classList.add('slide-y-transition');\r\n        this.el.style.height = from;\r\n        this.el.offsetHeight; // force repaint\r\n        this.el.style.transitionProperty = 'height';\r\n        this.el.style.height = to;\r\n    }\r\n\r\n    private getCurrentHeight = (): string => `${this.el.getBoundingClientRect().height}px`;\r\n}\r\n"}}]);
//# sourceMappingURL=111.bundle.js.map