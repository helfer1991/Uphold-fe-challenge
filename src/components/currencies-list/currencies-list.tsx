import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { SupportedCurrency } from '../../redux/slices/supportedCurrencies';
import { RootState } from '../../redux/store';
import { CurrencyConvertedValue } from '../currency-converted-value';
import { Container, EmptyState, ListWrapper, Scrollbar } from './styles';
import { useFetchAllRates } from '../../hooks/useFetchAllRates';
import { CurrencyConvertedValueSkeleton } from '../skeletons/currency-converted-value-skeleton';

type CurrenciesListProps = {
	itemsPerPage: number;
};

const INFINITE_SCROLL_SENSITIVITY_FACTOR = 15;
const THROTTLE_DELAY = 250;

export const CurrenciesList: React.FC<CurrenciesListProps> = ({
	itemsPerPage,
}) => {
	const [page, setPage] = useState<number>(1);
	const listInnerRef = useRef<HTMLDivElement>(null);

	const supportedCurrencies = useSelector(
		(state: RootState) => state.supportedCurrencies.currencies
	);

	const currencyAmount = useSelector(
		(state: RootState) => state.currencyAmount.value
	);
	const selectedCurrency = useSelector(
		(state: RootState) => state.selectedCurrency.currency
	);

	const conversionRates = useSelector(
		(state: RootState) => state.exchangeRates.rates[selectedCurrency.code]
	);

	const { isLoading } = useFetchAllRates(selectedCurrency);

	const getCurrencyRate = (currency: SupportedCurrency) => {
		const exchangePair = [
			`${currency.code}-${selectedCurrency.code}`,
			`${currency.code}${selectedCurrency.code}`,
		];
		return conversionRates?.find((rate) => exchangePair.includes(rate.pair));
	};

	useEffect(() => {
		setPage(1);
	}, [selectedCurrency]);

	const handleInfiniteLoading = (e: React.UIEvent<HTMLDivElement>) => {
		const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;

		if (handleInfiniteLoading.timer) {
			clearTimeout(handleInfiniteLoading.timer);
		}

		handleInfiniteLoading.timer = setTimeout(() => {
			const bottom =
				scrollHeight - scrollTop - clientHeight <
				INFINITE_SCROLL_SENSITIVITY_FACTOR;

			if (bottom) {
				setPage((prev) => prev + 1);
			}
		}, THROTTLE_DELAY);
	};

	// Defining the timer property on the function
	handleInfiniteLoading.timer = 0 as unknown as NodeJS.Timeout;

	const isListFull = useMemo(
		() => page * itemsPerPage > supportedCurrencies.length,
		[page]
	);

	if (isLoading) {
		return <CurrencyConvertedValueSkeleton />;
	}

	return (
		<Container>
			{supportedCurrencies.length > 0 && !!currencyAmount ? (
				<ListWrapper>
					<Scrollbar
						role="list"
						onScroll={handleInfiniteLoading}
						ref={listInnerRef}
					>
						{supportedCurrencies
							.slice(0, page * itemsPerPage)
							.map((currency, index) => {
								const rate = getCurrencyRate(currency);
								return (
									rate && (
										<CurrencyConvertedValue
											key={`${currency.code}-${index}`}
											rate={rate}
											currency={currency}
										/>
									)
								);
							})}
						{!isListFull && <CurrencyConvertedValueSkeleton />}
					</Scrollbar>
				</ListWrapper>
			) : (
				<EmptyState>Enter an amount to check the rates.</EmptyState>
			)}
		</Container>
	);
};
