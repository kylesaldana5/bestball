import { css, styled } from "twin.macro";
import PlayerListCard from "./PlayerListCard";
const ExposureContainer = ({ csv }) => {
	// create new list with exposure grouped by draft
	let groupedExposure = [];
	csv.forEach((item) => {
		if (!groupedExposure[item.data[7]]) {
			groupedExposure[item.data[7]] = [];
		}
		groupedExposure[item.data[7]].push(item.data);
	});

	const makePlayerList = () => {};

	const makePlayerCards = (groupedExposure) => {
		groupedExposure.forEach((draft) => {
			return draft.map((data, key) => {
				return <PlayerListCard draftData={data} key={key} />;
			});
		});
	};

	return (
		<div tw="h-full w-full">
			{csv.length > 0 && (
				<div tw="flex">
					<div tw="w-1/5">{makePlayerList()}</div>
					<div tw="w-4/5">
						<div tw="grid grid-cols-6 gap-2 w-full pl-2.5 pr-3.5 overflow-x-scroll">
							{makePlayerCards(groupedExposure)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExposureContainer;
