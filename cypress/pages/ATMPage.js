class ATMPage {
 visit () {
  cy.visit('https://www.hsbc.co.in/')  
 }

 nearestBranchOrAtmLink() {
    return cy.contains('branch or ATM', { matchCase: false })
  .filter(':visible')
  .first()
  .click()
 }

branchesAtmHeader() {
  return cy.contains('h1, h2, div', 'Branches & ATMs')
}

branchAtmLocatorButton() {
  return cy.contains('Branch & ATM Locator').scrollIntoView()
}

countryInput () {
    return cy.get('input').filter(':visible').first()
}

indiaOption() {
    return cy.contains('India').first()
}

instagramLink() {
    return cy.contains('Instagram').first()
}

facebookLink() {
    return cy.contains('Facebook').first()
}

twitterLink() {
    return cy.contains('Twitter').first()
}

youtubeLink() {
    return cy.contains('Youtube').first()
}

hsbcLogo() {
    return cy.get('img[alt*="HSBC"]').first()
}

privacyLink() {
    return cy.contains('Privacy').first()
}

privacyStatementHeader() {
    return cy.contains('Privacy Statement').first()
 }
}

export default new ATMPage()


