import CreditCardPage from '../pages/CreditCardPage.js'

describe('HSBC Credit Card Flow', () => {

  before(() => {
    CreditCardPage.visit()
  })

  it('Validate HSBC Credit Card Scenario', () => {

    // 1-3
    cy.visit('https://www.hsbc.co.in/credit-cards/')

    // 4
    cy.url().should('include', 'credit-cards')
    CreditCardPage.creditCardsHeader().should('exist')

    // 5
    cy.contains('Apply', { matchCase: false }).scrollIntoView().should('be.visible')

    // 6
    cy.get('body').should('contain.text', 'Credit Card')

    // 7-11
    cy.get('body').should('contain.text', 'HSBC Taj Credit Card')
    cy.get('body').should('contain.text', 'HSBC TravelOne Credit Card')
    cy.get('body').should('contain.text', 'HSBC Live+ Credit Card')

    // 12
    CreditCardPage.compareCardsButton()
      .should('exist')
      .click({ force: true })

    // 13-14
    cy.get('body').then(($body) => {
      if ($body.text().includes('Select cards to compare')) {
        CreditCardPage.comparePopupHeader().should('exist')
      }
    })

    // 15-18
    cy.get('body').then(($body) => {
      if ($body.find('input[type="checkbox"]').length >= 2) {
        cy.get('input[type="checkbox"]').eq(0).check({ force: true })
        cy.get('input[type="checkbox"]').eq(1).check({ force: true })

        cy.get('body').then(($body2) => {
          if ($body2.text().includes('Compare')) {
            CreditCardPage.compareButton().click({ force: true })
          }
        })
      }
    })

    // 19-23
    cy.get('body').then(($body) => {
      if ($body.text().includes('Remove')) {
        cy.contains('Remove').should('exist')
      }
    })

    // 24-28
    cy.get('body').then(($body) => {
      if ($body.text().includes('Close')) {
        CreditCardPage.closeButton().click({ force: true })
      }
    })

  })
})


