import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCurrency } from '../../../redux/slices/selectedCurrency';
import { RootState } from '../../../redux/store';
import { CurrencyImage } from '../../currency-image';
import type { SupportedCurrency } from '../../../redux/slices/supportedCurrencies';
import {
	DropdownMenu,
	ScrollbarContainer,
	DropdownItem,
	CurrencyCode,
} from './styles';

type CurrencyDropdown = {
	setIsOpen: (value: boolean) => void;
	currenciesListDropdownRef: React.RefObject<HTMLDivElement>;
};

export const CurrencyDropdown: React.FC<CurrencyDropdown> = ({
	setIsOpen,
	currenciesListDropdownRef,
}) => {
	const supportedCurrencies = useSelector(
		(state: RootState) => state.supportedCurrencies.currencies
	);

	const selectedCurrency = useSelector(
		(state: RootState) => state.selectedCurrency.currency
	);

	const dispatch = useDispatch();

	const handleSelect = (currency: SupportedCurrency) => {
		dispatch(setSelectedCurrency(currency));
		setIsOpen(false);
	};

	return (
		<DropdownMenu
			ref={currenciesListDropdownRef}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="options-menu"
		>
			<ScrollbarContainer>
				{supportedCurrencies
					.filter((currency) => currency.code !== selectedCurrency.code)
					.map((currency, index) => (
						<DropdownItem
							data-testid={`${currency.code}-selector`}
							key={`${currency.code}-${index}`}
							role="menuitem"
							onClick={() => handleSelect(currency)}
						>
							<CurrencyImage src={currency.image} />
							<CurrencyCode>{currency.code}</CurrencyCode>
						</DropdownItem>
					))}
			</ScrollbarContainer>
		</DropdownMenu>
	);
};
