describe('Crear publicacion', () => {
    it('Debe escribir "wilmer" en el campo de entrada', () => {
      cy.visit('http://localhost:2368/ghost');
      cy.get('#identification').type('wil@gmail.com');
      cy.get('#password').type('Wil1234567890');
      cy.get('button[data-test-button="sign-in"]').click(); // Seleccionando por atributo
      cy.visit('http://localhost:2368/ghost/#/posts/');
    });
  });



 