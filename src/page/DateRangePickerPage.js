import React, {useMemo, useState} from 'react';
import * as dateFns from 'date-fns';
import {MyDatePicker} from '../component/DatePicker';
import styled from 'styled-components';

function DateRangePickerPage() {
	const [startDate, setStartDate] = useState('');

	const startDateFormat = useMemo(() => {
		return startDate
			? dateFns.format(startDate, 'yyyy-MM-dd')
			: '시간을 선택해주세요!';
	}, [startDate]);

	return (
		<_Container>
			<_Title>React Date Picker</_Title>
			<MyDatePicker startDate={startDate} setStartDate={setStartDate} />
			<p>선택한 시간 : {startDateFormat}</p>
		</_Container>
	);
}

export default DateRangePickerPage;

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
