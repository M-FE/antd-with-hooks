import React, { FC, FunctionComponentElement, Children, useMemo } from "react";
import { IMenuItemProps } from "./MenuItem";
import { cloneElement } from "../_utils/react-node";

export interface IMenuProps {}

const Menu: FC<IMenuProps> = (props) => {
    const { children } = props;

    const renderChildren = useMemo(() => {
        Children.map(children, (c) => {
            const element = c as FunctionComponentElement<IMenuItemProps>;

            if (element.type.displayName === "MenuItem") {
                return cloneElement(element, {});
            }
        });
    }, [children]);

    React.Children.map(children, (i) => {
        console.log(i as FunctionComponentElement<IMenuItemProps>);
    });

    return <ul>{renderChildren}</ul>;
};

Menu.displayName = "Menu";

export default Menu;
