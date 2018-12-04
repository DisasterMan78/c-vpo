# C-VPO - The CV Post Office
## Automated Resumé Submission Engine

**N.B. This project is intended as a productivity tool, not for abuse of systems. This is one reason for using slower tests that simulate user input.**

*These scripts are presented as is and without warranty of any kind.*

**By using these scripts you agree that the author(s) shall not be held liable for damages of any nature, and accept full responsibility for their usage. If you don't understand them, don't use them.**

*Don't be scared - the scripts aren't considered dangerous or abusive. The worst that could likely happen is a job site provider could be mildly peeved and suspend your account.*

### Requirements

Node.js

NPM

Install Chromedriver from http://chromedriver.storage.googleapis.com/index.html
Be sure to add path to chromedriver file to your PATH variable

> Be sure to keep Chromedriver up to date with your Chrome version
> If you get this error it may be due to an out of date Chromedriver
> `Error: ECONNREFUSED connect ECONNREFUSED 127.0.0.1:50472`

Clone the repo, then from the project directory run

`$ npm install`

### Config

Supported sites are configured in sites.json - Nomenclature be haaaard...

Copy or rename users_sample.json to users.json and add your details, including the path to your CV - users.json is ignored by Git, so will never be uploaded to a repo, exposing your security info to the world.

As you will bee keeping these passwords in a plain text file, it is HIGHLY recommended that you do NOT reuse any of the passwords for the jobsites, and you should encrypt your disk. Support for password managers obviating the need for these details to be stored is planned for the future.

### Run

Will submit CV to sites in provided scripts. Tests will inform you of failures in the event of UI changes - screenshots will be dumped in /screenshots

`$ npm start`

Sometimes a test will fail because the site isn't responding - to re-run a single test:

`$ npm start features/jobsite.co.uk.feature`


Cucumber support files lifted from
https://github.com/Matt-B/cucumber-js-selenium-webdriver-example

### Submissions and amendments

Please fork this repo and submit pull requests.
Each additional site should be in its own feature branch.

### Currently Supported sites

* https://cv-library.co.uk
* https://cwjobs.co.uk
* https://jobserve.com
* https://monster.co.uk
* https://technojobs.co.uk
* https://totaljobs.com

### Discussion

https://www.facebook.com/groups/autoresumesubmitengine/

### License

This is a GNU GPLv3 licensed project