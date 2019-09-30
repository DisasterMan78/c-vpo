// features/stepdefinitions/monster.steps.js

module.exports = function () {
    'use strict';

    var expect   = require('chai').expect,
        config   = require('../../users.json'),
        cv       = config.cv,
        sites    = require('../../sites.json'),
        siteId   = 'monster.co.uk',
        site     = sites[siteId],
        user     = config.sites[siteId];

    this.World = require('../support/world.js').World;

    this.Given(/^there should be a count of the CVs on Monster$/, function () {

        var selector  = site.maxCvsElement,
            webdriver = this,
            driver    = this.driver,
            limitText;

        webdriver.cvCounts = {};

        this.waitFor(selector);

        return driver.findElement({ css: selector}).then(function (element) {

            return element.getText().then(function (text) {

                var matchResults;

                if(typeof text.length !== "undefined" && text.length > 0) {

                    matchResults                    = text.match(/You have saved (\d+) of (\d+) possible CVs/);
                    webdriver.cvCounts.currentCount = matchResults[1];
                    webdriver.cvCounts.maxCount     = matchResults[2];
                    // We aren't really testing the values here, just checking they are stored them and moving on.
                    expect(webdriver.cvCounts.currentCount).to.be.lessThan(webdriver.cvCounts.maxCount + 1);
                }

            });
        });

    });

    this.Given(/^I should be able to delete the oldest CV on Monster if there are too many$/, function () {

        // If there are free slots, don't delete anything
        if(this.cvCounts.currentCount < this.cvCounts.maxCount) {
            return true;
        }

        var selector  = site.cvDate,
            webdriver = this,
            driver    = this.driver,
            dates     = [],
            limitText,
            cvCounts;

        this.waitFor(selector);

        return this.driver.findElements({ css: selector}).then(function (dateElements) {

            var i = 0,
                allPromises;

            allPromises = dateElements.map(function (element) {

                return element.getText().then(function (message) {

                    var messageMatch = message.match(/(\d{2})\/(\d{2})\/(\d{4})/);

                    dates[i] = new Date(messageMatch[3] + '/' + messageMatch[2] + '/' + messageMatch[1]);
                    i++;

                    return;
                });
            });

            return Promise.all(allPromises);
        }).then(function () {
            var oldestDate = new Date(Math.min.apply(null, dates)),
                // Map dates to numbers. Cast oldestDate to number with +
                index      = dates.map(Number).indexOf(+oldestDate);

            return driver.findElements({ css: site.removeCVLink}).then(function (elements) {

                var element = elements[index];

                return element.click();
            });
        });

    });

    this.Then(/^I click the "([^"]+)" button if there are too many CVs on Monster$/, function (buttonType) {

        // If there are free slots, don't delete anything
        if(this.cvCounts.currentCount < this.cvCounts.maxCount) {
            return true;
        }

        var selector,
            element;

        switch (buttonType) {
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

};
