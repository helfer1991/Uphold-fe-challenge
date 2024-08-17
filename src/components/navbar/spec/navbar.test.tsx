import { render, screen, within } from '@testing-library/react';
import { Navbar } from '../navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar component', () => {
	it('renders 3 navigation links', () => {
		render(<Navbar />);

		expect(screen.getByText('Personal')).toBeInTheDocument();
		expect(screen.getByText('Business')).toBeInTheDocument();
		expect(screen.getByText('Partners')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
	});

	it('renders a logo', () => {
		render(<Navbar />);

		const logo = screen.getByRole('img');

		expect(logo).toBeVisible();
		expect(logo).toHaveAttribute('alt', 'logo');
		expect(logo).toHaveAttribute('src', '/assets/logo.svg');
	});

	it('renders a Login button', () => {
		render(<Navbar />);

		const button = screen.getByRole('button', { name: 'Login' });
		expect(button).toBeVisible();
		expect(within(button).getByText('Login')).toBeInTheDocument();
	});
});
