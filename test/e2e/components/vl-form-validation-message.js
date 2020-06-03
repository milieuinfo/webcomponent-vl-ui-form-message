const {VlElement} = require('vl-ui-core').Test;

class VlFormValidationMessage extends VlElement {
  async isError() {
    return this.hasClass('vl-form__error');
  }

  async isSuccess() {
    return this.hasClass('vl-form__success');
  }

  async isBlock() {
    return this.hasAttribute('block');
  }
}

module.exports = VlFormValidationMessage;
