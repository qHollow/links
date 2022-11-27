import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	/**
	 * className applied to the root element
	 */
	className?: string;
	/**
	 * Uniq name prop for react-hook-form
	 */
	name: string;
	/**
	 * Input label
	 */
	label?: string;
	/**
	 * Input descripription
	 */
	description?: string;
	/**
	 * ??
	 */
	error?: string;
}

export const Input: FC<Props> = ({
	className,
	name,
	label,
	description,
	error,
	placeholder,
	...props
}) => {
	return (
		<div className={clsx('w-full flex flex-col', className)}>
			{label && (
				<label className="mb-2 text-black/80 dark:text-white/80" htmlFor={name}>
					{label}
				</label>
			)}
			<input
				id={name}
				placeholder={placeholder}
				className={clsx(
					'bg-slate-300/40 dark:bg-slate-700/40 text-black dark:text-white rounded-md p-2 outline-none focus:-translate-y-1 transition-all focus:shadow-md',
					{
						['bg-red-500/80 dark:bg-red-500/80']: !!error,
					}
				)}
				{...props}
			/>
			{description && (
				<span className="text-sm text-gray-500 mt-1">{description}</span>
			)}
			{error && <span className="text-sm text-red-500">Ошибка: {error}</span>}
		</div>
	);
};
