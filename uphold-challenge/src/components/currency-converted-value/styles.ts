import styled from 'styled-components';

export const ConversionItem = styled.div`
	align-items: center;
	border-radius: 0.375rem;
	color: #4b5563;
	display: flex;
	font-size: 1.25rem;
	justify-content: space-between;
	padding: 0.75rem;

	&:hover {
		background-color: #edf2f7;
	}
`;

export const TickerWrapper = styled.div`
	align-items: center;
	display: flex;
	font-size: 1rem;
	padding: 0.5rem 0.75rem;
	width: 7rem;
`;

export const CurrencyCode = styled.p`
	font-size: 16px;
	font-weight: 500;
	margin-left: 0.75rem;
`;
