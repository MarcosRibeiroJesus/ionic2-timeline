var usuarioPage = function() {
    
    this.firstName = element(by.id('firstname')); 
    this.lastName = element(by.id('lastname'));
    this.email = element(by.id('email')); 
    this.password = element(by.id('password'));
    this.loginBtn = element(by.css('[disabled]="!loginForm.valid"'));
    this.cancelBtn = element(by.css('ng-click="cancelChanges()"'));
    
    this.loginPage = function(email, password) {
    
        this.email.click();
    
        var input = email.element(by.css('.input-text'));
        input.click();
        this.input.sendKeys(email);
    
        this.lastName.click();
        var input2 = lastName.element(by.css('.input'));
        input2.click();
        this.input2.sendKeys(password);
        browser.waitForAngular();
    }
    };
    
    module.exports = new usuarioPage();
    