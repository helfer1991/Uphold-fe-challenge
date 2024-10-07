import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	gap: 1rem;
	text-align: center;
	justify-content: center;
	flex-wrap: wrap;
	padding: 3rem;

	@media (min-width: 576px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		width: 100%;
	}
`;

export const NavigationLinksContainer = styled.div`
	order: 2;
	justify-content: center;
	align-items: center;
	grid-column: span 1;

	a + a {
		margin-left: 3rem;
	}

	@media (min-width: 576px) {
		display: flex;
		order: 1;
	}
`;

export const NavigationLink = styled.a`
	color: rgb(104, 119, 141);
	text-decoration: none;
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: span 2;

	@media (min-width: 1024px) {
		grid-column: span 1;
	}
`;

export const LoginButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginButton = styled.button`
	background-color: #6fe68a;
	border: 0;
	width: 9rem;
	border-radius: 9999px;
	transition: background-color 0.2s ease-in-out;
	padding: 0.75rem;
	color: white;

	&:hover {
		background-color: #329c4a;
	}
`;
