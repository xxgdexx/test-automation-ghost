describe('Prueba de inicio de Sesion"', () => {
    it('Debe loggearse', () => {
      cy.visit('http://localhost:2368/');
      cy.get('a.gh-head-link.gh-portal-close[data-portal="signin"]').click()
      cy.visit('#/portal/signin');
    //   cy.get('input[data-test-input="input-email"]').type('wilmer@upc.edu.pe');
    });

 

  });
  