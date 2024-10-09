import '@testing-library/jest-dom/extend-expect';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../mocks/mock-store';
import { USDMock, mockSupportedCurrencies } from '../../../mocks/mocks';
import { CurrenciesList } from '../currencies-list';

it('Should render the list of currencies', () => {
	renderWithProviders(<CurrenciesList />, {
		preloadedState: {
			supportedCurrencies: { currencies: mockSupportedCurrencies },
			currencyAmount: { value: 10 },
			exchangeRates: { rates: { USD: USDMock } },
		},
	});

	waitFor(() => {
		const currencyCards = screen.getAllByRole('listitem');
		expect(currencyCards).toHaveLength(USDMock.length);
	});
});
