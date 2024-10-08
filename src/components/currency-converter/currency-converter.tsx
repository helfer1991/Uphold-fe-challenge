import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrenciesList } from '../../components/currencies-list';
import { CurrencyInputAmount } from '../currency-input-amount/currency-input-amount';
import type { Currency } from '../../redux/slices/supportedCurrencies';
import { setSupportedCurrencies } from '../../redux/slices/supportedCurrencies';
import type { RootState } from '../../redux/store';
import { InputWrapper } from './styles';
import { useFetchListOfCurrencies } from '../../hooks/useFetchListOfCurrencies';

export const CurrencyConverter: React.FC = () => {
	return (
		<InputWrapper>
			<CurrencyInputAmount />
			<CurrenciesList itemsPerPage={30} />
		</InputWrapper>
	);
};
