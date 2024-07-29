import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {Rnd} from 'react-rnd';
import styled from 'styled-components';

const customStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		zIndex: 1000,
	},
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		transform: 'translate(-50%, -50%)',
		padding: 0,
		border: 'none',
		background: 'transparent',
		overflow: 'visible',
	},
};

// 모달 루트 엘리먼트 설정
Modal.setAppElement('#root');

//react-rnd test
function InteractiveModal({isOpen, onCloseEv}) {
	const [dimensions, setDimensions] = useState({
		width: 500,
		height: 300,
		x: (window.innerWidth - 500) / 2,
		y: (window.innerHeight - 300) / 2,
	});

	useEffect(() => {
		const handleResize = () => {
			setDimensions((prev) => ({
				...prev,
				x: (window.innerWidth - prev.width) / 2,
				y: (window.innerHeight - prev.height) / 2,
			}));
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseEv}
			style={customStyles}
			contentLabel='Resizable Draggable Modal'
		>
			<Rnd
				size={{width: dimensions.width, height: dimensions.height}}
				position={{x: dimensions.x, y: dimensions.y}}
				onDragStop={(e, d) =>
					setDimensions({...dimensions, x: d.x, y: d.y})
				}
				onResizeStop={(e, direction, ref, delta, position) => {
					setDimensions({
						width: parseInt(ref.style.width, 10),
						height: parseInt(ref.style.height, 10),
						...position,
					});
				}}
				bounds='window'
				dragHandleClassName='drag-handle'
			>
				<ModalContent>
					<ModalHeader className='drag-handle'>
						<h3 style={{margin: 0}}>Resizable Draggable Modal</h3>
						<CloseButton onClick={onCloseEv}>Close</CloseButton>
					</ModalHeader>
					<ModalBody>
						<p>
							Your content goes here. Add more content to make it
							scrollable...
						</p>
					</ModalBody>
				</ModalContent>
			</Rnd>
		</Modal>
	);
}

export default InteractiveModal;

// Styled Components
const ModalContent = styled.div`
	width: 100%;
	height: 100%;
	background: white;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

const ModalHeader = styled.div`
	padding: 10px;
	border-bottom: 1px solid #ccc;
	cursor: move;
	background-color: #f0f0f0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ModalBody = styled.div`
	flex: 1;
	padding: 10px;
	overflow: auto;
`;

const CloseButton = styled.button`
	cursor: pointer;
`;
