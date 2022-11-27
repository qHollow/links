import * as RadixSwitch from '@radix-ui/react-switch';
import { SwitchProps } from '@radix-ui/react-switch';
import clsx from 'clsx';
import { FC } from 'react';

interface Props extends SwitchProps {
	/**
	 * className applied to the root element
	 */
	className?: string;
}

export const Switch: FC<Props> = ({ className, ...props }) => {
	return (
		<RadixSwitch.Root
			className={clsx(
				'relative w-10 h-6 rounded-full p-1 ring-inset ring-2 bg-blue-200 data-[state=checked]:bg-blue-900 transition-colors disabled:disabled:bg-slate-400',
				className
			)}
			{...props}
		>
			<RadixSwitch.Thumb className="block w-4 h-4 rounded-full bg-white data-[state=checked]:translate-x-4 data-[state=checked]:bg-blue-300 transition-transform" />
		</RadixSwitch.Root>
	);
};
