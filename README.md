# C-VPO - The CV Post Office
## Automated Resumé Submission Engine

**N.B. This project is intended as a productivity tool, not for abuse of systems. This is one reason for using slower tests that simulate user input.**

*These scripts are presented as is and without warranty of any kind.*

**By using these scripts you agree that the author(s) shall not be held liable for damages of any nature, and accept full responsibility for their usage. If you don't understand them, don't use them.**

*Don't be scared - the scripts aren't considered dangerous or abusive. The worst that could likely happen is a job site provider could be mildly peeved and suspend your account.*

### Requirements

Node.js

NPM

Install Chromedriver from https://googlechromelabs.github.io/chrome-for-testing/
Be sure to add path to chromedriver file to your PATH variable. Instruction on doing this for your operating system can be found online.

> Be sure to keep Chromedriver up to date with your Chrome version
> If you get this error it may be due to an out of date Chromedriver
> `Error: ECONNREFUSED connect ECONNREFUSED 127.0.0.1:50472`
> If you have recently updated to the latest version of Chrome, a compatible version of webdriver may not be available yet. The Webdriver version should match the Chrome version number.

### Install

Clone the repo from GitHub, enter the project directory and run

`$ npm install`

### Config

Supported sites are configured in `sites.json` - Nomenclature be haaaard...

Copy or rename `users_sample.json` to `users.json` and add your details, including the path to your CV - `users.json` is ignored by Git, so will not be uploaded to a repo, exposing your security info to the world.

As you will be keeping these passwords in a plain text file, it is HIGHLY recommended that you do NOT reuse any of the passwords for the jobsites, and you should encrypt your disk. Support for password managers obviating the need for these details to be stored is considered for the future. (It's a wishlist item, don't hold your breath)

### Run

Will submit CV to sites in provided scripts. Tests will inform you of failures in the event of UI changes - screenshots will be dumped in /screenshots

`$ npm start`

### Errors

Sometimes a test will fail because the site isn't responding - to re-run a single test (e.g. cwjobs):

`$ npm start features/cwjobs.co.uk.feature`


Cucumber support files lifted from
https://github.com/Matt-B/cucumber-js-selenium-webdriver-example

### Submissions and amendments

Please fork this repo and submit pull requests.
Each additional site should be in its own feature branch.

### Currently Supported sites

* https://cv-library.co.uk
* https://cwjobs.co.uk
* https://monster.co.uk
* https://technojobs.co.uk
* https://totaljobs.com

### Retired sites

* https://jobserve.com - out of date
* https://jobsite.co.uk - Swallowed up by totaljobs.com


### Discussion

https://www.facebook.com/groups/autoresumesubmitengine/

### License

This is a GNU GPLv3 licensed project