import clsx from 'clsx';
import { FC } from 'react';
import { Loader } from '../Loader';

export enum ButtonVariants {
	primary = 'primary',
	secondary = 'secondary',
}

export enum ButtonSizes {
	small = 'small',
	medium = 'medium',
	large = 'large',
	auto = 'auto',
}

interface Props {
	/**
	 * classNames applied to the root element
	 */
	className?: string;
	/**
	 *
	 */
	icon?: React.ReactElement;
	/**
	 *
	 */
	variant: ButtonVariants;
	/**
	 *
	 */
	// size: ButtonSizes;
	/**
	 *
	 */
	isLoading?: boolean;
	/**
	 * Button label
	 */
	label: string;
	/**
	 *	Is button disabled
	 */
	disabled?: boolean;
	/**
	 * Called when button pressed
	 */
	onPress?: () => void;
}

export const Button: FC<Props> = ({
	className,
	icon,
	variant,
	isLoading,
	label,
	disabled = false,
	onPress,
}) => {
	return (
		<button
			className={clsx(
				'flex gap-2 p-2 rounded-lg items-center disabled:bg-slate-400 transition-transform active:scale-95',
				{
					['bg-blue-500 hover:bg-blue-700 text-white']:
						variant === ButtonVariants.primary,
					['border-solid border-2 border-blue-500 hover:border-blue-700 text-blue-500 hover:text-blue-700']:
						variant === ButtonVariants.secondary,
				},
				className
			)}
			disabled={disabled}
			onClick={onPress}
		>
			{isLoading && <Loader />}
			{!isLoading && icon && <span className="block">{icon}</span>}
			{!isLoading && label}
		</button>
	);
};
