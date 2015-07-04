'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('myApp module', function() {

  beforeEach(function() {
    browser.get('index.html');
  });

  it('should automatically redirect to /popular-shots when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/popular-shots");
  });

  it('should check that 12 items are retrieved from web service and loaded in the single page', function () {
    expect(element.all(by.repeater('shot in shots')).count()).toEqual(12);
  });

  it('should click in the icon that call the second page and then, click to go back to first one', function() {
    element(by.css('.glyphicon-circle-arrow-right')).click();
    expect(element.all(by.repeater('shot in shots')).count()).toEqual(12);
    element(by.css('.glyphicon-circle-arrow-left')).click();
    expect(element.all(by.repeater('shot in shots')).count()).toEqual(12);
  });

  it('should open and close the modal pop-up after a click', function() {
    element(by.repeater('shot in shots').row(0)).element(by.css('.img-container')).click();
    //expect(element(by.css('.modal-footer')).count()).toBe(1);
  });

  it('should compare retrieved items with the visualized items', function() {
    // TODO
  });

  it('should force more than 60 clicks in navigation to confirm the treatment', function() {
    // TODO
  });

  it('should simulate a non-existent page while navigating', function() {
    // TODO
  });

});
