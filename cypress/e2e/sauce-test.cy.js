describe('template spec', () => {
  it('valided error text', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("#user-name").type("locked_out_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get("div > form > div.error-message-container.error > h3")
    .should('have.text','Epic sadface: Sorry, this user has been locked out.')

  })
  it('verification the car', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.get("#add-to-cart-sauce-labs-backpack").click()
    cy.get("#add-to-cart-sauce-labs-bike-light").click()
    cy.get("#shopping_cart_container").click()
    cy.get("#checkout").click()
    cy.get("#first-name").type("deivid")
    cy.get("#last-name").type("estupinan")
    cy.get("#postal-code").type("11201")
    cy.get("#continue").click()
    cy.get("#finish").click()
    cy.get("#checkout_complete_container > h2").should('have.text','Thank you for your order!')
    cy.get("#back-to-products").click()
      
  

  })
})
