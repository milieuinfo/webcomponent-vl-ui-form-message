const {VlElement} = require('vl-ui-core').Test;

class VlFormElement extends VlElement {
  async text() {
    const textContents = await this.getText();
    const regex = new RegExp('\n', 'g');
    return textContents.replace(regex, '').trim();
  }
}

module.exports = {VlFormElement};
