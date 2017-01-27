import { WEAWuzlHubPage } from './app.po';

describe('weawuzl-hub App', function() {
  let page: WEAWuzlHubPage;

  beforeEach(() => {
    page = new WEAWuzlHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
