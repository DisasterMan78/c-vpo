// features/stepdefinitions/routing.steps.js
'use strict';
var expect  = require('chai').expect,
    baseUrl = 'http://localhost:8080';

module.exports = function () {

    var config = require('../../users.json'),
        cv     = config.cv,
        sites  = require('../../sites.json'),
        siteId,
        site,
        user;

    this.World = require('../support/world.js').World;

    this.Given(/^I am using the data for "([^"]+)"$/, function (data) {
        siteId = data;
        user   = config.sites[siteId],
        site   = sites[siteId]
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

        return this.driver.findElement({ css: selector}).click();
    });


    this.Then(/^I should be able to add my CV$/, function () {

        this.waitFor(site.fileInput);

        return this.driver.findElement({ css: site.fileInput}).sendKeys(cv);
    });

};
