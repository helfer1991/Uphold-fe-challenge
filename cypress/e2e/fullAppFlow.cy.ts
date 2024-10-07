/// <reference types="Cypress"/>
import {
	BTCMock,
	USDMock,
	mockSupportedCurrencies,
} from '../../src/mocks/mocks';

describe('E2E', () => {
	it('Completes the full aplication flow', () => {
		cy.intercept(
			{
				method: 'GET',
				url: 'http://api-sandbox.uphold.com/v0/ticker/USD',
			},
			USDMock
		).as('getUSDRates');
		cy.intercept(
			{
				method: 'GET',
				url: 'http://api-sandbox.uphold.com/v0/ticker/BTC',
			},
			BTCMock
		).as('getBTCRates');
		cy.intercept(
			{ url: 'http://api-sandbox.uphold.com/**', middleware: true },
			(req) => {
				req.on('response', (res) => {
					res.setDelay(1000);
				});
			}
		);
		cy.intercept(
			{
				method: 'GET',
				url: '/v0/assets',
			},
			mockSupportedCurrencies
		).as('getSupportedCurrencies');

		cy.visit('http://localhost:3000/');

		cy.get('input').should('be.visible');
		cy.get('button').should('be.visible').contains('USD');
		cy.contains('Enter an amount to check the rates.').should('be.visible');

		cy.get('input').type('100').should('have.value', '100');

		cy.contains('BAT').should('be.visible');

		cy.get('[data-testid="BAT-conversion"]').contains(1000);
		cy.get('input').clear().type('10');
		cy.get('[data-testid="BAT-conversion"]').contains(1000);
		cy.get('[data-testid="BAT-conversion"]').contains(100);
	});
});
