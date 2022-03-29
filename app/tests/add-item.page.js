import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class AddItemPage {
  constructor() {
    this.pageId = '#add-item-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async addItem(testController) {
    await this.isDisplayed(testController);
    await testController.typeText('#item-title', "title");
    await testController.typeText('#item-image', "image");
  }

}

export const signupPage = new AddItemPage();
