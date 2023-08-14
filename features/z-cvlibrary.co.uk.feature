Feature: cv-library.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "cvlibrary.co.uk"
            And I visit the "login" page
        Then the page should have a "login" form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to programatically submit the "login" form

        Given I visit the "cv" page
        Then I wait for the "cv" page to load
        Then I click the "upload" button
        Then I click the "device" button
        Then I should be able to add my CV
            Then wait for "7.5" seconds
            And I wait for the "upload success" message
