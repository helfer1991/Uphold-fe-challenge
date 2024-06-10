import styled from 'styled-components';

export const Nav = styled.nav`
	padding: 3rem;
	width: 100%;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	text-align: center;
	justify-content: center;
`;

export const NavigationLinksContainer = styled.div`
	display: none;
	justify-content: center;
	align-items: center;

	@media (min-width: 1024px) {
		display: flex;
	}
	grid-column: span 1;

	a + a {
		margin-left: 3rem;
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
