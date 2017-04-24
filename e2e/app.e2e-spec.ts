import { LoadobjPage } from './app.po';

describe('loadobj App', () => {
  let page: LoadobjPage;

  beforeEach(() => {
    page = new LoadobjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
