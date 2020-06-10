import React, { FC, ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { prefixCls } from '../_utils/prefix';

export enum Types {
	DEFAULT = 'default',
	PRIMARY = 'primary',
	DASHED = 'dashed',
	DANGER = 'danger',
	LINK = 'link',
	TEXT = 'text'
}

export enum Sizes {
	LARGE = 'large',
	MIDDLE = 'middle',
	SMALL = 'small'
}

export enum ButtonTypes {
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button',
}

type IBaseButtonProps = {
	type: Types;
	size: Sizes;
	ghost: boolean;
	danger: boolean;
	block: boolean;
	href: string;
	className: string;
	children: ReactNode;
};

type IButtonProps = Partial<{
    htmlType: ButtonTypes;
} & IBaseButtonProps> & Omit<ButtonHTMLAttributes<any>, 'type' | 'className'>;

type IAncharProps = Partial<IBaseButtonProps> & Omit<AnchorHTMLAttributes<any>, 'href'>;

type IProps = IButtonProps & IAncharProps;

const Button: FC<IProps> = props => {
	const {
		type,
		size,
		ghost,
		danger,
		block,
		href,
		children,
		className,
        ...nativeProps
    } = props;
    
    const prefix = prefixCls('btn');
    const classes = classNames(prefix, className, {
        [`${prefix}-${type}`]: type,
        [`${prefix}-${size}`]: size,
        [`${prefix}-danger`]: danger,
        [`${prefix}-ghost`]: ghost,
        [`${prefix}-block`]: block,
    });

    if (type === Types.LINK && href !== undefined) {
        return <a className={classes} href={href} {...nativeProps}>{children}</a>
    }

	return <button className={classes} {...nativeProps}>{children}</button>;
};

export default Button;
