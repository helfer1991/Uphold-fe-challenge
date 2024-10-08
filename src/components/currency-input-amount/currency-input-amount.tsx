import { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setCurrencyAmount,
	resetCurrencyAmount,
} from '../../redux/slices/currencyAmount';
import { CurrencyTickerPicker } from '../currency-ticker-picker/currency-ticker-picker';
import { debounce } from 'lodash';
import { Container, InputAmount } from './styles';
import type { RootState } from '../../redux/store';
import { useFetchListOfCurrencies } from '../../hooks/useFetchListOfCurrencies';

const DEBOUNCE_TIME = 500;
const MIN_INPUT_LENGTH = 1;

export const CurrencyInputAmount = () => {
	const [inputAmount, setInputAmount] = useState<string>('');
	const shouldFetch = inputAmount.length >= MIN_INPUT_LENGTH;
	useFetchListOfCurrencies(shouldFetch);
	const dispatch = useDispatch();
	const currencyAmount = useSelector(
		(state: RootState) => state.currencyAmount.value
	);

	const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputAmount(e.target.value);
	};

	const debouncedSetCurrencyAmount = useCallback(
		debounce((amount) => {
			dispatch(setCurrencyAmount(parseFloat(amount)));
		}, DEBOUNCE_TIME),
		[dispatch]
	);

	useEffect(() => {
		debouncedSetCurrencyAmount(inputAmount);
		return () => {
			debouncedSetCurrencyAmount.cancel();
		};
	}, [inputAmount, debouncedSetCurrencyAmount]);

	useEffect(() => {
		if (currencyAmount === 0) {
			setInputAmount('');
		}
	}, [currencyAmount]);

	return (
		<Container>
			<InputAmount
				value={inputAmount}
				onChange={handleAmountChange}
				placeholder="0.00"
				type="text"
			/>
			<CurrencyTickerPicker />
		</Container>
	);
};
