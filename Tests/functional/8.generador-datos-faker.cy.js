import {faker} from '@faker-js/faker'
describe( `Filling example form`, function() {
    it(`Visits jotform and fills an example form`, function() { 
        cy.visit('http://localhost:2368/ghost/#/settings/staff/afasfasf')
        cy.get('#identification').type('u202124343@upc.edu.pe');
        cy.get('#password').type('contraseña12');
        cy.get('button[data-test-button="sign-in"]').click();
        for(let i = 0; i < 10; i++){
            cy.wait(1000)
            cy.get('#user-name').scrollIntoView().focus().clear().type(faker.address.zipCode())
            cy.get('#user-slug').scrollIntoView().focus().clear().type(faker.internet.userName());
            cy.get('#user-email').scrollIntoView().focus().clear().type(faker.internet.email());
            cy.get('#user-location').scrollIntoView().focus().clear().type(faker.address.city());
            cy.get('#user-website').scrollIntoView().focus().clear().type(faker.internet.url());
            cy.get('#user-bio').scrollIntoView().focus().clear().type(faker.lorem.paragraph());
            cy.get('#user-password-old').scrollIntoView().focus().clear().type('contraseña12');
            cy.get('#user-password-new').scrollIntoView().focus().clear().type('contraseña12');
            cy.get('#user-new-password-verification').scrollIntoView().focus().clear().type('contraseña12');
            cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click();
            cy.get('span[data-test-task-button-state="idle"]').contains('Save').click();
        }
        cy.get('#user-email').scrollIntoView().focus().clear().type('u202124343@upc.edu.pe');
        cy.get('#user-password-old').scrollIntoView().focus().clear().type('contraseña12');
        cy.get('#user-password-new').scrollIntoView().focus().clear().type('contraseña12');
        cy.get('#user-new-password-verification').scrollIntoView().focus().clear().type('contraseña12');
        cy.get('span[data-test-task-button-state="idle"]').contains('Change Password').click();
        cy.get('span[data-test-task-button-state="idle"]').contains('Save').click();
    })
})
