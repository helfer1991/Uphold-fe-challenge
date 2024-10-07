import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Currency } from './supportedCurrencies';

export type SelectedCurrencyState = {
	currency: Currency;
};

const initialState: SelectedCurrencyState = {
	currency: {
		code: 'USD',
		features: ['buy', 'deposit', 'sell', 'transfer', 'withdraw'],
		formatting: {
			decimal: '.',
			format: '__symbol__ __value__ __code__',
			grouping: ',',
			precision: 2,
		},
		image: 'https://cdn.uphold.com/assets/USD.svg',
		name: 'US Dollar',
		shortName: 'USD',
		status: 'open',
		symbol: '$',
		type: 'fiat',
	} as Currency,
};

export const selectedCurrencySlice = createSlice({
	name: 'selectedCurrency',
	initialState,
	reducers: {
		setSelectedCurrency: (currency, action: PayloadAction<Currency>) => {
			currency.currency = action.payload;
		},
	},
});

export const { setSelectedCurrency } = selectedCurrencySlice.actions;

export default selectedCurrencySlice.reducer;
