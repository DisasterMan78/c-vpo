Feature: cwjobs.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "cwjobs.co.uk"
            And I visit the "login" page
            And I click the "allow cookies" button
        Then the page should have a "login" form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

    # Scenario: Upload CV
        Given I click the "CVs tab" button
        Then I should be able to add my CV
            Then wait for "7.5" seconds
            And I wait for the "upload success" message