import React from 'react';
import Modal from 'react-modal';
import {ResizableBox} from 'react-resizable';
import 'react-resizable/css/styles.css';

Modal.setAppElement('#root');

//react-modal, react-resizable test
const ResizableModal = ({isOpen, onRequestClose, children}) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={{
				content: {
					position: 'absolute',
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
					// overflow: 'visible',
				},
			}}
		>
			<div>sadasdsad</div>
			<ResizableBox
				width={300}
				height={300}
				minConstraints={[200, 200]}
				maxConstraints={[600, 600]}
			>
				{children}
			</ResizableBox>
		</Modal>
	);
};

export default ResizableModal;
