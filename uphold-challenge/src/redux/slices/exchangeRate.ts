import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ExchangeRate = {
	ask: string;
	bid: string;
	currency: string;
	pair: string;
};

export type ExchangeRatesState = {
	rates: Record<string, ExchangeRate[]>;
};

const initialState: ExchangeRatesState = {
	rates: {},
};

export const ExchangeRatesSlice = createSlice({
	name: 'ExchangeRates',
	initialState,
	reducers: {
		setExchangeRates: (
			state,
			action: PayloadAction<{ key: string; data: ExchangeRate[] }>
		) => {
			const { key, data } = action.payload;
			state.rates[key] = data;
		},
	},
});

export const { setExchangeRates } = ExchangeRatesSlice.actions;
export default ExchangeRatesSlice.reducer;
