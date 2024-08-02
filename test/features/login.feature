@regression
Feature: Login functionality
  As a user, I want to login to the Kasir Aja website using valid credentials
  
  @positiveLogin @LoginScenario @smoke
  Scenario: User can login using valid credentials
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page

  @negativeLogin @LoginScenario
  Scenario Outline: User login with various invalid inputs
    Given I open the Kasir Aja website
    When I attempt to login with "<email>" and "<password>"
    Then I should see an error message "<error_message>"

    Examples:
      | email               | password    | error_message                        |
      | srituemail@test.com | Tes123      | Kredensial yang Anda berikan salah   |
      |                     | Tes123      | "email" is not allowed to be empty   |
      | srituemail@test.com |             | "password" is not allowed to be empty|