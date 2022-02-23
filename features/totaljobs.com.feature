Feature: totaljobs.com CV upload

    Scenario: Load site and login
        Given I am using the data for "totaljobs.com"
            And I visit the "login" page
        Then the page should have a login form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

    # Scenario: Upload CV
        Given I visit the "cv" page
        Then I should be able to add my CV
            And I click the "make this cv searchable" button
        Then I should be able to submit the "cv" form