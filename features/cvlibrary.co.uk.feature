Feature: cv-library.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "cvlibrary.co.uk"
            And I visit the "login" page
        Then I click the "cookiesButton" button if it is visible
        Then close the other tab that has opened
        Then the page should have a login form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

        Given I visit the "cv" page
        Then I should be able to add my CV
            And I should be able to submit the "cv" form