import ATMPage from '../pages/ATMPage.js'

describe('HSBC ATM Flow', () => {
  let data

  before(() => {
    cy.fixture('testData').then((testData) => {
      data = testData
    })

    ATMPage.visit()
  })

  it('Validate HSBC ATM Search Scenario', () => {

    // 1-2
    cy.scrollTo('bottom')

    // 3
   cy.get('a')
  .contains('Find your nearest HSBC branch or ATM')
  .scrollIntoView()
  .click({ force: true })

    // 4
    cy.url().should('include', '/ways-to-bank/branches')

    // 5
    ATMPage.branchesAtmHeader().should('be.visible')

    // 6 (This IS CRITIAL)
    cy.scrollTo(0, 700)
    ATMPage.branchAtmLocatorButton().should('exist').click({ force: true })

    // 7-8 (Now input will exist)
    ATMPage.countryInput().should('be.visible').click({ force: true }).type('India', { force: true })
    ATMPage.indiaOption().should('exist').click({ force: true })

    // 9-11
    cy.log('Country selected successfully')

    // 12-15
    cy.scrollTo('bottom')
    ATMPage.instagramLink().should('exist')
    ATMPage.facebookLink().should('exist')
    ATMPage.twitterLink().should('exist')
    ATMPage.youtubeLink().should('exist')

    // 16-17
    ATMPage.hsbcLogo().click({ force: true })
    cy.title().should('include', 'HSBC')

    // 18-20
    cy.scrollTo('bottom')
    ATMPage.privacyLink().should('exist').click({ force: true })
    ATMPage.privacyStatementHeader().should('exist')
  })
})
