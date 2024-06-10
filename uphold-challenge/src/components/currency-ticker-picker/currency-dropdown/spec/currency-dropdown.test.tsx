import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../mocks/mock-store';
import { mockSupportedCurrencies } from '../../../../mocks/mocks';
import type { SupportedCurrency } from '../../../../redux/slices/supportedCurrencies';
import { CurrencyDropdown } from '../currency-dropdown';

const setIsOpen = jest.fn(); // Mock function for setIsOpen
const currenciesListDropdownRef = { current: document.createElement('div') };

it('Should render a list of currencies', () => {
	renderWithProviders(
		<CurrencyDropdown
			setIsOpen={setIsOpen}
			currenciesListDropdownRef={currenciesListDropdownRef}
		/>,
		{
			preloadedState: {
				selectedCurrency: {
					currency: mockSupportedCurrencies.find(
						({ code }) => code === 'USD'
					) as SupportedCurrency,
				},
				supportedCurrencies: {
					currencies: mockSupportedCurrencies as SupportedCurrency[],
				},
			},
		}
	);

	expect(screen.getByText('BAT')).toBeInTheDocument();
	expect(screen.getByText('ETH')).toBeInTheDocument();
	expect(screen.getByText('XRP')).toBeInTheDocument();
});
