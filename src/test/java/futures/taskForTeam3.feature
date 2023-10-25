@Regression
Feature: security token API calls

  Scenario: send request to the token
    Given url "https://qa.insurance-api.tekschool-students.com"
    And path "/api/token"
    And request {"username": "supervisor","password": "tek_supervisor"}
    When method post
    Then status 200


  Scenario:
    Given url "https://qa.insurance-api.tekschool-students.com"
    And path "/api/token"
    And request {"username": "wrongUsername","password": "tek_supervisor"}
    When method post
    And print response
    Then status 404