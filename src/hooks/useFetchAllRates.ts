import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeRates } from '../redux/slices/exchangeRate';
import { sdk } from '../utils/sdk';
import type { Currency } from '../redux/slices/supportedCurrencies';

export const useFetchAllRates = (selectedCurrency: Currency | null) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isError, setIsError] = useState<boolean>(false);
	const dispatch = useDispatch();

	const fetchRates = async (currencyCode: string) => {
		try {
			const tickers: any[] = await sdk.getTicker(currencyCode);
			dispatch(
				setExchangeRates({
					key: currencyCode,
					data: tickers.filter((ticker) => ticker.currency === currencyCode),
				})
			);
		} catch (error) {
			console.error('Error fetching exchange rates:', error);
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (selectedCurrency) {
			fetchRates(selectedCurrency.code);
		}
	}, [selectedCurrency]);

	return { isLoading, isError };
};
