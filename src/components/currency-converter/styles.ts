import styled from 'styled-components';

export const InputWrapper = styled.div`
	min-height: 50vh;
	max-height: calc(100vh - 150px);
	max-width: 80vw;
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		max-width: 60vw;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		max-width: 45vw;
	}
`;
