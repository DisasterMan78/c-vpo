Feature: cv-library.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "cvlibrary.co.uk"
            And I visit the "login" page
            And I click the "allow cookies" button in an iframe
        Then the page should have a login form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

        Given I visit the "cv" page
        Then I wait for the "cv" page to load
        Then I click the "upload" button
        Then I click the "device" button
        Then I should be able to add my CV
            And I should be able to submit the "cv" form
            And I wait for the "upload success" page to load
            And the page should say "success"
