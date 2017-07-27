import { MissingWordsPage } from './app.po';

describe('missing-words App', () => {
  let page: MissingWordsPage;

  beforeEach(() => {
    page = new MissingWordsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
