Feature: monster.co.uk CV upload

    Background: Load site and login
        Given I am using the data for "monster.co.uk"
            And I visit the "login" url
            And I wait for the "login" page to load
            And wait for "5" seconds
            And I click the "login tab" button
        Then the page should have a login form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

    Scenario: Upload CV
        Given I visit the "profile" page
        And I click the "upload" button
        Then I should be able to add my CV
            And I wait for the "upload success" message
            And I click the "saveChanges" button
            And I wait for the "uploaded document" message
