Requirements:
Node.js
NPM

`npm install`

Install Chromedriver from http://chromedriver.storage.googleapis.com/index.html
Be sure to add path to chromedriver file to your PATH variable

Supported sites are configured in sitesConfig.js. Nomenclature be haaaard...

Copy or rename users_sample.json to users.json and add your details, including the path to your CV - do NOT change the require() argument in sitesConfig.js - users.json is ignored by Git, so will never be uploaded to a repo, exposing your security info to the world.

As you will bee keeping these passwords in a plain text file, it is HIGHLY recommended that you do NOT reuse any of the passwords for the jobsites, and you should encrypt your disk. Support for password managers obviating the need for these details to be stored is planned for the future.

Run tests - will submit CVs to sites in provided scripts. Tests will inform you of failures in the event of UI changes - screenshots will be dumped in /screenshots
`node_modules/.bin/cucumber-js`

Cucumber support files borrowed from
https://github.com/Matt-B/cucumber-js-selenium-webdriver-example