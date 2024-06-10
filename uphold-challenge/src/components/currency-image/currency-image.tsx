import { useCallback } from 'react';

type CurrencyImageProps = {
	src: string;
	alt?: string;
};

export const CurrencyImage: React.FC<CurrencyImageProps> = ({
	src,
	alt = 'currency image',
}) => {
	const handleSrcError = useCallback(
		({ currentTarget }: React.SyntheticEvent<HTMLImageElement, Event>) => {
			currentTarget.onerror = null;
			currentTarget.src = '/assets/Crypto.png';
		},
		[]
	);

	return (
		<img width={40} height={40} src={src} onError={handleSrcError} alt={alt} />
	);
};
