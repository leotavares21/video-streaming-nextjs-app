describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check if the tabs toggle classes after click', () => {
    cy.get('[data-testid="tab-button1"]').should(
      'have.class',
      'text-secondary'
    );

    cy.get('[data-testid="tab-button2"]')
      .click()
      .should('have.class', 'text-secondary');

    cy.get('[data-testid="tab-button1"]').should(
      'not.have.class',
      'text-secondary'
    );

    cy.get('[data-testid="tab-button3"]')
      .click()
      .should('have.class', 'text-secondary');

    cy.get('[data-testid="tab-button1"]').should(
      'not.have.class',
      'text-secondary'
    );

    cy.get('[data-testid="tab-button2"]').should(
      'not.have.class',
      'text-secondary'
    );
  });

  it('Check if the tab content exists after the click', () => {
    cy.get('[data-testid="tab-button1"]').click();
    cy.get('[data-testid="lives-container"]').should('exist');
    cy.get('[data-testid="tab-button2"]').click();
    cy.get('[data-testid="foryou-container"]').should('exist');
    cy.get('[data-testid="tab-button3"]').click();
    cy.get('[data-testid="following-container"]').should('exist');
  });

  it('Checks if sign-in button sends to sign-in route', () => {
    cy.get('[data-testid="btn-sign-in"]').should('be.visible').click();
    cy.url().should('include', '/auth/sign-in');
  });
});
