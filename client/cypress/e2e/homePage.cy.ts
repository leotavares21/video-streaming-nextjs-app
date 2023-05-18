describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check if the tabs toggle classes after click', () => {
    cy.get('[data-testid="tab-button1"]').should('have.class', 'text-primary');

    cy.get('[data-testid="tab-button2"]')
      .click()
      .should('have.class', 'text-primary');

    cy.get('[data-testid="tab-button1"]').should(
      'not.have.class',
      'text-primary'
    );

    cy.get('[data-testid="tab-button3"]')
      .click()
      .should('have.class', 'text-primary');

    cy.get('[data-testid="tab-button1"]').should(
      'not.have.class',
      'text-primary'
    );

    cy.get('[data-testid="tab-button2"]').should(
      'not.have.class',
      'text-primary'
    );
  });

  it('Check if the tab content exists after the click', () => {
    cy.get('[data-testid="tab-button1"]').click();
    cy.get('[data-testid="videos-thumbs"]').should('exist');
    cy.get('[data-testid="tab-button2"]').click();
    cy.get('[data-testid="videos-thumbs"]').should('exist');
    cy.get('[data-testid="tab-button3"]').click();
    cy.get('[data-testid="profile-preview"]').should('exist');
  });
});
