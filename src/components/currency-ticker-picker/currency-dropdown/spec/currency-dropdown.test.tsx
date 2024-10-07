import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../mocks/mock-store';
import { mockSupportedCurrencies } from '../../../../mocks/mocks';
import type { Currency } from '../../../../redux/slices/supportedCurrencies';
import { CurrencyDropdown } from '../currency-dropdown';

const setIsOpen = jest.fn();
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
					) as Currency,
				},
				supportedCurrencies: {
					currencies: mockSupportedCurrencies as Currency[],
				},
			},
		}
	);

	expect(screen.getByText('BAT')).toBeInTheDocument();
	expect(screen.getByText('ETH')).toBeInTheDocument();
	expect(screen.getByText('XRP')).toBeInTheDocument();
	expect(screen.getByText('BTC')).toBeInTheDocument();
});
