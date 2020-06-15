import React, {
	FC,
	ReactNode,
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	MouseEventHandler,
	useCallback,
	useMemo
} from 'react';
import classNames from 'classnames';
import { AiOutlineLoading } from 'react-icons/ai';
import { cloneElement } from '../_utils/react-node';

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
	icon: ReactNode;
	loading: boolean;
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
		loading,
		icon,
		disabled,
		onClick,
		...nativeProps
	} = props;

	const classes = useMemo(() => {
		return classNames('ant-btn', className, {
			[`ant-btn-${type}`]: type,
			[`ant-btn-${size}`]: size,
			[`ant-btn-${shape}`]: shape,
			'ant-btn-danger': danger,
			'ant-btn-ghost': ghost,
			'ant-btn-block': block,
			'ant-btn-only-icon': icon && !children,
			'is-disabled': disabled,
			'ant-btn-loading': loading
		})
	}, [className, type, size, shape, danger, ghost, block, disabled, icon]);

	const iconNode = useMemo(() => {
		if (!icon && !loading) {
			return null;
		}

		return (
			<span className="ant-btn-icon">
				{
					loading ? <AiOutlineLoading className="ant-btn-icon-loading" /> : icon
				}
			</span>
		);
	}, [icon, loading]);

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
			if (disabled) {
				event.preventDefault();
				return;
			}

			onClick && onClick(event);
		},
		[disabled, onClick]
	);

	if (type === Types.LINK && href !== undefined) {
		return (
			<a
				className={classes}
				href={href}
				onClick={handleClick}
				{...nativeProps}
			>
				{iconNode}
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
			{iconNode}
			{children}
		</button>
	);
};

Button.defaultProps = {
	htmlType: ButtonTypes.BUTTON,
	disabled: false
};

export default Button;
