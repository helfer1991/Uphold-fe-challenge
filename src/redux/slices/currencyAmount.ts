import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type CurrencyAmountState = {
	value: number | undefined;
};

const initialState: CurrencyAmountState = {
	value: undefined,
};

export const currencyAmountSlice = createSlice({
	name: 'currencyAmount',
	initialState,
	reducers: {
		setCurrencyAmount: (amount, action: PayloadAction<number>) => {
			amount.value = action.payload;
		},
		resetCurrencyAmount(state) {
			state.value = 0;
		},
	},
});

export const { setCurrencyAmount, resetCurrencyAmount } =
	currencyAmountSlice.actions;

export default currencyAmountSlice.reducer;
