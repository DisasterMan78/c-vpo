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

    this.Given(/^I visit the "([^"]+)" page$/, function (slug) {

        return this.driver.get(site.url + slug);
    });


    this.Then(/^the page should have a login form "([^"]+)"$/, function (selector) {

        this.waitFor(selector);

        return this.driver.findElement({ css: selector});
    });


    this.Then(/^I should be able to enter my "([^"]+)" in the field "([^"]+)"$/, function (data, selector) {

        return this.driver.findElement({ css: selector}).sendKeys(user[data]);
    });

    this.Then(/^I should be able to submit the form with the button "([^"]+)"$/, function (selector) {

        return this.driver.findElement({ css: selector}).click();
    });


    this.Then(/^I should be able to add my CV to the file input "([^"]+)"$/, function (selector) {

        this.waitFor(selector);

        return this.driver.findElement({ css: selector}).sendKeys(cv);
    });

};
