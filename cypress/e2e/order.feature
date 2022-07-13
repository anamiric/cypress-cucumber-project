Feature: Order

    Scenario: Complete order
        Given home page is loaded
        When user chooses dresses
        And adds 1 product to cart
        And user proceeds to checkout
        Then 1 product is in the cart
        When user goes next step
        And user submits correct credentials
        Then users address is displayed
        When user goes next step
        Then shipping page is displayed
        When user agrees to terms of service
        And user goes next step
        Then payment page is displayed
        When user chooses pay by bank wire payment option
        And user confirms order
        Then order confirmation summary is displayed
