import React from 'react';
import Modal from 'react-modal-resizable-draggable';
import styled from 'styled-components';

//react-modal-resizable-draggable test
function SmartModal({isOpen, onCloseEv}) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseEv}
			initWidth={400}
			initHeight={300}
			minWidth={200}
			minHeight={200}
			maxWidth={800}
			maxHeight={600}
			style={{
				content: {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				},
			}}
		>
			<ModalContent>
				<CloseButton onClick={onCloseEv} />
				<div>
					<h2>Resizable and Draggable Modal</h2>
					<p>This is a resizable and draggable modal.</p>
				</div>
			</ModalContent>
		</Modal>
	);
}

export default SmartModal;

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: #ff5f56;
	border: none;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	cursor: pointer;

	&:hover {
		background: #ff8782;
	}
`;

const ModalContent = styled.div`
	padding: 20px;
	background: white;
	border-radius: 4px;
	position: relative;
	width: 100%;
	height: 100%;
`;
