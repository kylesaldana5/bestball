import { useState } from "react";
import { css, styled } from "twin.macro";
import { NFLTeams } from "../../data/NFLTeams";
import { ADPBOX, ListBox } from "../index";

const ADPGrid = ({ csv }) => {
	const [selectedTeam, setSelectedTeam] = useState(null);
	let sorted = csv.sort((a, b) => a.data[3] - b.data[3]);

	// loop over the upload csv to make the adp grid
	const createADPBoxes = (csv) => {
		return csv.map((data, index) => {
			let highlightedTeamMembers = data.data[7] === selectedTeam?.Name;
			let selectedTeamColor = selectedTeam?.PrimaryColor;
			let Team = NFLTeams.find((team) => team.Name === data.data[7]);

			return (
				<div className={"item"} key={index}>
					<ADPBOX
						data={data}
						highlightedTeamMembers={highlightedTeamMembers}
						selectedTeamColor={selectedTeamColor}
						Team={Team}
					/>
				</div>
			);
		});
	};

	return (
		<div tw="h-full w-full">
			{/* show the list box if the csv grid */}
			{csv.length > 0 && (
				<div>
					<div tw="flex items-start px-4 py-4 pl-11">
						<div style={{ minWidth: "205px" }}>
							<ListBox
								items={NFLTeams}
								onChange={setSelectedTeam}
								selected={
									selectedTeam ?? {
										Name: "Select A Team",
									}
								}
							/>
						</div>
					</div>
					<div tw="flex px-3.5">
						{/* columns making the numbers in the adp gride */}
						<div tw="flex-col">
							{[...Array(18).keys()].map((rowNumber, index) => {
								return (
									<div
										tw="text-white text-lg w-5 flex items-center justify-center mb-3"
										key={index}
										css={[
											css`
												min-height: 75px;
												height: calc(32.72725px + 2.27273vw);
											`,
										]}
									>
										{rowNumber + 1}
									</div>
								);
							})}
						</div>
						{/* grid of adp csv */}
						<div
							tw="grid grid-cols-12 gap-2 w-full pl-2.5 pr-3.5 overflow-x-scroll"
							css={[
								css`
									min-width: 1200px;
									grid-auto-flow: dense;
									.item:nth-child(24n + 13) {
										grid-column: 12;
									}
									.item:nth-child(24n + 14) {
										grid-column: 11;
									}
									.item:nth-child(24n + 15) {
										grid-column: 10;
									}
									.item:nth-child(24n + 16) {
										grid-column: 9;
									}
									.item:nth-child(24n + 17) {
										grid-column: 8;
									}
									.item:nth-child(24n + 18) {
										grid-column: 7;
									}
									.item:nth-child(24n + 19) {
										grid-column: 6;
									}
									.item:nth-child(24n + 20) {
										grid-column: 5;
									}
									.item:nth-child(24n + 21) {
										grid-column: 4;
									}
									.item:nth-child(24n + 22) {
										grid-column: 3;
									}
									.item:nth-child(24n + 23) {
										grid-column: 2;
									}
								`,
							]}
						>
							{createADPBoxes(sorted)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ADPGrid;
