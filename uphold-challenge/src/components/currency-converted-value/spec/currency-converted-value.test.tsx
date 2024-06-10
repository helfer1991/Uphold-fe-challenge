import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../mocks/mock-store';
import { USDMock, mockSupportedCurrencies } from '../../../mocks/mocks';
import type { SupportedCurrency } from '../../../redux/slices/supportedCurrencies';
import { CurrencyConvertedValue } from '../currency-converted-value';

describe('CurrencyConvertedValue', () => {
	it('Should render the correct values', () => {
		renderWithProviders(
			<CurrencyConvertedValue
				currency={mockSupportedCurrencies[0]}
				rate={USDMock[0]}
			/>,
			{
				preloadedState: {
					selectedCurrency: {
						currency: mockSupportedCurrencies.find(
							({ code }) => code === 'USD'
						) as SupportedCurrency,
					},
					currencyAmount: { value: 10 },
					supportedCurrencies: {
						currencies: mockSupportedCurrencies as SupportedCurrency[],
					},
				},
			}
		);
		const value = screen.getByText('100');
		const ticker = screen.getByText('BAT');

		expect(ticker).toBeInTheDocument();
		expect(value).toBeInTheDocument();

		const loadingSkeleton = screen.queryByTestId('Converted-loading-skeleton');

		expect(loadingSkeleton).not.toBeInTheDocument();
	});
});
