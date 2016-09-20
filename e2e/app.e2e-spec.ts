import { RoutingNg2Page } from './app.po';

describe('routing-ng2 App', function() {
  let page: RoutingNg2Page;

  beforeEach(() => {
    page = new RoutingNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
