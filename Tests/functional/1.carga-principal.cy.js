describe('Prueba de la aplicación GHOST', () => {
  it('Debe cargar la página principal correctamente', () => {
    cy.visit('http://localhost:2368/');
    cy.get('h1').should('contain', 'Ghost');
  });



});



