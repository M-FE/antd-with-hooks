import React, { FC } from "react";

export interface IMenuItemProps {}

const MenuItem: FC<IMenuItemProps> = (props) => {
    const { children } = props;

    return <li>{children}</li>;
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
