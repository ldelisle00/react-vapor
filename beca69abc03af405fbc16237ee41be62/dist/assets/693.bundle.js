(window.webpackJsonp=window.webpackJsonp||[]).push([[693],{1782:function(e,n,r){"use strict";r.r(n),n.default="import * as classNames from 'classnames';\r\nimport * as React from 'react';\r\nimport {addClassNameToChildren} from '../../utils/JSXUtils';\r\n\r\nexport interface ISideNavigationItemProps {\r\n    href: string;\r\n    title: string;\r\n    target?: string;\r\n}\r\n\r\nexport interface SideNavigationItemProps extends Partial<ISideNavigationItemProps> {\r\n    isActive?: boolean;\r\n}\r\n\r\nexport const SideNavigationItem: React.FunctionComponent<SideNavigationItemProps> = ({\r\n    isActive,\r\n    href,\r\n    title,\r\n    children,\r\n    target,\r\n}) => {\r\n    const ref = React.useRef(null);\r\n\r\n    React.useEffect(() => {\r\n        if (isActive && ref.current) {\r\n            ref.current.scrollIntoView({behavior: 'instant', block: 'nearest'});\r\n        }\r\n    }, [isActive]);\r\n\r\n    const itemClasses = classNames('navigation-menu-section-item', {'state-active': isActive});\r\n\r\n    // Rendering an anchor tag from href and title support for retrocompatibility\r\n    return href && title ? (\r\n        <a className={classNames('block', itemClasses)} href={href} target={target} ref={ref}>\r\n            <span className=\"navigation-menu-section-item-link\">{title}</span>\r\n        </a>\r\n    ) : (\r\n        <div className={itemClasses} ref={ref}>\r\n            {addClassNameToChildren(children, 'navigation-menu-section-item-link')}\r\n        </div>\r\n    );\r\n};\r\n"}}]);
//# sourceMappingURL=693.bundle.js.map