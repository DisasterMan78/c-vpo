Feature: totaljobs.com CV upload

    Scenario: Load site and login
        Given I am using the data for "totaljobs.com"
            And I visit the "/account/signin?ReturnUrl=%2fAuthenticated%2fprofile.aspx#cv" page
        Then the page should have a login form "form[action='/Account/SignIn?ReturnUrl=%2FAuthenticated%2Fprofile.aspx'"
            And I should be able to enter my "username" in the field "input[name='Form.Email']"
            And I should be able to enter my "password" in the field "input[name='Form.Password']"
            And I should be able to submit the form with the button "form[action='/Account/SignIn?ReturnUrl=%2FAuthenticated%2Fprofile.aspx'] input[type='submit']"

        Given I visit the "/Authenticated/profile.aspx" page
        Then I should be able to add my CV to the file input "input#candidateProfileDetails_cvUpload_filCVUploadFile"
            And I should be able to submit the form with the button "input#btnSave"