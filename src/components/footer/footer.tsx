import {
	FooterStyled,
	QuickLinksContainer,
	FooterHeader,
	UpholdLogo,
	DropwdownStoresContainer,
	AppStoresWrapper,
	LanguagesContainer,
	UpholdDetailsAnchor,
	StyledAnchor,
} from './styles';

export const Footer: React.FC = () => (
	<FooterStyled>
		<QuickLinksContainer>
			<UpholdLogo
				alt="uphold-logo"
				loading="lazy"
				src="/assets/small-logo.svg"
			/>

			<div className="products">
				<FooterHeader>Products</FooterHeader>
				<nav>
					<ul>
						<li>
							<StyledAnchor href="/individuals">Consumers</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/businesses">Business</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/partners">Partners</StyledAnchor>
						</li>
					</ul>
				</nav>
			</div>

			<div className="company">
				<FooterHeader>Company</FooterHeader>
				<nav>
					<ul>
						<li>
							<StyledAnchor href="/about-us/company">About</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/careers">Careers</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/press-media">Press</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/blog">Blog</StyledAnchor>
						</li>
					</ul>
				</nav>
			</div>

			<div className="help">
				<FooterHeader>Help</FooterHeader>
				<nav>
					<ul>
						<li>
							<StyledAnchor href="/faq-support">FAQ & Support</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/status">Platform Status</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/criptionary">Criptionary</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/pricing">Pricing</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/legal">Legal</StyledAnchor>
						</li>
					</ul>
				</nav>
			</div>

			<div className="legal">
				<FooterHeader>Social</FooterHeader>
				<nav>
					<ul>
						<li>
							<StyledAnchor href="/facebook">Facebook</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/twitter">Twitter</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/instagram">Instagram</StyledAnchor>
						</li>
						<li>
							<StyledAnchor href="/linkedin">Linkedin</StyledAnchor>
						</li>
					</ul>
				</nav>
			</div>

			<DropwdownStoresContainer>
				<AppStoresWrapper>
					<UpholdDetailsAnchor
						target="_blank"
						rel="noopener noreferrer"
						href="https://apps.apple.com/us/app/uphold-buy-digital-currencies/id1101145849"
					>
						<img alt="" loading="lazy" src="/assets/appstore.svg" />
					</UpholdDetailsAnchor>
					<UpholdDetailsAnchor
						target="_blank"
						rel="noopener noreferrer"
						href="https://play.google.com/store/apps/details?id=com.uphold.wallet"
					>
						<img alt="" src="/assets/playstore.svg" />
					</UpholdDetailsAnchor>
				</AppStoresWrapper>

				<LanguagesContainer name="languages">
					<option value="en" selected>
						English US
					</option>
					<option value="en-us">English USA</option>
					<option value="en-gb">English GB</option>
					<option value="es-ar">Spanish AR</option>
					<option value="es-cl">Spanish CL</option>
					<option value="es">Spanish</option>
					<option value="pt-pt">Portuguese PT</option>
					<option value="it-it">Italian IT</option>
					<option value="tr">Turkish</option>
				</LanguagesContainer>
			</DropwdownStoresContainer>
		</QuickLinksContainer>
	</FooterStyled>
);
