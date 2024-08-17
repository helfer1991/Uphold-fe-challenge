import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSupportedCurrencies } from '../redux/slices/supportedCurrencies';
import type { SupportedCurrency } from '../redux/slices/supportedCurrencies';

const PAGE_SIZE = 150;

export const useFetchListOfCurrencies = () => {
	const [listOfCurrencies, setListOfCurrencies] = useState<SupportedCurrency[]>(
		[]
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchSupportedCurrencies = async () => {
			const fullData: SupportedCurrency[] = [];
			let lastAmountOfCurrencies = PAGE_SIZE,
				index = 0;

			while (lastAmountOfCurrencies >= PAGE_SIZE) {
				try {
					const res = await fetch('/v0/assets', {
						headers: {
							referrerPolicy: 'unsafe-url',
							range: `items=${index * PAGE_SIZE}-${
								index * PAGE_SIZE + (PAGE_SIZE - 1)
							}`,
						},
					});
					const data = await res.json();
					fullData.push(...data);
					lastAmountOfCurrencies = data.length;
					index++;
				} catch (e) {
					break;
				}
			}

			setListOfCurrencies(fullData);
			dispatch(setSupportedCurrencies(fullData));
		};

		fetchSupportedCurrencies();
	}, [dispatch]);

	return listOfCurrencies;
};
