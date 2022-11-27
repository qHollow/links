import clsx from 'clsx';
import NextLink from 'next/link';
import { FC } from 'react';

interface Props {
	/**
	 * className applied to the root element
	 */
	className?: string;
	/**
	 * Url
	 */
	href: string;
	/**
	 * Any childrens
	 */
	children: React.ReactNode;
}

export const Link: FC<Props> = ({ className, href, children }) => {
	return (
		<NextLink
			href={href}
			className={clsx(
				'text-xl text-slate-500 hover:text-slate-700 focus:text-slate-700 dark:text-slate-400 dark:hover:text-slate-700 hover:underline hover:underline-offset-2 hover:transition-colors',
				className
			)}
		>
			{children}
		</NextLink>
	);
};
