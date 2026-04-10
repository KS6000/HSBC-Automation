import LoginPage from '../pages/LoginPage.js'

describe('HSBC Login Flow', () => {
  let data

  before(() => {
   cy.fixture('testData').then((testData) => {
    data = testData
    LoginPage.visit()
   })
  })

  it('Validate HSBC Login Scenario', () => {

    // 1-3
    LoginPage.logo().should('be.visible')
    cy.title().should('include', 'HSBC')

    // 4
    LoginPage.loginButton().click()

    // 5
    cy.contains('Log On').should('be.visible')

    // 6-7
    LoginPage.continueButton().should('be.visible')
    LoginPage.continueButton().should('be.disabled')

    // 8-9
    LoginPage.usernameField().type(data.email)
    LoginPage.continueButton().should('not.be.disabled')

    // 10
    LoginPage.rememberMeCheckbox().should('not.be.checked')

    // 11-12
    LoginPage.tooltipIcon().should('be.visible').click({ force: true })

    // 13-15
    cy.url({ timeout: 10000 }).should('include', 'online-banking')
    cy.contains('Register for online banking', { timeout: 10000 }).should('be.visible')

    cy.screenshot('TC001_Login_Valid_User')

  })
})

