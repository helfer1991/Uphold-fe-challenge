import type { Currency } from '../redux/slices/supportedCurrencies';
import type { ExchangeRate } from '../redux/slices/exchangeRate';

export const getCurrencyRate = (
	currency: Currency,
	selectedCurrency: Currency,
	conversionRates: ExchangeRate[]
) => {
	const exchangePair = [
		`${currency.code}-${selectedCurrency.code}`,
		`${currency.code}${selectedCurrency.code}`,
	];
	return conversionRates?.find((rate) => exchangePair.includes(rate.pair));
};
