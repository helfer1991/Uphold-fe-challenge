import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: #f5f9fc;
	border-radius: 0.5rem;
	padding: 0.75rem;
	position: relative;
`;

export const InputAmount = styled.input`
	border: none;
	font-size: 2rem;
	background-color: transparent;
	outline: none;
	appearance: none;
	width: 66.666667%;

	@media (min-width: 576px) {
		font-size: 3;
	}
`;
