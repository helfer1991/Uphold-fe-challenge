import { useSelector } from 'react-redux';
import type { ExchangeRate } from '../../redux/slices/exchangeRate';
import type { SupportedCurrency } from '../../redux/slices/supportedCurrencies';
import { RootState } from '../../redux/store';
import { CurrencyImage } from '../currency-image/currency-image';
import { ConversionItem, TickerWrapper, CurrencyCode } from './styles';

type CurrencyConversionValueProps = {
	currency: SupportedCurrency;
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
			<div>{((currencyAmount ?? 0) * 1) / parseFloat(rate.ask)}</div>
			<TickerWrapper>
				<CurrencyImage src={currency.image} alt={currency.code} />
				<CurrencyCode>{currency.code}</CurrencyCode>
			</TickerWrapper>
		</ConversionItem>
	);
};
