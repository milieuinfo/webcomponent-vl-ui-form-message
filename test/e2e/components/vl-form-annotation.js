const {VlElement} = require('vl-ui-core').Test;

class VlFormAnnotation extends VlElement {
  async isBlock() {
    return this.hasAttribute('block');
  }
}

module.exports = VlFormAnnotation;
