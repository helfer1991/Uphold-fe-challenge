import { Container, HeaderWrapper, Title, Subtitle } from './styles';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { CurrencyConverter } from './components/currency-converter';

function App() {
	return (
		<main>
			<Container>
				<Navbar />
				<HeaderWrapper>
					<Title>Currency Converter</Title>
					<Subtitle>
						Receive competitive and transparent pricing with no hidden spreads.
						See how we compare.
					</Subtitle>
				</HeaderWrapper>
				<div>
					<CurrencyConverter />
				</div>
				<Footer />
			</Container>
		</main>
	);
}

export default App;
