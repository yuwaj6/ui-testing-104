# Note

this currently didn't handle MFA, aka, this test will fail due to 2FA is required on 104 page...

# Set up your env for developing UI automation

- Clone this repo to your local machine
- Install required packages
  `yarn install`

# Run UI automation on your local machine

- edit config file `cypress.config.js` to provide username and password
- Open Cypress console with command `npx cypress open`
- launch Chrome
- Click on login.specs.cy.js to run the login test case
