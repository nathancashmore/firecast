class SearchPage {
  constructor(browser) {
    this.browser = browser;
  }

  visit(path) {
    return this.browser.visit(`/search?path=${path}`);
  }

  menuItemContains(index, title) {
    return this.browser.assert.text(`#menu li:nth-child(${index})`, `${title}`);
  }

}
module.exports = SearchPage;
