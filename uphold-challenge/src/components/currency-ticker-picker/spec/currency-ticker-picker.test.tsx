import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../mocks/mock-store';
import { mockSupportedCurrencies } from '../../../mocks/mocks';
import type { SupportedCurrency } from '../../../redux/slices/supportedCurrencies';
import { CurrencyTickerPicker } from '../currency-ticker-picker';

it('Should show USD by default', () => {
	renderWithProviders(<CurrencyTickerPicker />, {
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
	});
	const selectButton = screen.getByRole('button');
	expect(selectButton).toBeVisible();
	expect(selectButton.textContent).toBe('USD');
});
