// features/stepdefinitions/routing.steps.js
'use strict';
var expect  = require('chai').expect,
    baseUrl = 'http://localhost:8080';

module.exports = function () {

    var siteId = 'totaljobscom',
        config = require('../../users.json'),
        cv     = config.cv,
        users  = config.sites[siteId],
        sites  = require('../../sites.json')[siteId];

    this.World = require('../support/world.js').World;

     // "([^"]*)" is lazy Regex, * matches anything including no string
     // Use + (plus) instead of * (asterisk) to ensure there is one or more character
    this.Given(/^I visit the "([^"]+)" page on totaljobs$/, function (slug) {

        return this.driver.get(sites.url + slug);

    });


    this.Then(/^the page should have the totaljobs login form$/, function () {

        var selector = 'form[action="/Account/SignIn?ReturnUrl=%2FAuthenticated%2Fprofile.aspx"]';

        this.waitFor(selector);

        return this.driver.findElement({ css: selector});
    });


    this.Then(/^I should be able to enter my totaljobs user details$/, function () {

        var selector = 'input[name="Form.Email"]',
            selenium = this;

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).sendKeys(users.user).then(function () {

            var selector = 'input[name="Form.Password"]';

            selenium.waitFor(selector);

            return selenium .driver.findElement({ css: selector}).sendKeys(users.pass)
        });
    });


    this.Then(/^I should be able to submit the totaljobs login form$/, function () {

        var selector = 'form[action="/Account/SignIn?ReturnUrl=%2FAuthenticated%2Fprofile.aspx"] input[type="submit"]';

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).click();

    });


    this.Then(/^I should be able to add my CV to the totaljobs file input and submit the form$/, function () {

        var selector = 'input#candidateProfileDetails_cvUpload_filCVUploadFile',
            selenium = this;

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).sendKeys(cv).then(function () {

            var selector = 'input#btnSave';

            selenium.waitFor(selector);

            return selenium.driver.findElement({ css: selector}).click().then(function() {

                var selector = 'div.account-page';

                return selenium.waitFor(selector);
            });
        });
    });

};
