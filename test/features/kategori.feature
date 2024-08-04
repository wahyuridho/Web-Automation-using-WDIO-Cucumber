Feature: Kategori Page functionality
  As a user, I want modify data on kategori page
  
  @addKategori
  Scenario: User can add new kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click the Tambah button
    Then I shoul see the Kategori Create Page
    When I input a name and description for the new Kategori
    And I Click Save Button
    Then I should see the new kategori in the list

  @updateKategori
  Scenario: User can update kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click option Espisilis button on kategori list
    Then I should see submenu
    When I clik ubah button
    Then I should See Update Kategori Page
    When I input a new name and description
    And I Click Save Button
    Then I should see the update kategori in the list
  
  @deleteKategori
  Scenario: User can delete Kategori
    Given I open the Kasir Aja website
    When I login with valid credentials
    Then I should see the Dashboard Page
    When I click on the Kategori Tab
    Then I should see the Kategori Page
    When I click option Espisilis button on kategori list
    Then I should see submenu
    When I Click hapus button
    Then I should See Pop Up verification
    When I click Delete Button
    Then I should see the kategori was deleted