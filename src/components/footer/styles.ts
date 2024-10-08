import styled from 'styled-components';

export const FooterStyled = styled.footer`
	display: flex;
	flex-direction: column;
	width: 80%;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: block;
	}
`;

export const QuickLinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-top: 1px solid #e4eaf2;
	padding-top: 60px;
	justify-content: space-between;
	margin-block-start: 3em;
	padding-bottom: 60px;

	ul li {
		padding: 6px 0;
		list-style-type: none;
	}

	.uphold-footer-logo img {
		height: 40px;
		width: 85px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-column-gap: 30px;
	}
`;

export const Container = styled.div`
	border-top: 1px solid #e4eaf2;
	padding-top: 60px;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-column-gap: 30px;
	justify-content: space-between;
	margin-block-start: 3em;
	padding-bottom: 60px;
`;

export const UpholdLogo = styled.img`
	height: 40px;
	width: 84px;
`;

export const FooterHeader = styled.h6`
	color: #3c4a5b;
	margin-block-end: 2.33em;
	font-size: 16px;
	font-weight: 500;
`;

export const DropwdownStoresContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 120px;

	a {
		padding: 0 16px;

		& img {
			transition: transform 0.5s;
			&:hover {
				transform: scale(1.25);
			}
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		text-align: right;
	}
`;

export const AppStoresWrapper = styled.div`
	display: flex;
	margin-bottom: 16px;
`;

export const LanguagesContainer = styled.select`
	border: 1px solid #7c8b9c;
	border-radius: 8px;
	color: #7c8b9c;
	font-weight: 500;
	font-size: 12px;
	margin-top: 8px;
	padding: 4px 12px;
	border-color: #e4eaf2;
`;

export const StyledAnchor = styled.a`
	color: #8494a5;
	text-decoration: none;

	&:hover {
		border-bottom-color: #65d27b;
		text-decoration: none;
	}
`;

export const UpholdDetailsAnchor = styled.a`
	border-bottom: 1px solid #d8f3db;
	color: #8494a5;
	padding-bottom: 3px;
	text-decoration: none;

	&:hover {
		border-bottom-color: #65d27b;
		text-decoration: none;
	}
`;
