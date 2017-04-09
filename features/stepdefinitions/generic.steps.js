// features/stepdefinitions/routing.steps.js

var expect  = require('chai').expect,
    baseUrl = 'http://localhost:8080';

module.exports = function () {
    'use strict';

    var config = require('../../users.json'),
        cv     = config.cv,
        sites  = require('../../sites.json'),
        siteId,
        site,
        user;

    this.World = require('../support/world.js').World;

    this.Given(/^I am using the data for "([^"]+)"$/, function (data) {
        siteId = data;
        user   = config.sites[siteId];
        site   = sites[siteId];
    });

    this.Given(/^I visit the "([^"]+)" page$/, function (pageKey) {

        return this.driver.get(site.url + site[pageKey]);
    });


    this.Then(/^the page should have a login form$/, function () {

        this.waitFor(site.loginForm);

        return this.driver.findElement({ css: site.loginForm});
    });


    this.Then(/^I should be able to enter my "([^"]+)"$/, function (data) {

        var selector;

        switch (data) {
            case 'username' :
                selector = site.userInput;
                break;
            case 'password' :
                selector = site.passInput;
                break;
        }

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).sendKeys(user[data]);
    });

    this.Then(/^I should be able to submit the "([^"]+)" form$/, function (formType) {

        var selector;

        switch (formType) {
            case 'login' :
                selector = site.loginButton;
                break;
            case 'cv' :
                selector = site.saveCvButton;
                break;
        }

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).click();
    });


    this.Then(/^I should be able to add my CV$/, function () {

        this.waitFor(site.fileInput);

        return this.driver.findElement({ css: site.fileInput}).sendKeys(cv);
    });

    this.Then(/^I click the "([^"]+)" button$/, function (buttonType) {

        var selector,
            element,
            driver = this.driver;

        switch (buttonType) {
            case 'remove' :
                selector = site.removeCvLink;
                break;
            case 'remove document' :
                selector = site.removeCvButton;
                break;
            case 'more options' :
                selector = site.moreOptionsButton;
                break;
        }

        var element = this.driver.findElement({ css: selector});

        // Thanks to technojons.co.uk with their hidden/animated links, a simulated click is bloody hard to acheive.
        // As we don't care about UI testing (we are automating, not really testing), we will call a programmatic click
        // instead of a simulatted user action. IT feels wtong, but it works.
        return this.driver.executeScript('arguments[0].click()', element);
    });

    this.Then(/^I wait for the "([^"]+)" page to load$/, function(page){
        // Note: We indentify a page has loaded by the presenece of a given selector unique to that page.

        var selector;

        switch (page) {
            case 'remove document' :
                selector = site.removeCvButton;
                break;
            case 'my cvs & letters' :
                selector = site.cvShowMoreButton;
                break;
        }

        this.waitFor(selector);

        return this.driver.findElement({ css: selector});
    });

    this.Then(/^there should only be one "([^"]+)" on the page$/, function(object){

        var selector;

        switch (object) {
            case 'technojobs cv' :
                selector = site.cvShowMoreButton;
                break;
        }

        this.waitFor(selector);

        return this.driver.findElements({ css: selector}).then(function (elems) {
              return expect(elems.length).to.equal(1);
        });
    });

    this.Then(/^wait for "([^"]+)" seconds$/, function(seconds){

        var milliseconds = seconds * 1000;

        return this.driver.delay(milliseconds);
    });

};