Feature: technojobs.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "technojobs.co.uk"
            And I visit the "login" page
        Then the page should have a "login" form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

        Given I visit the "cv" page
        And I wait for the "upload cv" page to load
        Then the page should have a "upload" form
            Then I should be able to add my CV
                And I should be able to programatically submit the "upload" form
                And I wait for the "manage CVs" page to load
            Then I click the "remove document" button
                And I wait for the "remove document" page to load
            Then I click the "confirm remove" button
                And I wait for the "manage CVs" page to load