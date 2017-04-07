Feature: cv-library.co.uk CV upload

    Scenario: Load site and login
        Given I visit the "/cgi-bin/candlogin.cgi" page
        Then the page should have a login form
            And I should be able to enter my user details
            And I should be able to submit the login form

        Given I visit the "/candidate/modify-account" page
        Then I should be able to add my CV to the file input and submit the form

    # Scenario: Update CV
    #     Given I visit the "/candidate/modify-account" page
    #     Then I should be able to add my CV to the file input

    # Scenario: Show search page
    #     Given I visit "/search" page
    #     Then the page title should be "Zoopla Test: Search"