import React, {
	FC,
	ReactNode,
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	MouseEventHandler,
	useCallback
} from 'react';
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
	BUTTON = 'button'
}

export enum Shapes {
	CIRCLE = 'circle',
	ROUND = 'round'
}

type IBaseButtonProps = {
	type: Types;
	size: Sizes;
	ghost: boolean;
	danger: boolean;
	block: boolean;
	href: string;
	className: string;
	disabled: boolean;
	shape: Shapes;
	onClick: MouseEventHandler<HTMLElement>;
	children: ReactNode;
};

type OmitNativeProps = 'type' | 'className' | 'onClick' | 'disabled';

type IButtonProps = Partial<
	{
		htmlType: ButtonTypes;
	} & IBaseButtonProps
> &
	Omit<ButtonHTMLAttributes<any>, OmitNativeProps>;

type IAncharProps = Partial<IBaseButtonProps> &
	Omit<AnchorHTMLAttributes<any>, 'href'>;

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
		shape,
		htmlType,
		disabled,
		onClick,
		...nativeProps
	} = props;

	const prefix = prefixCls('btn');
	const classes = classNames(prefix, className, {
		[`${prefix}-${type}`]: type,
		[`${prefix}-${size}`]: size,
		[`${prefix}-${shape}`]: shape,
		[`${prefix}-danger`]: danger,
		[`${prefix}-ghost`]: ghost,
		[`${prefix}-block`]: block,
		'is-disabled': disabled
	});

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
			if (disabled) {
				event.preventDefault();
			}

			onClick && onClick(event);
		},
		[]
	);

	if (type === Types.LINK && href !== undefined) {
		return (
			<a
				className={classes}
				href={href}
				onClick={handleClick}
				{...nativeProps}
			>
				{children}
			</a>
		);
	}

	return (
		<button
			className={classes}
			disabled={disabled}
			type={htmlType}
			onClick={handleClick}
			{...nativeProps}
		>
			{children}
		</button>
	);
};

export default Button;
