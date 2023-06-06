Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    if (url === '/' ) {
      url = 'http://localhost:3000';
    }
    return originalFn(url, options);
  });