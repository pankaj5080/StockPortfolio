import { StockPortfolioPage } from './app.po';

describe('stock-portfolio App', function() {
  let page: StockPortfolioPage;

  beforeEach(() => {
    page = new StockPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
