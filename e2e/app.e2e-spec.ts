import { VoodoowalletPage } from './app.po';

describe('voodoowallet App', function() {
  let page: VoodoowalletPage;

  beforeEach(() => {
    page = new VoodoowalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
