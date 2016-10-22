import { VegetableBookPage } from './app.po';

describe('VegetableBook', function() {
  let page: VegetableBookPage;

  beforeEach(() => {
    page = new VegetableBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Vegetable book works!');
  });
});
