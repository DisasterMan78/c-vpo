// features/stepdefinitions/routing.steps.js
'use strict';
var expect  = require('chai').expect,
    baseUrl = 'http://localhost:8080';

module.exports = function () {

    var siteId = 'cvlibrarycouk',
        config = require('../../users.json'),
        cv     = config.cv,
        users  = config.sites[siteId],
        sites  = require('../../sites.json')[siteId];

    this.World = require('../support/world.js').World;

     // "([^"]*)" is lazy Regex, * matches anything including no string
     // Use + (plus) instead of * (asterisk) to ensure there is one or more character
    this.Given(/^I visit the "([^"]+)" page$/, function (slug) {

        return this.driver.get(sites.url + slug);

    });


    this.Then(/^the page should have a login form$/, function () {

        var selector = 'form#login';

        this.waitFor(selector);

        return this.driver.findElement({ css: selector});
    });


    this.Then(/^I should be able to enter my user details$/, function () {

        var selector = 'input[name="email"]',
            selenium = this;

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).sendKeys(users.user).then(function () {

            var selector = 'input[name="password"]';

            selenium.waitFor(selector);

            return selenium .driver.findElement({ css: selector}).sendKeys(users.pass)
        });
    });


    this.Then(/^I should be able to submit the login form$/, function () {

        var selector = 'input[type="submit"]';

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).click();

    });


    this.Then(/^I should be able to add my CV to the file input$/, function () {

        var selector = 'input#cv_file',
            selenium = this;

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).sendKeys(cv).then(function () {

            var selector = 'form#modify_form input.save-btn';

            selenium.waitFor(selector);

            return selenium .driver.findElement({ css: selector}).click();
        });
    });

};
