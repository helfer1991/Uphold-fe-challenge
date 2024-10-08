import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import type { Currency } from '../../redux/slices/supportedCurrencies';
import type { ExchangeRate } from '../../redux/slices/exchangeRate';
import { RootState } from '../../redux/store';
import { CurrencyConvertedValue } from '../currency-converted-value';
import {
	Container,
	EmptyState,
	ListWrapper,
	Scrollbar,
	ScrollTopButton,
} from './styles';
import { useFetchAllRates } from '../../hooks/useFetchAllRates';
import { CurrencyConvertedValueSkeleton } from '../skeletons/currency-converted-value-skeleton';
import { getCurrencyRate } from '../../utils/getCurrencyRate';

type CurrenciesListProps = {
	itemsPerPage: number;
};

const INFINITE_SCROLL_SENSITIVITY_FACTOR = 15;
const THROTTLE_DELAY = 250;
const SHOW_SCROLL_TOP_THRESHOLD = 500;

export const CurrenciesList: React.FC<CurrenciesListProps> = ({
	itemsPerPage,
}) => {
	const [page, setPage] = useState<number>(1);
	const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
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

	const { isLoading, isError } = useFetchAllRates(selectedCurrency);

	useEffect(() => {
		setPage(1);
	}, [selectedCurrency]);

	const handleInfiniteLoading = (e: React.UIEvent<HTMLDivElement>) => {
		const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
		const windowScrollY = window.scrollY || window.pageYOffset;

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

		setShowScrollTop(
			scrollTop > SHOW_SCROLL_TOP_THRESHOLD ||
				windowScrollY > SHOW_SCROLL_TOP_THRESHOLD
		);
	};

	useEffect(() => {
		return () => {
			if (handleInfiniteLoading.timer) {
				clearTimeout(handleInfiniteLoading.timer);
			}
		};
	}, []);

	handleInfiniteLoading.timer = 0 as unknown as NodeJS.Timeout;

	const scrollToTop = () => {
		listInnerRef.current?.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const isListFull = useMemo(
		() => page * itemsPerPage > supportedCurrencies.length,
		[page]
	);

	if (isLoading) {
		return <CurrencyConvertedValueSkeleton />;
	}

	if (isError) {
		return <p>An error happened, please try again</p>;
	}

	return (
		<Container>
			{supportedCurrencies.length > 0 && !!currencyAmount ? (
				<ListWrapper>
					<Scrollbar
						role="list"
						onScroll={handleInfiniteLoading}
						ref={listInnerRef}>
						{supportedCurrencies
							.slice(0, page * itemsPerPage)
							.map((currency, index) => {
								const rate = getCurrencyRate(
									currency,
									selectedCurrency,
									conversionRates
								);
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
						{showScrollTop && (
							<ScrollTopButton
								aria-label="Scroll to top"
								onClick={scrollToTop}
							/>
						)}
					</Scrollbar>
				</ListWrapper>
			) : (
				<EmptyState>Enter an amount to check the rates.</EmptyState>
			)}
		</Container>
	);
};
