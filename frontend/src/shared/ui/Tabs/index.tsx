import * as RadixTabs from '@radix-ui/react-tabs';
import clsx from 'clsx';
import { FC } from 'react';

export interface TabConfig {
	/**
	 * className applied to the root tab element
	 */
	className?: string;
	/**
	 * Uniq key for tab
	 */
	key: string;
	/**
	 * Title to display on tab
	 */
	title: React.ReactElement | string;
	/**
	 * Content displayed on current tab
	 */
	content: React.ReactElement;
}

interface Props {
	/**
	 * className applied to the root element
	 */
	className?: string;
	/**
	 *
	 */
	defaultValue?: string;
	/**
	 * Function called when tab change
	 */
	onTabChange?: (value: string) => void;
	/**
	 * The controlled value of the tab to activate
	 */
	value?: string;
	/**
	 * Array of displayed tabs
	 */
	tabs: TabConfig[];
}

export const Tabs: FC<Props> = ({
	className,
	defaultValue,
	onTabChange,
	value,
	tabs,
}) => {
	return (
		<RadixTabs.Root
			className={clsx('', className)}
			defaultValue={defaultValue ?? tabs[0].key}
			onValueChange={onTabChange}
			value={value}
		>
			<RadixTabs.List className="flex mb-4">
				{tabs?.map(({ key, title }) => (
					<RadixTabs.Trigger
						key={key}
						value={key}
						className="py-2 px-6 border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 dark:data-[state=active]:border-blue-500 dark:data-[state=active]:text-blue-500 transition-colors"
					>
						{title}
					</RadixTabs.Trigger>
				))}
			</RadixTabs.List>
			{tabs?.map(({ content, className, key }) => (
				<RadixTabs.Content key={key} value={key} className={className}>
					{content}
				</RadixTabs.Content>
			))}
		</RadixTabs.Root>
	);
};
