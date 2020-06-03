const {VlFormElement} = require('./vl-form-element');

class VlFormAnnotation extends VlFormElement {
  async isBlock() {
    return this.hasAttribute('block');
  }
}

module.exports = VlFormAnnotation;
