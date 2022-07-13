Feature: Sign in

    Background: Go to sign in and populate sign in form

        Given home page is loaded
        And sign in button is displayed in header
        When user clicks on sign in button in header
        Then sign in form is displayed

    Scenario: Sign in with correct credentials

        When user submits correct credentials
        Then users account is displayed

    Scenario: Sign in with wrong credentials

        When user submits invalid credentials
        Then error message is displayed