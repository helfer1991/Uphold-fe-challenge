import { useEffect, useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { CurrencyImage } from '../currency-image/currency-image';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Container, StyledButton, CurrencyCode } from './styles';
import { CurrencyDropdown } from './currency-dropdown';

export const CurrencyTickerPicker = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const selectedCurrency = useSelector(
		(state: RootState) => state.selectedCurrency.currency
	);

	const currenciesListDropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const checkIfClickedOutside = (e: MouseEvent) => {
			if (
				currenciesListDropdownRef.current &&
				!currenciesListDropdownRef.current.contains(e?.target as Node) &&
				isOpen
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('click', checkIfClickedOutside);
		return () => {
			document.removeEventListener('click', checkIfClickedOutside);
		};
	}, [isOpen]);

	const toggleDropdown = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			setIsOpen((prevIsOpen) => !prevIsOpen);
			e.stopPropagation();
		},
		[]
	);

	return (
		<Container>
			<StyledButton
				type="button"
				role="button"
				aria-haspopup="true"
				aria-expanded={isOpen}
				onClick={toggleDropdown}
			>
				<CurrencyImage src={selectedCurrency.image} />
				<CurrencyCode>{selectedCurrency.code}</CurrencyCode>
				{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</StyledButton>
			{isOpen && (
				<CurrencyDropdown
					currenciesListDropdownRef={currenciesListDropdownRef}
					setIsOpen={setIsOpen}
				/>
			)}
		</Container>
	);
};
