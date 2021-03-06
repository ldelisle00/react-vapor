import classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import {map, omit} from 'underscore';

export interface ISubNavigationOwnProps {
    id?: string;
    items: ISubNavigationItem[];
    defaultSelected?: string;
}

export interface ISubNavigationStateProps {
    selected?: string;
}

export interface ISubNavigationDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClickItem?: (id: string) => void;
}

export interface ISubNavigationItem {
    id: string;
    label: React.ReactNode;
    disabled?: boolean;
    link?: string;
}

export interface ISubNavigationProps
    extends ISubNavigationOwnProps,
        ISubNavigationStateProps,
        ISubNavigationDispatchProps {}

const ISubNavigationPropsToOmit = keys<ISubNavigationProps>();

export const SubNavigation: React.FunctionComponent<ISubNavigationProps & React.HTMLAttributes<HTMLElement>> = ({
    onDestroy,
    onRender,
    selected,
    defaultSelected,
    onClickItem,
    items,
    className,
    ...props
}) => {
    React.useEffect(() => {
        onRender?.();
        return () => onDestroy?.();
    }, []);
    const navProps = omit(props, ISubNavigationPropsToOmit);

    const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        onClickItem?.(id);
        return true;
    };
    const selectedItem = selected || defaultSelected;

    const navItems = map(items, ({id, link, label, disabled}: ISubNavigationItem) => (
        <li
            key={id}
            className={classNames('sub-navigation-item', {
                'mod-selected': id === selectedItem,
            })}
        >
            <a
                href={link}
                className={classNames('sub-navigation-item-link', {disabled})}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleItemClick(e, id)}
            >
                {label}
            </a>
        </li>
    ));

    return (
        <nav {...navProps} className={classNames('sub-navigation', className)}>
            <ul className="sub-navigation-items">{navItems}</ul>
        </nav>
    );
};
