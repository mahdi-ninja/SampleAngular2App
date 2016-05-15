export class SampleAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sample-app-app h1')).getText();
  }
}
