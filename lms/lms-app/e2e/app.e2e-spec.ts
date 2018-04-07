import { LmsAppPage } from './app.po';

describe('lms-app App', function() {
  let page: LmsAppPage;

  beforeEach(() => {
    page = new LmsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
