Feature: monster.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "monster.co.uk"
            And I visit the "login" url
        Then the page should have a login form
            And I should be able to enter my "username"
            And I should be able to enter my "password"
            And I should be able to submit the "login" form

        # Monster supports 5 CVs and tracks views for each file. I like to keep an eye
        # on this data, so will be checking the date of each and deleting the oldest
        # monster is a bit picky - if the test isn't run as a single scenario
        # it kicks you out.
        # Scenario: Delete oldest CV
        Given I visit the "manage cvs" page
        Then there should be a count of the CVs on Monster
        Then I should be able to delete the oldest CV on Monster if there are too many
        Then I click the "confirm delete" button if there are too many CVs on Monster

    # Scenario: Upload CV
        Given I visit the "cv" page
        And I click the "make this cv searchable" button
        Then I should be able to add my CV
            And I wait for the "upload success" page to load