import { SmartRevaPage } from './app.po';

describe('smart-reva App', function() {
  let page: SmartRevaPage;

  beforeEach(() => {
    page = new SmartRevaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
