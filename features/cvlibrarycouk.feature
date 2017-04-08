Feature: cv-library.co.uk CV upload

    Scenario: Load site and login
        Given I am using the data for "cvlibrary.co.uk"
            And I visit the "/cgi-bin/candlogin.cgi" page
        Then the page should have a login form "form#login"
            And I should be able to enter my "username" in the field "input[name='email']"
            And I should be able to enter my "password" in the field "input[name='password']"
            And I should be able to submit the form with the button "input[type='submit']"

        Given I visit the "/candidate/modify-account" page
        Then I should be able to add my CV to the file input "input#cv_file"
            And I should be able to submit the form with the button "form#modify_form input.save-btn"