import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../mocks/mock-store';
import { USDMock, mockSupportedCurrencies } from '../../../mocks/mocks';
import type { Currency } from '../../../redux/slices/supportedCurrencies';
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
						) as Currency,
					},
					currencyAmount: { value: 10 },
					supportedCurrencies: {
						currencies: mockSupportedCurrencies as Currency[],
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
