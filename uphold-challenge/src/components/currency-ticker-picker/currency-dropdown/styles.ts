import styled from 'styled-components';

export const DropdownMenu = styled.div`
	background-color: white;
	border-radius: 0.5rem;
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	height: 210px;
	margin-top: 0.25rem;
	overflow: auto;
	position: absolute;
	right: 0;
	width: 10rem;
	z-index: 40;
	&.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	&.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
`;

export const ScrollbarContainer = styled.div`
	height: 100%;
	overflow-y: scroll;
	scrollbar-color: #374151 #d1d5db;
	scrollbar-width: thin;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #374151;
		border-radius: 9999px;
	}

	&::-webkit-scrollbar-track {
		background-color: #d1d5db;
		border-radius: 9999px;
	}
`;

export const DropdownItem = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	margin: 0.25rem;
	padding: 0.5rem;
	border-radius: 0.375rem;

	&:hover {
		background-color: #d1d5db;
	}
`;

export const CurrencyCode = styled.span`
	margin-left: 0.75rem;
`;
