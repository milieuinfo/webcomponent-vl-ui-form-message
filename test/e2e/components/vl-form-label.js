const { VlElement } = require('vl-ui-core').Test;

class VlFormLabel extends VlElement {  

    async isLight() {
        return this.hasAttribute('light');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }
    
}

module.exports = VlFormLabel;