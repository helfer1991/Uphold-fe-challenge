import { ChangeEvent, useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrencyAmount } from '../../redux/slices/currencyAmount';
import { CurrencyTickerPicker } from '../currency-ticker-picker/currency-ticker-picker';
import { debounce } from 'lodash';
import { Container, InputAmount } from './styles';

const DEBOUNCE_TIME = 500;

export const CurrencyInputAmount = () => {
	const [inputAmount, setInputAmount] = useState<string>('');
	const dispatch = useDispatch();

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
