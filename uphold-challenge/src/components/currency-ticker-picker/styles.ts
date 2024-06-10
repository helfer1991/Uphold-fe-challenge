import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
`;

export const StyledButton = styled.button`
	align-items: center;
	background-color: white;
	border: 0;
	border-radius: 9999px;
	display: flex;
	justify-content: space-around;
	padding: 0.75rem;
	transition: background-color 0.3s ease;
	width: 10rem;

	&:hover {
		background-color: #f1f5f9;
	}
`;

export const CurrencyCode = styled.p`
	font-size: 16px;
	font-weight: 500;
	margin-left: 0.75rem;
`;
