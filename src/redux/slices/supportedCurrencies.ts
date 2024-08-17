import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type SupportedCurrency = {
	code: string;
	features: string[];
	formatting: {
		decimal: string;
		format: string;
		grouping: string;
		precision: number;
	};
	image: string;
	name: string;
	shortName: string;
	status: string;
	type: string;
};
export type SupportedCurrencyState = {
	currencies: SupportedCurrency[];
};

const initialState: SupportedCurrencyState = {
	currencies: [
		{
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
		} as SupportedCurrency,
	],
};

export const supportedCurrenciesSlice = createSlice({
	name: 'supportedCurrencies',
	initialState,
	reducers: {
		setSupportedCurrencies: (
			state,
			action: PayloadAction<SupportedCurrency[]>
		) => {
			state.currencies = action.payload;
		},
	},
});

export const { setSupportedCurrencies } = supportedCurrenciesSlice.actions;

export default supportedCurrenciesSlice.reducer;
