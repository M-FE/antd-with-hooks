import React, { FC, useMemo } from "react";
import classnames from 'classnames';

export interface IMenuItemProps {
    disabled?: boolean;
    key?: string;
    title?: string;
}

const MenuItem: FC<IMenuItemProps> = (props) => {
    const { disabled, key, title, children } = props;

    const classes = useMemo(() => classnames('ant-menu-item', {
        [`is-disabled`]: disabled
    }), [disabled]);

    return <li className={classes}>{children}</li>;
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
