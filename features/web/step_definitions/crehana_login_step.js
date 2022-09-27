const { Given, When, Then } = require('@cucumber/cucumber');

//Login steps definitions

When('I click on start session button', async function() {
    let element = await this.driver.$('#login_mainMenu');
    return await element.click();
})

When('I enter my registered Email {kraken-string}', async function (email) {
    let element = await this.driver.$('#username');
    return await element.setValue(email);
});

When('I enter my Password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click on Iniciar Session button', async function() {
    let element = await this.driver.$("/html/body/div[1]/div/div[3]/div/div/div[2]/div/div/form/div[4]/button[2]");
    return await element.click();
})

//Step definition register user

When('I enter my Email register {kraken-string}', async function(email_new_member) {
    let element = await this.driver.$('#email');
    return await element.setValue(email_new_member);
})

When('I click on Register button', async function() {
    let element = await this.driver.$('#register_mainMenu');
    return await element.click();
})

When('I click on Para mi button', async function() {
    let element = await this.driver.$('.mt-12');
    return await element.click();
})

When('I click on Continuar select flow button', async function() {
    let element = await this.driver.$('[data-testid="entry-point-select-flow"]');
    return await element.click();
})

When('I click on Registrate con email button', async function() {
    let element = await this.driver.$('[data-testid="change-kind-of-login"]');
    return await element.click();
})

When('I click on Terminos y condiciones checkbox', async function() {
    let element = await this.driver.$("/html/body/div[1]/main/div[2]/div[2]/div/div/form/div[2]/div/label/div");
    return await element.click();
})

When('I click on Continuar Register button', async function() {
    let element = await this.driver.$('[data-testid="register-button"]');
    return await element.click();
})

When('I enter my Name register {kraken-string}', async function(name_new_member) {
    let element = await this.driver.$('[data-testid="name"]');
    return await element.setValue(name_new_member);
})

When('I enter my Lastname register {kraken-string}', async function(lastname_new_member) {
    let element = await this.driver.$('[data-testid="lastName"]');
    return await element.setValue(lastname_new_member);
})

When('I click on Continuar Name button', async function() {
    let element = await this.driver.$('[data-testid="full-name-select"]');
    return await element.click();
})

When('I click on Estudiante button', async function() {
    let element = await this.driver.$('[data-testid="student-field"]');
    return await element.click();
})

When('I click on Continuar ocuppation button', async function() {
    let element = await this.driver.$('[data-testid="ocuppation-button"]');
    return await element.click();
})

When('I click on Design Element button', async function() {
    let element = await this.driver.$('[data-testid="design-frequent-field"]');
    return await element.click();
})

When('I click on Continuar Tastes button', async function() {
    let element = await this.driver.$('[data-testid="tastes-button"]');
    return await element.click();
})

When('I enter Phone number register {kraken-string}', async function(phone_new_member) {
    let element = await this.driver.$('[data-testid="phone-number-field"]');
    return await element.setValue(phone_new_member);
})

When('I click on Continuar Telefono button', async function() {
    let element = await this.driver.$('[data-testid="phone-select"]');
    return await element.click();
})

When('I click on Ir a crehana button', async function() {
    let element = await this.driver.$("/html/body/div[1]/main/div[3]/div[2]/div/div/div/a");
    return await element.click();
})

Then('I confirm User is created', async function () {
    let element = await this.driver.$("/html/body/div[1]/main/div[3]/div[2]/div/div/div/a");
    return await element.click();
});

//Step definitions List

Then('I confirm courses list', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/div[2]/div/ul/li[1]/button");
    return await element.click();
});

Then('I start course', async function () {
    let element = await this.driver.$('[data-testid="start-course-btn-9345"]');
    return await element.click();
});

//My Courses step definitions
Then('I click on Mis cursos', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/button[3]/div/div/p");
    return await element.click();
});

Then('I click on Mis cursos inscritos option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/div[2]/div/ul/li[1]/button/p");
    return await element.click();
});

Then('I click on Rutas de aprendizaje option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/div[2]/div/ul/li[2]/button/p");
    return await element.click();
});

Then('I click on Apuntes option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/div[2]/div/ul/li[3]/button/p");
    return await element.click();
});

//Study plan step definitions
Then('I click on Plan de estudio option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/button[4]/button/div");
    return await element.click();
});

//Study mentoring definitions
Then('I click on Mentoring option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/button[5]/button/div/div/p");
    return await element.click();
});

//Study resources definitions
Then('I click on Resources option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/button[6]/div/div/p");
    return await element.click();
});

Then('I click on Blog option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/div[3]/div/ul/li[1]/button/p");
    return await element.click();
});

Then('I click on Lives option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/div[3]/div/ul/li[2]/button/p");
    return await element.click();
});

Then('I click on Tools option', async function () {
    let element = await this.driver.$("/html/body/div[1]/div/div[1]/div[1]/div[3]/div/ul/li[3]/button/p");
    return await element.click();
});