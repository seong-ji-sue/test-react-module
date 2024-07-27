import React, {useState} from 'react';
import ResizableModal from '../component/ResizableModal';
import styled from 'styled-components';
import DragResizeModal from '../component/DragResizeModal';
import RndModal from '../component/RndModal';

function ResizeModalPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDragModalOpen, setIsDragModalOpen] = useState(false);
	const [isRndModalOpen, setIsRndModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const openDragModal = () => {
		setIsDragModalOpen(true);
	};

	const closeDragModal = () => {
		setIsDragModalOpen(false);
	};
	const openRndModal = () => {
		setIsRndModalOpen(true);
	};

	const closeRndModal = () => {
		setIsRndModalOpen(false);
	};

	return (
		<div>
			<button onClick={openModal}>react-modal</button>
			<button onClick={openDragModal}>
				react-modal, react-resizable
			</button>
			<button onClick={openRndModal}>react-rnd</button>
			<ResizableModal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				isResizable={true}
			>
				<ModalContent>
					<Box>
						Hello, I am a box inside a modal with a lot of content
						that will overflow and cause scrolling inside the box.
						This is to demonstrate the horizontal scrolling feature
						when the box becomes smaller. Hello, I am a box inside a
						modal with a lot of content that will overflow and cause
						scrolling inside the box. This is to demonstrate the
						horizontal scrolling feature when the box becomes
						smaller.Hello, I am a box inside a modal with a lot of
						content that will overflow and cause scrolling inside
						the box. This is to demonstrate the horizontal scrolling
						feature when the box becomes smaller.Hello, I am a box
						inside a modal with a lot of content that will overflow
						and cause scrolling inside the box. This is to
						demonstrate the horizontal scrolling feature when the
						box becomes smaller.Hello, I am a box inside a modal
						with a lot of content that will overflow and cause
						scrolling inside the box. This is to demonstrate the
						horizontal scrolling feature when the box becomes
						smaller.`
					</Box>
				</ModalContent>
			</ResizableModal>
			<DragResizeModal
				isOpen={isDragModalOpen}
				onRequestClose={closeDragModal}
			>
				<h2>Resizable and Draggable Modal</h2>
				<p>This is a resizable and draggable modal.</p>
			</DragResizeModal>
			<RndModal isOpen={isRndModalOpen} onClose={closeRndModal}>
				<p>
					Your content goes here. Add more content to make it
					scrollable...
				</p>
			</RndModal>
		</div>
	);
}

export default ResizeModalPage;

const ModalContent = styled.pre`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Box = styled.code`
	width: 100%;
	height: 100%;
	background-color: lightgray;
	overflow-x: auto;
	overflow-y: auto;
	white-space: nowrap;
`;
