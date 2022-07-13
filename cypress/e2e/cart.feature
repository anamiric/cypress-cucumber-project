Feature: Cart

    Background: Choose category and add product to cart
        Given home page is loaded
        When user chooses dresses
        And adds 1 product to cart
        And user proceeds to checkout

    Scenario: Add product to cart

        Then 1 product is in the cart

    Scenario: Delete product from cart

        When user deletes product
        Then cart is empty and alert message appears

    Scenario Outline: Price change according to quantity change

        When user changes quantity to <quantity>
        Then price is changed accordingly

        Examples:
            | quantity |
            | 5        |
            | 3        |



