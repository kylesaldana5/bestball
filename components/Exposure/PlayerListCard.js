import { css, styled } from "twin.macro";

const PlayerListCard = ({ playerData }) => {
	return <div tw="border-green-900 h-40 w-20">{playerData[2]}</div>;
};

export default PlayerListCard;
