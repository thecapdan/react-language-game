var assert = require("assert");

describe("Initial Page", function() {
  it("should successfully load the game", function() {
    browser.url('/');
    let pageTitle = browser.getTitle();
    assert.equal(pageTitle, "Language Game");
  });
});
