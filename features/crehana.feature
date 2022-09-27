Feature: COMO estudiante QUIERO poder ingresar a la plataforma de crehana PARA poder iniciar mi proceso de formación

@user1 @web
Scenario: Crear Usuario
    Given I navigate to page "https://qa2.creha.co/"
    And I wait for 5 seconds
    When I click on Register button
    And I wait for 4 seconds
    And I click on Para mi button
    And I wait for 4 seconds
    And I click on Continuar select flow button
    And I wait for 3 seconds
    And I click on Terminos y condiciones checkbox
    And I wait for 3 seconds
    And I click on Registrate con email button
    And I wait for 3 seconds
    And I enter my Email register "<EMAIL_NEW_MEMBER>"
    And I wait for 3 seconds
    And I enter my Password "<PASSWORD>"
    And I wait for 5 seconds
    And I click on Continuar Register button
    And I wait for 3 seconds
    And I enter my Name register "<NAME_NEW_MEMBER>"
    And I wait for 3 seconds
    And I enter my Lastname register "<LASTNAME_NEW_MEMBER>"
    And I wait for 3 seconds
    And I click on Continuar Name button
    And I wait for 3 seconds
    And I click on Estudiante button
    And I wait for 3 seconds
    And I click on Continuar ocuppation button
    And I wait for 3 seconds
    And I click on Design Element button
    And I wait for 3 seconds
    And I click on Continuar Tastes button
    And I wait for 3 seconds
    And I enter Phone number register "<PHONE_NEW_MEMBER>"
    And I wait for 3 seconds
    And I click on Continuar Telefono button
    And I wait for 15 seconds
    Then I confirm User is created


