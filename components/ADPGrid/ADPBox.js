import { css, styled } from "twin.macro";
import Image from "next/image";

const ADPBox = ({ data, highlightedTeamMembers, selectedTeamColor, Team }) => {

	return (
		<Container
			highlightedTeamMembers={highlightedTeamMembers}
			selectedTeamColor={selectedTeamColor}
		>
			<div tw="flex justify-between">
				<div tw="text-sm text-gray-300">
					<p tw="whitespace-nowrap overflow-ellipsis"> {data.data[1]} </p>
					<p tw="whitespace-nowrap overflow-ellipsis"> {data.data[2]} </p>
				</div>
				{Team?.Image && (
					<div tw="w-4 h-4">
						<Image height='100' width='100' src={Team?.Image.default.src} />
					</div>
				)}
			</div>

			<div
				tw="flex"
				css={[
					css`
						font-size: 11px;
					`,
				]}
			>
				<p tw="text-white">{data.data[5]}</p>
				<p tw="text-white pl-0.5">({data.data[3]})</p>
			</div>
		</Container>
	);
};

export default ADPBox;

const Container = styled.div`
	border: solid 1px #a0a0a0;
	border-radius: 3px;
	padding: calc(1.63636px + 0.11364vw);
	overflow: hidden;
	min-width: 95px;
	width: calc(52.3636px + 3.63636vw);
	min-height: 75px;
	height: calc(32.72725px + 2.27273vw);
	margin-bottom: 4px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	border: ${(props) =>
		props.highlightedTeamMembers && `solid 3px ${props.selectedTeamColor}`};
`;
