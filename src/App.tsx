import { Container, HeaderWrapper, Title, Subtitle } from './styles';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { CurrencyConverter } from './components/currency-converter';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { breakpoints } from './theme';

const GlobalStyle = createGlobalStyle`
	@layer base {
		input[type='number']::-webkit-inner-spin-button,
		input[type='number']::-webkit-outer-spin-button {
			-webkit-appearance: none;
			margin: 0;
	}
	}

	body {
		margin: 0;
		font-family: proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif;
		/*   -webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale; */
		color: rgb(104, 119, 141);
		line-height: 1.4;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	* {
		padding: 0;
	}
`;

const theme = {
	breakpoints,
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<main>
				<Container>
					<Navbar />
					<HeaderWrapper>
						<Title>Currency Converter</Title>
						<Subtitle>
							Receive competitive and transparent pricing with no hidden
							spreads. See how we compare.
						</Subtitle>
					</HeaderWrapper>
					<div>
						<CurrencyConverter />
					</div>
					<Footer />
				</Container>
			</main>
		</ThemeProvider>
	);
}

export default App;
