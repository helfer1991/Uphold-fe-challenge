import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2.5rem;
`;

export const Title = styled.h1`
	font-size: 2.25rem;
	color: black;
	text-align: center;
`;

export const Subtitle = styled.h4`
	margin-top: 2.5rem;
	font-size: 1.25rem;
	width: 100%;
	text-align: center;
	color: #8494a5;
	font-weight: 400;

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		width: 66.666667%;
	}
`;
