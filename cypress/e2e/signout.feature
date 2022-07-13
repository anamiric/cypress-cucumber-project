Feature: Sign out

    Scenario: Sign out

        Given home page is loaded
        And sign in button is displayed in header
        When user clicks on sign in button in header
        Then sign in form is displayed
        When user submits correct credentials
        Then users account is displayed
        When user clicks on sign out button in header
        Then sign in button is displayed in header
        And sign in form is displayed