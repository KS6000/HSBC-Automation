class LoginPage {
  visit() {
    cy.visit('https://www.hsbc.co.in/')
  }

  logo() {
  return cy.get('img[alt*="HSBC"]').should('be.visible')
  }

  loginButton() {
  return cy.contains('a, button', 'Log On', { matchCase: false })
  }

  continueButton() {
    return cy.contains('Continue').first()
  }

  usernameField() {
    return cy.get('#username')
  }

  rememberMeCheckbox() {
    return cy.get('input[type="checkbox"]').first()
  }

  tooltipIcon() {
    return cy.contains('?').first()
  }

  closeButton() {
    return cy.contains('Close').first()
  }
}

export default new LoginPage()