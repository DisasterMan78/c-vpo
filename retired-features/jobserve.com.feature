############
#
# N.B. This script relies on you having a single CV uploaded to the site already
#
############
# Feature: jobserve.com CV upload

#     Scenario: Load site and login
#         Given I am using the data for "jobserve.com"
#             And I visit the "login" page
#             And I click the "allow cookies" button
#         Then the page should have a "login" form
#             And I should be able to enter my "username"
#             And I should be able to enter my "password"
#             And I should be able to submit the "login" form
#         Then I wait for the "candidate home" page to load

#     # As with jobiste, jobserve is a bit picky - if the test isn't run
#     # as a single scenario it kicks you out complaining about cookies.
#     #Scenario: Delete Old CV
#         Then I click the "CVs tab" button
#             And I wait for the "CV tab content" page to load
#             And I hover on "actions element"
#             And I click the "remove document" button
#         Then I wait for the "confirm delete" page to load
#             And the page should say "are you sure"
#         Then I click the "confirm delete" button
#             And I wait for the "candidate home" page to load

#     #Scenario: Upload CV
#         Then I click the "CVs tab" button
#             And I wait for the "CV tab content" page to load
#             Then I click the "upload cv" button
#         Then I wait for the "upload cv" page to load
#         Then I should be able to add my CV
#             And I should be able to submit the "cv" form
#         Then I wait for the "candidate home" page to load
        #     And the page should say "success"