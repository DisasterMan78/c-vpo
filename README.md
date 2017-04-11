# C-VPO - The CV Post Office
## Automated Resumé Submission Engine

### Requirements

Node.js

NPM

Install Chromedriver from http://chromedriver.storage.googleapis.com/index.html
Be sure to add path to chromedriver file to your PATH variable

Clone the repo, then from the project directory run

`$ npm install`

### Config

Supported sites are configured in sites.json - Nomenclature be haaaard...

Copy or rename users_sample.json to users.json and add your details, including the path to your CV - users.json is ignored by Git, so will never be uploaded to a repo, exposing your security info to the world.

As you will bee keeping these passwords in a plain text file, it is HIGHLY recommended that you do NOT reuse any of the passwords for the jobsites, and you should encrypt your disk. Support for password managers obviating the need for these details to be stored is planned for the future.

### Run

Will submit CV to sites in provided scripts. Tests will inform you of failures in the event of UI changes - screenshots will be dumped in /screenshots

`$ node_modules/.bin/cucumber-js`

Sometimes a test will fail because the site isn't responding - to re-run a single test:

`$ node_modules/.bin/cucumber-js features/jobsite.co.uk.feature`


Cucumber support files lifted from
https://github.com/Matt-B/cucumber-js-selenium-webdriver-example

### Submissions and amendments

Please fork this repo and submit pull requests.
Each additional site should be in its own feature branch.

### Supported sites

https://cv-library.co.uk

### Discussion

https://www.facebook.com/groups/autoresumesubmitengine/

### License

This is a GNU GPLv3 licensed project