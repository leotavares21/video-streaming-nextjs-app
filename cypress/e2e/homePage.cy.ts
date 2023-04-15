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
  });

  it('Checks if the video list has at least one child', () => {
    cy.visit('/');
    cy.get('[data-testid="videos-container"]').children().should('exist');
  });

  it('Check if the tab content exists after the click', () => {
    cy.get('[data-testid="tab-button2"]').click();
    cy.get('[data-testid="subscriptions-container"]').should('exist');
    cy.get('[data-testid="tab-button1"]').click();
    cy.get('[data-testid="videos-container"]').children().should('exist');
  });
});
