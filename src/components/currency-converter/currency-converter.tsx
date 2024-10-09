import { CurrenciesList } from '../../components/currencies-list';
import { CurrencyInputAmount } from '../currency-input-amount/currency-input-amount';
import { InputWrapper } from './styles';

export const CurrencyConverter: React.FC = () => {
	return (
		<InputWrapper>
			<CurrencyInputAmount />
			<CurrenciesList />
		</InputWrapper>
	);
};
