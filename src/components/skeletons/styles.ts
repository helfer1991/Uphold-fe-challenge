import styled, { keyframes } from 'styled-components';

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const CurrencyConvertedValueSkeletonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const LoadingBar = styled.div`
	height: 12px;
	width: 48px;
	margin-left: 12px;
	background-color: #4b5563;
	border-radius: 4px;
	animation: ${pulse} 1.5s infinite;
`;

export const LoadingStateContainer = styled.div`
	display: flex;
	padding: 8px 12px;
	align-items: center;
	font-size: 16px;
`;

export const LoadingIcon = styled.div`
	border-radius: 9999px;
	background-color: #4b5563;
	height: 40px;
	width: 40px;
	animation: ${pulse} 1.5s infinite;
	width: 10rem;
`;
