import { CrowdfundingPlatformPage } from './app.po';

describe('crowdfunding-platform App', () => {
  let page: CrowdfundingPlatformPage;

  beforeEach(() => {
    page = new CrowdfundingPlatformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
