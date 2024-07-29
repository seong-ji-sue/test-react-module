import React, {useState} from 'react';
import DynamicModal from '../component/DynamicModal';
import styled from 'styled-components';
import SmartModal from '../component/SmartModal';
import InteractiveModal from '../component/InteractiveModal';

function ResizeDragModalPage() {
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
			<button onClick={openModal}>
				react-resizable, react-draggable
			</button>
			<button onClick={openDragModal}>
				react-modal-resizable-draggable
			</button>
			<button onClick={openRndModal}>react-rnd</button>
			<DynamicModal
				isOpen={isModalOpen}
				onCloseEv={closeModal}
				isResizable={true}
			/>
			<SmartModal isOpen={isDragModalOpen} onCloseEv={closeDragModal} />
			<InteractiveModal
				isOpen={isRndModalOpen}
				onCloseEv={closeRndModal}
			/>
		</div>
	);
}

export default ResizeDragModalPage;
