import { AjDuPage } from './app.po';

describe('aj-du App', function() {
  let page: AjDuPage;

  beforeEach(() => {
    page = new AjDuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
