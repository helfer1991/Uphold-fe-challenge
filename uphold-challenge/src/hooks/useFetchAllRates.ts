import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setExchangeRates } from '../redux/slices/exchangeRate';
import { sdk } from '../utils/sdk';
import type { SupportedCurrency } from '../redux/slices/supportedCurrencies';

export const useFetchAllRates = (
	selectedCurrency: SupportedCurrency | null
) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
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
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (selectedCurrency) {
			fetchRates(selectedCurrency.code);
		}
	}, [selectedCurrency]);

	return { isLoading };
};
