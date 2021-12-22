import { css } from "twin.macro";

const ProjectInfo = () => {
	return (
		<div
			tw=" flex flex-col items-center justify-start w-full rounded-lg pb-14 px-12"
			css={[
				css`
					height: 60vh;
					background-image: linear-gradient(
						to top,
						#30cfd0 0%,
						#330867 100%
					);
					font-family: "Space Mono", monospace;
				`,
			]}
		>
			<h3 tw="text-white text-3xl font-extrabold my-4 ">What is this?</h3>
			<section tw="mt-4 ">
				<h4 tw="text-white text-2xl font-extrabold">ADP Grid</h4>
				<p tw="text-white text-lg font-sans font-medium mt-4">
					Wondering which stacks fall to which position in your draft? Have
					you picked a WR1 only to realize later its QB is never falling
					around your draft position. The adp grid helps you visualize who
					is falling around you and helps you reverse engineer late round
					stacks or unique builds.
				</p>
				<p tw="mt-4 text-white text-lg font-sans font-medium">
					<span tw="underline text-indigo-200 cursor-pointer">
						<a
							target="example"
							href="https://underdogfantasy.com/rankings/NFL"
						>
							Click here{" "}
						</a>
					</span>
					to download your underdog adp and drag it into the csv upload
				</p>
			</section>
		</div>
	);
};

export default ProjectInfo;
