import styled, {css} from 'styled-components';
import {
	BLUE_MAGENTA,
	BORDER_COLOR,
	EXPIRED,
	LIGHT_PURPLE,
	NAV_PURPLE,
	PURPLE,
	UNEXPIRED,
	WHITE,
} from './color';

export const calendarIcon = (
	<svg
		width='13'
		height='13'
		viewBox='0 0 13 13'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M8.4401 1.3999C8.57278 1.39992 8.70083 1.44863 8.79997 1.53679C8.89912 1.62495 8.96246 1.74643 8.97798 1.87819L8.98177 1.94157V2.48324H10.0651C10.3384 2.48315 10.6017 2.58637 10.8021 2.77221C11.0025 2.95805 11.1252 3.21278 11.1457 3.48532L11.1484 3.56657V10.0666C11.1485 10.3399 11.0453 10.6031 10.8595 10.8035C10.6736 11.0039 10.4189 11.1267 10.1464 11.1472L10.0651 11.1499H2.48177C2.20846 11.15 1.94521 11.0468 1.74481 10.8609C1.5444 10.6751 1.42164 10.4204 1.40115 10.1478L1.39844 10.0666V3.56657C1.39835 3.29326 1.50157 3.03001 1.68742 2.82961C1.87326 2.6292 2.12798 2.50644 2.40052 2.48594L2.48177 2.48324H3.5651V1.94157C3.56526 1.80351 3.61812 1.67072 3.7129 1.57033C3.80767 1.46994 3.9372 1.40953 4.07503 1.40143C4.21285 1.39334 4.34856 1.43818 4.45443 1.5268C4.5603 1.61541 4.62834 1.7411 4.64465 1.87819L4.64844 1.94157V2.48324H7.89844V1.94157C7.89844 1.79791 7.95551 1.66014 8.05709 1.55855C8.15867 1.45697 8.29645 1.3999 8.4401 1.3999ZM10.0651 6.2749H2.48177V10.0666H10.0651V6.2749ZM10.0651 3.56657H2.48177V5.19157H10.0651V3.56657Z'
			fill='#A0A0A0'
		/>
	</svg>
);

export const iType = {
	cancel: 'cancel',
	white: 'white',
	disabled: 'disabled',
	font: 'font',
	highlight: 'highlight',
	warning: 'warning',
	confirm: 'confirm',
	refresh: 'refresh',
};

const DefaultIcon = styled.span`
	cursor: ${(props) => (props?.isDisabled ? 'default' : 'pointer')};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${(props) => props?.margin || '0px'};
	padding: 0px;

	svg {
		width: ${(props) => props?.size};
		height: ${(props) => props?.size};
	}
`;

const IconColorCss = css`
	${(props) =>
		props?.iType === iType.disabled
			? BORDER_COLOR
			: props?.iType === iType.font
				? PURPLE
				: props?.iType === iType.highlight
					? LIGHT_PURPLE
					: props?.iType === iType.white
						? WHITE
						: props?.iType === iType.warning
							? EXPIRED
							: props?.iType === iType.cancel
								? NAV_PURPLE
								: props?.iType === iType.refresh
									? BLUE_MAGENTA
									: props?.iType === iType.confirm &&
										UNEXPIRED};
`;

export const Icon = styled(DefaultIcon)`
	svg {
		fill: ${IconColorCss};
	}

	path {
		fill: ${IconColorCss};
	}

	circle {
		fill: ${IconColorCss};
	}
`;

export const IconStroke = styled(DefaultIcon)`
	svg {
		stroke: ${IconColorCss};
	}
	path {
		stroke: ${IconColorCss};
	}
`;
