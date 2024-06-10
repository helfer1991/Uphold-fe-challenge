import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrenciesList } from '../../components/currencies-list';
import { CurrencyInputAmount } from '../currency-input-amount/currency-input-amount';
import type { SupportedCurrency } from '../../redux/slices/supportedCurrencies';
import { setSupportedCurrencies } from '../../redux/slices/supportedCurrencies';
import type { RootState } from '../../redux/store';
import { InputWrapper } from './styles';
import { useFetchListOfCurrencies } from '../../hooks/useFetchListOfCurrencies';

export const CurrencyConverter: React.FC = () => {
	const listOfCurrencies = useFetchListOfCurrencies();
	const selectedCurrency = useSelector(
		(state: RootState) => state.selectedCurrency.currency
	);
	const supportedCurrencies = useSelector(
		(state: RootState) => state.supportedCurrencies.currencies
	);
	const dispatch = useDispatch();

	const getRates = async () => {
		if (supportedCurrencies.length === 0) {
			const currencies: SupportedCurrency[] = listOfCurrencies;
			dispatch(setSupportedCurrencies(currencies));
		}
	};

	useEffect(() => {
		getRates();
	}, [selectedCurrency]);

	return (
		<InputWrapper>
			<CurrencyInputAmount />
			<CurrenciesList itemsPerPage={30} />
		</InputWrapper>
	);
};
