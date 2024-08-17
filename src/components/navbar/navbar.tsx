import {
	Nav,
	GridContainer,
	NavigationLinksContainer,
	NavigationLink,
	LogoContainer,
	LoginButtonContainer,
	LoginButton,
} from './styles';

export const Navbar: React.FC = () => (
	<Nav>
		<GridContainer>
			<NavigationLinksContainer data-testid="navigation-links">
				<NavigationLink href="https://www.google.com">Personal</NavigationLink>
				<NavigationLink href="">Business</NavigationLink>
				<NavigationLink href="">Partners</NavigationLink>
			</NavigationLinksContainer>
			<LogoContainer>
				<img src="/assets/logo.svg" alt="logo" />
			</LogoContainer>
			<LoginButtonContainer>
				<LoginButton data-testid="login-button">Login</LoginButton>
			</LoginButtonContainer>
		</GridContainer>
	</Nav>
);
