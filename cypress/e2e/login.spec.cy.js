describe('login', () => {
  it('login should pass with correct username and password', () => {
    cy.visit('/')

    // workaround to dismiss welcome foreigners pop-up
    cy.get(".jb_icon_delete").click()

    cy.log("submit login form")
    cy.get("a").contains("登入").click()
    cy.get("#username").type(Cypress.env('username'))
    cy.get("#password").type(Cypress.env('password'))
    cy.get("#submitBtn").click()

    // TODO: there's an unexpected 2FA here
    // FIXME
    cy.log("Click 會員中心")
    cy.get("#name_link").click()
    cy.get("a").contains("My104會員中心").click()

    // assert user name exists on 會員中心
    cy.log("確認有進入會員中心")
    cy.url().should("include", "pda.104.com.tw");
    cy.get(".personal-dashboard__info").should("contain", Cypress.env('displayName'));
  })
})