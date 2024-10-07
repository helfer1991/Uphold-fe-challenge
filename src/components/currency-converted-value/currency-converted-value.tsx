import { useSelector } from 'react-redux';
import type { ExchangeRate } from '../../redux/slices/exchangeRate';
import type { Currency } from '../../redux/slices/supportedCurrencies';
import { RootState } from '../../redux/store';
import { CurrencyImage } from '../currency-image/currency-image';
import { ConversionItem, TickerWrapper, CurrencyCode } from './styles';

type CurrencyConversionValueProps = {
	currency: Currency;
	rate: ExchangeRate;
};
export const CurrencyConvertedValue: React.FC<CurrencyConversionValueProps> = ({
	currency,
	rate,
}) => {
	const currencyAmount = useSelector(
		(state: RootState) => state.currencyAmount.value
	);

	return (
		<ConversionItem data-testid={`${currency.code}-conversion`} role="listitem">
			<p>{((currencyAmount ?? 0) * 1) / parseFloat(rate.ask)}</p>
			<TickerWrapper>
				<CurrencyImage src={currency.image} alt={currency.code} />
				<CurrencyCode>{currency.code}</CurrencyCode>
			</TickerWrapper>
		</ConversionItem>
	);
};
