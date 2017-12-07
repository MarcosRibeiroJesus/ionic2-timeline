import { browser, element, by, ElementFinder } from 'protractor';

describe('E2E Test', () => { 

  beforeEach(() => {
    browser.get('');
  });

  it('Ir para página de cadastro e criar uma nova conta.', () => {
    browser.ignoreSynchronization = true;
    element(by.id('cadastro')).click().then(() => {

      browser.driver.sleep(3500);
      expect(element(by.css('ion-title'))
        .getAttribute('innerHTML'))
        .toContain('Novo Cadastro');

      element(by.id('email2')).element(by.tagName('.text-input')).sendKeys('jasmine012222@e2e.com');
      browser.driver.sleep(1000);

      element(by.id('password2')).element(by.tagName('.text-input')).sendKeys('testee2e');
      browser.driver.sleep(1000);

    });

    element(by.id('login2')).click().then(() => {
      browser.driver.sleep(10000);
    });
  });


  it('Atualizar perfil e realizar logoff do app.', () => {

    element(by.id('tab-t0-5')).click().then(() => {
      browser.driver.sleep(5000);
    });

    element(by.tagName('.alert-input')).sendKeys("E2E Tester");
    element(by.tagName('.alert-button')).click().then(() => {
      browser.driver.sleep(5000);
    });

    element(by.id('logout')).click().then(() => {
      browser.driver.sleep(4000);
    });

  });

  // it('Preencher um email e senha válidos e acessar o app.', () => {
  //   browser.ignoreSynchronization = true;

  //   element(by.id('email')).click().then(() => {

  //     element(by.id('email')).element(by.tagName('.text-input')).sendKeys('jasmineprotactor01@e2e.com');
  //     browser.driver.sleep(500);

  //     element(by.id('password')).element(by.tagName('.text-input')).sendKeys('testee2e');
  //     browser.driver.sleep(500);
  //   });

  //   element(by.id('login')).click().then(() => {
  //     browser.driver.sleep(10000);
  //   });
  // });

  // it('Acessar menu "Enviar fotos" e clicar no botão de envio.', () => {
  //   element(by.id('tab-t0-1')).click().then(() => {

  //     browser.driver.sleep(10000);
  //     element(by.id('foto')).click();
  //     browser.driver.sleep(4000);
  //   });
  // });

  // it('Acessar menu "Chat", e enviar uma mensagem.', () => {

  //   element(by.id('tab-t0-2')).click().then(() => {

  //     browser.driver.sleep(10000);
  //   });
  //   element(by.tagName('.text-input')).sendKeys('Mensagem automática');
  //   browser.driver.sleep(5000);
  //   element(by.tagName('.item-button')).click();
  //   browser.driver.sleep(10000);
  // });


  // it('Acessar menu "Contatos".', () => {

  //   element(by.id('tab-t0-3')).click().then(() => {

  //     browser.driver.sleep(10000);
  //   });
  // });

  // it('Acessar menu "Fanpage" e verificar se o card é exibido.', () => {

  //   element(by.id('tab-t0-4')).click().then(() => {
  //     browser.driver.sleep(10000);
  //   });
  //   element(by.tagName('.card')).isDisplayed;
  //   browser.driver.sleep(10000);
  // });

  // it('Acessar menu "Perfil" e fazer logout.', () => {

  //   element(by.id('tab-t0-5')).click().then(() => {
  //     browser.driver.sleep(3000);
  //   });

  //   element(by.id('logout')).click().then(() => {
  //     browser.driver.sleep(4000);
  //   });

  // });

});

