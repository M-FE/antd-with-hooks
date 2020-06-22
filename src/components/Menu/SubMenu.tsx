import React, { FC, ReactNode, useMemo, cloneElement } from 'react';
import classnames from 'classnames';
import { useRenderChildrenByName } from '../_utils/hooks';

interface ISubMenuProps {
    title?: string | ReactNode;
    disabled?: boolean;
    key?: string;
    onTitleClick?: () => void;
}

const SubMenu:FC<ISubMenuProps> = (props) => {
    const {
        title,
        disabled,
        key,
        onTitleClick,
        children
    } = props;

    const classes = useMemo(() => classnames('ant-submenu', {
        'is-disabled': disabled
    }), [disabled]);

    const renderChildren = useRenderChildrenByName(children, ["MenuItem", 'MenuItemGroup'], (element) => {
        return cloneElement(element, {});
    });

    return (
        <li className={classes}>
            <div className="ant-menu-submenu-title">{ title }</div>
            <ul>{ renderChildren }</ul>
        </li>
    );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
