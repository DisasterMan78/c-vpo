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


    this.Given(/^I visit the "([^"]+)" url$/, function (urlKey) {
        var url;

        switch (urlKey) {
            case 'login' :
                url = site.loginUrl;
                break;
        }
    console.log('url', url)
        return this.driver.get(url);
    });


    this.Then(/^the page should have a login form$/, function () {

        this.waitFor(site.loginForm);

        return this.driver.findElement({ css: site.loginForm});
    });


    this.Then(/^I should be able to enter my "([^"]+)"$/, function (data) {

        var selector,
            element;

        switch (data) {
            case 'username' :
                selector = site.userInput;
                break;
            case 'password' :
                selector = site.passInput;
                break;
        }

        this.waitFor(selector);

        element = this.driver.findElement({ css: selector});

        element.click();

        return element.sendKeys(user[data]);
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

        return this.driver
            .findElement({ css: selector})
            .click();
    });


    this.Then(/^I should be able to add my CV$/, function () {

        this.waitFor(site.fileInput);

        return this.driver
            .findElement({ css: site.fileInput})
            .sendKeys(cv);
    });


    this.Then(/^I click the "([^"]+)" button$/, function (buttonType) {

        var selector,
            element;

        switch (buttonType) {
            case 'allow cookies' :
                selector = site.allowCookies;
                break;
            case 'CVs tab' :
                selector = site.tabCvs;
                break;
            case 'edit cv' :
                selector = site.editCvButton;
                break;
            case 'upload cv' :
                selector = site.uploadCvButton;
                break;
            case 'remove' :
                selector = site.removeCvLink;
                break;
            case 'remove document' :
                selector = site.removeCvButton;
                break;
            case 'confirm delete' :
                selector = site.confirmDeleteButton;
                break;
            case 'more options' :
                selector = site.moreOptionsButton;
                break;
            case 'confirm delete' :
                selector = site.confirmDeleteButton;
                break;
            case 'make this cv searchable' :
                selector = site.makeSearchable;
                break;
            case 'upload' :
                selector = site.uploadButton;
                break;
            case 'cookies' :
                selector = site.cookiesButton;
                break;
            case 'device' :
                selector = site.deviceButton;
                break;
            case 'add to index' :
                selector = site.indexButton;
                break;
            case 'login tab' :
                selector = site.loginTab;
                break;
        }

        var element = this.driver.findElement({ css: selector});

        // Thanks to technojons.co.uk with their hidden/animated links, a simulated click is bloody hard to acheive.
        // As we don't care about UI testing (we are automating, not really testing), we will call a programmatic click
        // instead of a simulatted user action. IT feels wtong, but it works.
        return this.driver.executeScript('arguments[0].click()', element);
    });

    this.Then(/^I wait for the "([^"]+)" message$/, function(page){

        var text,
            driver = this.driver;

        switch (page) {
            case "sign in" :
                text = site.signinMessage;
            case 'upload success' :
                text = site.uploadSuccessMessage;
                break;
            case 'uploaded document' :
                text = site.uploadedDocument;
                break;
        }

        return driver.wait(function() {
            return driver.getPageSource().contains(text);
        }, 20000);
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
            case 'candidate home' :
                selector = site.candidateHomeSelector;
                break;
            case 'CV tab content' :
                selector = site.cvTabContent;
                break;
            case 'remove document' :
                selector = site.removeCvButton;
                break;
            case 'cv' :
                selector = site.editCvButton;
            case 'upload cv' :
                selector = site.fileInput;
                break;
            case 'confirm delete' :
                selector = site.removeCVPage;
                break;
            case 'my cvs & letters' :
                selector = site.cvShowMoreButton;
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

        return this.driver
            .findElements({ css: selector})
            .then(function (elems) {
                return expect(elems.length).to.equal(1);
            });
    });


    this.Then(/^wait for "([^"]+)" seconds$/, function(seconds){
        return this.driver.sleep(seconds * 1000);
    });


    this.Then(/^the page should say "([^"]+)"$/, function (text) {
        var selector,
            message;

        switch (text) {
            case 'are you sure' :
                selector = site.removeCVPage;
                message  = site.confirmDeleteMsg;
                break;
            case 'success' :
                selector = site.uploadSuccessPage;
                message  = site.successMsg;
                break;
        }

        this.waitFor(selector);

        return this.driver
            .findElement({ css: selector})
            .getText()
            .then(function (message) {
                expect(message).to.equal(message);
            });
    });

    this.Then(/^I hover on "([^"]+)"$/, function (selector){
        var driver = this.driver,
            selector;

        switch (selector) {
            case 'actions element' :
                selector = site.actionsElement;
                break;
        }

        return this.driver
            .findElement({ css: selector})
            .then(function(elem){
                driver
                    .actions()
                    .mouseMove(elem)
                    .perform();
            });
    });



    this.Then(/^I click the "([^"]+)" button if it is visible$/, function (buttonSelector) {
        var button = this.driver.findElement({ css: site[buttonSelector]});

        // If the button isn't visible, skip step
        if(button.length === 0) {
            return true;
        }

        return button.click();
    });



    this.Then(/^I click the "([^"]+)" button if it is visible and close any other tabs that open$/, function (buttonSelector) {
        var driver = this.driver,
            originalHandle = driver.getWindowHandle(),
            button = this.driver.findElement({ css: site[buttonSelector]});

        // If the button isn't visible, skip step
        if(button.length === 0) {
            return true;
        }

        button.click();

        driver.getAllWindowHandles().then(function (allHandles) {

            allHandles.forEach(function (handle) {
                if (handle !== originalHandle) {
                    driver
                        .switchTo()
                        .window(handle);

                    driver.close();
                }
            });

            driver
                .switchTo()
                .window(originalHandle);
        });
    });

    this.Then(/^close the other tab that has opened$/, function() {
        var driver = this.driver,
            currentHandle = driver.getWindowHandle();

        driver
            .getAllWindowHandles()
                .then(function (allHandles) {

                driver
                    .switchTo()
                    .window(allHandles[1]);

                driver.close();

                return driver
                    .switchTo()
                    .window(allHandles[0]);
            });
    });

};
