import {
	Nav,
	NavigationLinksContainer,
	NavigationLink,
	LogoContainer,
	LoginButtonContainer,
	LoginButton,
} from './styles';

export const Navbar: React.FC = () => (
	<Nav>
		<NavigationLinksContainer data-testid="navigation-links">
			<NavigationLink href="#">Personal</NavigationLink>
			<NavigationLink href="#">Business</NavigationLink>
			<NavigationLink href="#">Partners</NavigationLink>
		</NavigationLinksContainer>
		<LogoContainer>
			<img src="/assets/logo.svg" alt="logo" />
		</LogoContainer>
		<LoginButtonContainer>
			<LoginButton data-testid="login-button">Login</LoginButton>
		</LoginButtonContainer>
	</Nav>
);
