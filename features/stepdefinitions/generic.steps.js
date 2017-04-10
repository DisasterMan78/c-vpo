// features/stepdefinitions/routing.steps.js

module.exports = function () {
    'use strict';

    var expect = require('chai').expect,
        config = require('../../users.json'),
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

    this.Given(/^I visit the "([^"]+)" url$/, function (url) {

        var urlKey;

        switch (url) {
            case 'login' :
                url = site.loginUrl;
                break;
        }

        return this.driver.get(url);
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
            element;

        switch (buttonType) {
            case 'edit cv' :
                selector = site.editCvButton;
                break;
            case 'remove' :
                selector = site.removeCvLink;
                break;
            case 'remove document' :
                selector = site.removeCvButton;
                break;
            case 'more options' :
                selector = site.moreOptionsButton;
                break;
            case 'confirm delete' :
                selector = site.confirmDeleteButton;
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
            case 'login' :
                selector = site.loginForm;
                break;
            case 'login success' :
                selector = site.loginSuccessMsg;
                break;
            case 'remove document' :
                selector = site.removeCvButton;
                break;
            case 'my cvs & letters' :
                selector = site.cvShowMoreButton;
                break;
            case 'login success' :
                selector = site.loginSuccessPage;
                break;
            case 'upload success' :
                selector = site.uploadSuccessPage;
                break;
            case 'nonexistent' :
                selector = "#nonexistent";
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




    this.Then(/^the page should say "([^"]+)"$/, function (text) {
        var selector,
            successMsg;

        switch (text) {
            case 'success' :
                selector  = site.uploadSuccessPage;
                successMsg = site.successMsg;
                break;
        }

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).getText().then(function (message) {
            expect(message).to.equal(successMsg);
        });
    });

};
