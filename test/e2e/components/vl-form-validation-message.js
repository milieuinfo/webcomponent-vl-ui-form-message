const {VlFormElement} = require('./vl-form-element');

class VlFormValidationMessage extends VlFormElement {
  async isError() {
    return this.hasClass('vl-form__error');
  }

  async isSuccess() {
    return this.hasClass('vl-form__success');
  }

  async isBlock() {
    return this.hasAttribute('block');
  }

  async text() {
    const textContents = await this.getText();
    const regex = new RegExp('\n', 'g');
    return textContents.replace(regex, '').trim();
  }
}

module.exports = VlFormValidationMessage;
