class CreditCardPage {
  visit() {
    cy.visit('https://www.hsbc.co.in/')
  }

  creditCardsHeader() {
  return cy.contains('h1, h2, div', 'Credit cards')
  }

  applyNowButton() {
    return cy.get('body').contains('Apply', {matchcase: false })
  }

  compareCardsButton() {
    return cy.contains('Compare cards').first()
  }

  comparePopupHeader() {
    return cy.contains('Select cards to compare').first()
  }

  compareButton() {
    return cy.contains('Compare').first()
  }

  closeButton() {
    return cy.contains('Close').first()
  }
}

export default new CreditCardPage()
