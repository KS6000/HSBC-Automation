Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes('Failed to read a named property') ||
    err.message.includes('Blocked a frame with origin') ||
    err.message.includes('cross-origin frame') ||
    err.message.includes('Granite')
  ) {
    return false
  }
})