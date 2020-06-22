import React, { FC, FunctionComponentElement, Children, useMemo } from "react";
import { IMenuItemProps } from "./MenuItem";
import { cloneElement } from "../_utils/react-node";
import classnames from "classnames";
import { useRenderChildrenByName } from "../_utils/hooks";

export interface IMenuProps {
    mode?: 'vertical' | 'horizontal' | 'inline';
    theme?: 'light' | 'dark';
}

const Menu: FC<IMenuProps> = (props) => {
    const { 
        children,
        mode,
        theme
    } = props;

    /**
     * 过滤不是MenuItem的元素，并修改部分子组件的属性
     */
    const renderChildren = useRenderChildrenByName(children, ["MenuItem", 'MenuItemGroup', 'SubMenu'], (element) => {
        return cloneElement(element, {});
    });

    const classes = useMemo(() => classnames('ant-menu', {
        [`ant-menu-${mode}`]: mode,
        [`ant-menu-${theme}`]: theme,
    }), [mode, theme]);

    return <ul className={classes}>{renderChildren}</ul>;
};

Menu.displayName = "Menu";
Menu.defaultProps = {
    mode: 'horizontal',
    theme: 'light'
};

export default Menu;
