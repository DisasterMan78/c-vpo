Feature: cv-library.co.uk CV upload

    Scenario: Load site and login
        Given I visit the "/account/signin?ReturnUrl=%2fAuthenticated%2fprofile.aspx#cv" page on totaljobs
        Then the page should have the totaljobs login form
            And I should be able to enter my totaljobs user details
            And I should be able to submit the totaljobs login form

        Given I visit the "/Authenticated/profile.aspx" page on totaljobs
        Then I should be able to add my CV to the totaljobs file input and submit the form