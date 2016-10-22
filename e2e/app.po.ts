import { browser, element, by } from 'protractor/globals';

export class VegetableBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vbook-root h1')).getText();
  }
}
