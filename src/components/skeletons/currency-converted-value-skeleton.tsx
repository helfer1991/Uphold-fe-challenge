import {
	CurrencyConvertedValueSkeletonContainer,
	LoadingBar,
	LoadingStateContainer,
	LoadingIcon,
} from './styles';

export const CurrencyConvertedValueSkeleton = () => (
	<CurrencyConvertedValueSkeletonContainer data-testid="conversion-loading-skeleton">
		<LoadingBar />
		<LoadingStateContainer>
			<div data-testid="loading-state">
				<LoadingIcon />
			</div>
		</LoadingStateContainer>
	</CurrencyConvertedValueSkeletonContainer>
);
