@regression
Feature: Pengguna Page functionality
    As a user, I want modify user login on pengguna page
  
    @addPengguna @penggunaScenario @smoke
    Scenario Outline: User can add new user
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should see the Dashboard Page
        When I click on the Pengguna Tab
        Then I should see the Pengguna Page
        When I click the Tambah button
        Then I shoul see the Pengguna Create Page
        When I input a "<name>", "<email>" and "<password>" for the new User
        And I Click Save Button
        Then I should see the new "<name>" user in the list

    Examples:
    | name    | email              | password       |
    | Kasir02 | kasir02@sas.com    | Kasir02Pass    |


    @updatePengguna @penggunaScenario
    Scenario Outline: User can update data userS
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should see the Dashboard Page
        When I click on the Pengguna Tab
        Then I should see the Pengguna Page
        When I click option Espisilis button on user <old_user>
        Then I should see submenu
        When I clik ubah button on user <old_user>
        Then I should See Update User Page
        When I input a new "<new_name>", "<new_email>" and "<new_password>"
        And I Click Save Button
        Then I should see the update <new_name> user in the list

    Examples:
      | new_name  | new_email        | new_password      | old_user |
      | Kasir03   | kasir03@sas.com  | Kasir02Pass   | Kasir02  |

    @deletePengguna @penggunaScenario
    Scenario Outline: User can delete existing user
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should see the Dashboard Page
        When I click on the Pengguna Tab
        Then I should see the Pengguna Page
        When I click option Espisilis button on user <delete_user>
        Then I should see submenu
        When I Click hapus button on user <delete_user>
        Then I should See Pop Up verification
        When I click Delete Button
        Then I should see the <delete_user> user was deleted

    Examples:
    | delete_user |
    | Kasir03        |