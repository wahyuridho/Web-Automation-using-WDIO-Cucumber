@regression
Feature: Kategori Page functionality
  As a user, I want modify data on kategori page
  
  @addKategori @kategoriScenario @smoke
  Scenario Outline: User can add new kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click the Tambah button
    Then I shoul see the Kategori Create Page
    When I input a "<name>" and "<description>" for the new Kategori
    And I Click Save Button
    Then I should see the new "<name>" kategori in the list

    Examples:
      | name  | description     |
      | Box   | Satuan Satu dus |

  @updateKategori @kategoriScenario
  Scenario Outline: User can update kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click option Espisilis button on kategori <old_name>
    Then I should see submenu
    When I clik ubah button on kategori <old_name>
    Then I should See Update Kategori Page
    When I input a new "<new_name>" and "<new_description>"
    And I Click Save Button
    Then I should see the update <new_name> kategori in the list

    Examples:
      | new_name  | new_description        | old_name |
      | Pack  | Satuan kotak kecil | Box   |
  
  @deleteKategori @kategoriScenario
  Scenario Outline: User can delete Kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click option Espisilis button on kategori <delete_name>
    Then I should see submenu
    When I Click hapus button on kategori <delete_name>
    Then I should See Pop Up verification
    When I click Delete Button
    Then I should see the <delete> kategori was deleted

    Examples:
    | delete_name |
    | Pack        |