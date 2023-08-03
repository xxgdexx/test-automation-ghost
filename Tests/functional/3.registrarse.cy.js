describe('Prueba de inicio de Sesion"', () => {
    it('Debe loggearse', () => {
      cy.visit('http://localhost:2368/');
      cy.get('a.gh-head-button.gh-portal-close[data-portal="signup"]').click()
      cy.visit('#/portal/signup');
    //   cy.get('input[data-test-input="input-email"]').type('wilmer@upc.edu.pe');
    });

 

  });
  