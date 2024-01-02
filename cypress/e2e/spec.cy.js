describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should recognize and interact with form inputs and make a reservation', () => {
  cy.get('input[name="name"]').type('Joey Tomato').should('have.value', 'Joey Tomato');
  cy.get('input[name="date"]').type('3/11/2122').should('have.value', '3/11/2122');
  cy.get('input[name="time"]').type('12:00').should('have.value', '12:00');
  cy.get('input[name="guests"]').type('5').should('have.value', '5');
  cy.get('button').contains('Make Reservation').click();
  })

  it('should delete reservation when cancel is clicked', () => {
    cy.get('.card').should('have.length.greaterThan', 0);
    cy.get('.card button').click(); 
    cy.window().its('deleteRes').should('delete')
    cy.get('.card').should('not.exist');
    });
  
})

