import { useRef } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import tw, { css, styled } from "twin.macro";

const StyledTransitionChildOverlay = styled(Transition.Child)`
	&.enter {
		${tw`ease-out duration-300`}
	}
	&.enterFrom {
		${tw`opacity-0`}
	}
	&.enterTo {
		${tw`opacity-100`}
	}
	&.leave {
		${tw`ease-in duration-100`}
	}
	&.leaveFrom {
		${tw`opacity-100`}
	}
	&.leaveTo {
		${tw`opacity-0`}
	}
`;

const StyledTransitionChildContent = styled(Transition.Child)`
	${tw`z-20`}
	&.enter {
		${tw`ease-out duration-500`}
	}
	&.enterFrom {
		${tw`scale-95 opacity-0`}
	}
	&.enterTo {
		${tw`scale-100 opacity-100`}
	}
	&.leave {
		${tw`duration-200 ease-out`}
	}
	&.leaveFrom {
		${tw`scale-100 opacity-100`}
	}
	&.leaveTo {
		${tw`scale-95 opacity-0`}
	}
`;

const Modal = ({
	isOpen,
	setIsOpen,
	children,
	modalChildrenStyle,
	setConditionalChildren,
}) => {
	let ref = useRef();

	return (
		<Transition show={!!isOpen}>
			<Dialog
				static
				open={isOpen}
				initialFocus={ref}
				onClose={() => {
					setIsOpen && setIsOpen(false);
					setConditionalChildren && setConditionalChildren(false);
				}}
				tw="fixed z-10 inset-0 overflow-y-auto"
			>
				<div
					tw="flex items-center justify-center min-h-screen "
					style={{ backgroundColor: "rgba(0,0,0,.7)" }}
				>
					<StyledTransitionChildOverlay
						enter="enter"
						enterFrom="enterFrom"
						enterTo="enterTo"
						leave="leave"
						leaveFrom="leaveFrom"
						leaveTo="leaveTo"
					>
						<Dialog.Overlay tw="fixed inset-0 bg-black opacity-30" />
					</StyledTransitionChildOverlay>
					<StyledTransitionChildContent
						enter="enter"
						enterFrom="enterFrom"
						enterTo="enterTo"
						leave="leave"
						leaveFrom="leaveFrom"
						leaveTo="leaveTo"
						css={[
							css`
								width: 100%;
								margin: 0 auto;
								max-width: 700px;
							`,
						]}
					>
						<div ref={ref}>{children}</div>
					</StyledTransitionChildContent>
				</div>
			</Dialog>
		</Transition>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
	modalChildrenStyle: PropTypes.object,
};

export default Modal;
