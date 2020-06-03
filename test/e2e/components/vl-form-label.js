const {VlElement} = require('vl-ui-core').Test;

class VlFormLabel extends VlElement {
  async isLight() {
    return this.hasAttribute('light');
  }

  async isBlock() {
    return this.hasAttribute('block');
  }

  async isFor() {
    return this.getAttribute('for');
  }
}

module.exports = VlFormLabel;
