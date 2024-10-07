import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../../mocks/mock-store';
import { USDMock, mockSupportedCurrencies } from '../../../mocks/mocks';
import type { Currency } from '../../../redux/slices/supportedCurrencies';
import { CurrencyInputAmount } from '../currency-input-amount';

describe('CurrencyInputAmount', () => {
	it('updates input field value when the user types', () => {
		renderWithProviders(<CurrencyInputAmount />, {
			preloadedState: {
				selectedCurrency: {
					currency: mockSupportedCurrencies.find(
						({ code }) => code === 'USD'
					) as Currency,
				},
				supportedCurrencies: {
					currencies: mockSupportedCurrencies as Currency[],
				},
				exchangeRates: { rates: { USD: USDMock } },
			},
		});

		const inputElement = screen.getByPlaceholderText('0.00');
		expect(inputElement).toBeVisible();

		fireEvent.change(inputElement, { target: { value: '123.45' } });

		expect(inputElement).toHaveValue('123.45');
	});
	it("validates that the mouse-wheel doesn't trigger the number input", () => {
		renderWithProviders(<CurrencyInputAmount />, {
			preloadedState: {
				selectedCurrency: {
					currency: mockSupportedCurrencies.find(
						({ code }) => code === 'USD'
					) as Currency,
				},
				supportedCurrencies: {
					currencies: mockSupportedCurrencies as Currency[],
				},
				exchangeRates: { rates: { USD: USDMock } },
			},
		});

		const inputElement = screen.getByPlaceholderText('0.00');

		fireEvent.wheel(inputElement);

		expect(document.activeElement).not.toBe(inputElement);
	});

	it('handles the input debounce correctly', async () => {
		jest.useFakeTimers();

		renderWithProviders(<CurrencyInputAmount />, {
			preloadedState: {
				selectedCurrency: {
					currency: mockSupportedCurrencies.find(
						({ code }) => code === 'USD'
					) as Currency,
				},
				supportedCurrencies: {
					currencies: mockSupportedCurrencies as Currency[],
				},
				exchangeRates: { rates: { USD: USDMock } },
			},
		});

		const inputElement = screen.getByPlaceholderText('0.00');

		act(() => {
			fireEvent.change(inputElement, { target: { value: '123.45' } });
			expect(screen.queryByText('BAT')).not.toBeInTheDocument();
			jest.advanceTimersByTime(500);
		});

		await waitFor(() => {
			expect(screen.queryByText('BAT')).not.toBeInTheDocument();
		});
		jest.useRealTimers();
	});
});
