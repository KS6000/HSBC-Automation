class CreditCardPage {
  visit() {
    cy.visit('https://www.hsbc.co.in/')
  }

  bankingmenu() {
    return cy.contains('banking').first()
  }

  creditCardsLink() {
    return cy.contains('Credit Cards').first()
  }

  creditCardsHeader() {
    return cy.contains('Credit Cards').first()
  }

  applyNowButton() {
    return cy.contains('Apply now').first()
  }

  cardsSection() {
    return cy.get('body')
  }

  comparePopupHeader() {
    return cy.contains('Select cards to compare').first()
  }

  closeButton() {
    return cy.contains('Close').first()
  }

  compareButton() {
    return cy.contains('Compare').first()
  }

  addCardsLink() {
    return cy.contains('Add cards').first()
  }
}

export default new CreditCardPage()
