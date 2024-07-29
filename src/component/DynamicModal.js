import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import {ResizableBox} from 'react-resizable';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import {GoArrowDownRight} from 'react-icons/go';

Modal.setAppElement('#root');

const object = {
	content:
		'Hello, I am a box inside a modal with a lot of content\n' +
		'that will overflow and cause scrolling inside the box.\n' +
		'This is to demonstrate the horizontal scrolling feature\n' +
		'when the box becomes smaller. Hello, I am a box inside a\n' +
		'modal with a lot of content that will overflow and cause\n' +
		'scrolling inside the box. This is to demonstrate the\n' +
		'horizontal scrolling feature when the box becomes\n' +
		'smaller.Hello, I am a box inside a modal with a lot of\n' +
		'content that will overflow and cause scrolling inside\n' +
		'the box. This is to demonstrate the horizontal scrolling\n' +
		'feature when the box becomes smaller.Hello, I am a box\n' +
		'inside a modal with a lot of content that will overflow\n' +
		'and cause scrolling inside the box. This is to\n' +
		'demonstrate the horizontal scrolling feature when the\n' +
		'box becomes smaller.Hello, I am a box inside a modal\n' +
		'with a lot of content that will overflow and cause\n' +
		'scrolling inside the box. This is to demonstrate the\n' +
		'horizontal scrolling feature when the box becomes\n' +
		'smaller.',
};

//react-modal, react-resizable test, react-draggable
const DynamicModal = ({isOpen, onCloseEv}) => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<_DialogBox isOpen={isOpen} onRequestClose={onCloseEv}>
			<Draggable handle='.drag-handle'>
				<_DragWrapper>
					<_ResizableBox
						width={400}
						height={250}
						minConstraints={[200, 100]}
						maxConstraints={[
							windowSize.width - 100,
							windowSize.height - 100,
						]}
						handle={
							<span className='custom-handle'>
								<GoArrowDownRight />
							</span>
						}
					>
						<_DragHandle className='drag-handle'>
							react-modal, react-resizable test
						</_DragHandle>

						<_ModalContent>{object.content}</_ModalContent>

						<_ButtonWrapper>
							<_CloseButton onClick={onCloseEv}>
								cancel
							</_CloseButton>
						</_ButtonWrapper>
					</_ResizableBox>
				</_DragWrapper>
			</Draggable>
		</_DialogBox>
	);
};

export default DynamicModal;

const _DialogBox = styled(Modal).attrs(() => ({
	style: {
		overlay: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'rgba(137, 137, 137, 0.30)',
			zIndex: 10,
		},
	},
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}))``;

const _DragWrapper = styled.div`
	background: #ffffff;
	box-shadow: 1px 4px 10px rgba(55, 56, 60, 0.08);
	border-radius: 10px;
	outline: none;
	z-index: 10;
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	position: relative;
	padding: 16px;
`;

const _ModalContent = styled.pre`
	width: 100%;
	height: 50%;
	border: 1px solid gray;
	overflow-x: scroll;
	box-sizing: border-box;
	flex: 1; // ResizableBox 내부 요소가 전체 크기를 차지하도록 함
`;

const _DragHandle = styled.div`
	cursor: move;
	background: #f0f0f0;
	padding: 10px;
	border-bottom: 1px solid #ccc;
`;

const _ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const _CloseButton = styled.button`
	justify-content: end;
	padding: 10px;
`;

const _ResizableBox = styled(ResizableBox)`
	position: relative;

	.custom-handle {
		position: absolute;
		right: -18px;
		bottom: -18px;
		width: 20px;
		height: 20px;
		cursor: se-resize;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
