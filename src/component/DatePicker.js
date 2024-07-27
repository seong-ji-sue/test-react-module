import React, {forwardRef} from 'react';
import {ko} from 'date-fns/locale';
import * as dateFns from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styled, {css} from 'styled-components';
import {calendarIcon, Calender, Icon, iType} from '../icon';

export const LIGHT_GREY = '#a0a0a0';

export function MyDatePicker({startDate, setStartDate}) {
	const ExampleCustomInput = ({value, onChange}) => {
		return (
			<Container>
				<CustomInput
					placeholder={'YYYY.MM.DD'}
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
				<IconContainer>
					<Icon iType={iType.disabled} size={100}>
						{calendarIcon}
					</Icon>
				</IconContainer>
			</Container>
		);
	};

	return (
		<DatePicker
			selected={startDate} //선택달
			onChange={(date) => setStartDate(date)} //변경함수
			shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
			locale={ko} //한글 변경(date-fns 로 변경)
			dateFormat='yyyy.MM.dd' //input 에 나오는 format
			customInput={
				<ExampleCustomInput
					value={startDate}
					onChange={(v) => setStartDate(v)}
				/>
			}
			// selectsStart //시작 달력
			// startDate={startDate} //시작일자
			// endDate={endDate} //종료일자

			// renderCustomHeader={(
			// 	data, //
			// ) => <DateRangeHeader data={data} />}
			// onMonthChange={onChangeMonth}
			disabledKeyboardNavigation
			// dayClassName={dayColorClassName}
		/>
	);
}

const IconContainer = styled.div`
	position: absolute;
	top: 7px;
	right: 6px;
`;

const Container = styled.div`
	border: none;
	height: 28px;
	background: rgb(255, 255, 255);
	display: flex;
	//flex-direction: row-reverse;
	//position: relative;
	width: 100%;
`;

const CustomInput = styled.input`
	height: 28px;
	width: 96px;
	border: 1px solid rgb(210, 210, 210);
	padding: 9px 6px 8px 8px;
	color: #333333;
	background: #ffffff;
	border-radius: 4px;
	font-size: 12px;
	font-family: 'NanumBarunGothic', sans-serif;

	&::placeholder {
		font-size: 10px;
		color: ${LIGHT_GREY};
	}
	&:focus {
		outline: none;
	}
`;
