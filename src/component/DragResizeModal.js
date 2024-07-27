import React from 'react';
import Modal from 'react-modal-resizable-draggable';
import styled from 'styled-components';

//react-modal-resizable-draggable test
function DragResizeModal({isOpen, onRequestClose, children}) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
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
				<CloseButton onClick={onRequestClose} />
				<div>{children}</div>
			</ModalContent>
		</Modal>
	);
}

export default DragResizeModal;

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
