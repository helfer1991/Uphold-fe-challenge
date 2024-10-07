import styled from 'styled-components';
import { FaAngleUp } from 'react-icons/fa';

export const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
`;

export const ListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 80vh;
	overflow: auto;
	width: 100%;
	position: relative;
`;

export const Scrollbar = styled.div`
	height: 100%;
	overflow-y: scroll;
	scrollbar-color: #4b5563 #d1d5db;
	scrollbar-width: thin;
	width: 100%;
`;

export const EmptyState = styled.h6`
	color: #8494a5;
	font-size: 24px;
	margin-top: 24px;
`;

export const Wrapper = styled.div`
	display: block;
	opacity: 0.4;
`;

export const ScrollTopButton = styled(FaAngleUp)`
	bottom: 10px;
	cursor: pointer;
	display: block;
	height: 30px;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 30px;
	z-index: 10;
`;
