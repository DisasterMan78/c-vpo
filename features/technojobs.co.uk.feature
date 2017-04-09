Feature: technojobs.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "technojobs.co.uk"
            And I visit the "login" page
        Then the page should have a login form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

        Given I visit the "cv" page
        Then I should be able to add my CV
            And I should be able to submit the "cv" form

        Given I visit the "manage-cvs" page
            And I click the "more options" button
            Then I click the "remove" button
            And I wait for the "remove document" page to load
            Then I click the "remove document" button
            And I wait for the "my cvs & letters" page to load
            Then there should only be one "technojobs cv" on the page