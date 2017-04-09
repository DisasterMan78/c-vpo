Feature: jobsite.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "jobsite.co.uk"
            And I visit the "login" page
        Then the page should have a login form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form
        Then I wait for the "login success" page to load

    # jobiste is a bit pick - if the test isn't run as a single scenario
    # it kicks you out complaining about cookies. That wasted a lot of time...
    # Scenario: Upload CV
        Then I click the "edit cv" button
        Then I should be able to add my CV
            And I should be able to submit the "cv" form
        Then I wait for the "upload success" page to load
            And the page should say "success"