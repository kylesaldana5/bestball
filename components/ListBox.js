import { useState } from "react";
import { Listbox } from "@headlessui/react";
import "twin.macro";

const ListBox = ({ items, onChange, selected, placeholder }) => {
	const [selectedItem, setSelectedItem] = useState(selected);

	const handleChanged = (item) => {
		if (onChange) onChange(item);
		setSelectedItem(item);
	};

	const selection = selected ?? selectedItem;

	return (
		<Listbox value={selection} onChange={handleChanged}>
			<div tw="relative mt-1 w-full">
				<Listbox.Button tw="relative flex items-center justify-between w-full py-2 px-2  text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
					<span tw="block truncate text-black">
						{selection.Name ?? <span>&nbsp;</span>}
					</span>
					<span tw="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<svg
							width="12"
							height="6"
							viewBox="0 0 12 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.51593 0.415704C0.951931 0.0366037 1.55893 0.00685368 2.09193 0.415704L5.99993 3.60065L9.90793 0.415704C10.4409 0.00685368 11.0489 0.0366037 11.4819 0.415704C11.9179 0.793954 11.8899 1.43315 11.4819 1.78845C11.0759 2.14375 6.78693 5.61515 6.78693 5.61515C6.6848 5.70513 6.56238 5.77669 6.427 5.82557C6.29161 5.87444 6.14602 5.89963 5.99893 5.89963C5.85184 5.89963 5.70625 5.87444 5.57087 5.82557C5.43548 5.77669 5.31307 5.70513 5.21093 5.61515C5.21093 5.61515 0.923931 2.14375 0.51593 1.78845C0.10693 1.43315 0.0799304 0.793954 0.51593 0.415704Z"
								fill="#5A5353"
							/>
						</svg>
					</span>
				</Listbox.Button>
				<Listbox.Options tw="absolute z-20 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
					{items.map((item) => (
						<Listbox.Option
							key={item.ID}
							value={item}
							disabled={item.unavailable}
							tw="text-black select-none relative py-2 px-2 cursor-pointer hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
						>
							{item.Name}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</div>
		</Listbox>
	);
};

export default ListBox;
