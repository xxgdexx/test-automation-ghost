describe('Prueba de inicio de Sesion"', () => {
  it('Debe loggearse', () => {
    cy.visit('http://localhost:2368/ghost/#/signin')
    cy.wait(7000)
    cy.get('#identification').type('correo@gmail.com');
    cy.get('#password').type('contraseña123asfas');
    for(let i = 0; i < 500; i++){
      cy.get('button[data-test-button="sign-in"]').click();
  } 
  });
});
