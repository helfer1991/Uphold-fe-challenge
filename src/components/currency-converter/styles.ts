import styled from 'styled-components';

export const InputWrapper = styled.div`
	min-height: 50vh;
	max-height: calc(100vh - 150px); /* Adjusted maximum height */
	max-width: 80vw;
	margin-bottom: 3rem;

	@media (min-width: 768px) {
		max-width: 60vw;
	}

	@media (min-width: 1024px) {
		max-width: 50vw;
	}

	@media (min-width: 1280px) {
		max-width: 40vw;
	}
`;
