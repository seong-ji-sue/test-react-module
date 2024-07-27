import styled from 'styled-components';
import {useMemo, useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import * as dateFns from 'date-fns';
import {MyDatePicker} from './component/DatePicker';
import {Link} from 'react-router-dom';

function App() {
	return (
		<_Container>
			<h1>Home</h1>
			<Link to={'/date'}>캘린더</Link>
			<h1>Resize Modal</h1>
			<Link to={'/resize-modal'}>크기 조절 모달</Link>
		</_Container>
	);
}

export default App;

const _Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	//flex: 1;
	align-items: center;
`;

const _Title = styled.p`
	font-size: 26px;
`;
