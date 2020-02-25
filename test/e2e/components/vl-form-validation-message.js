const { VlElement } = require('vl-ui-core').Test;

class VlFormValidationMessage extends VlElement {  

    async isError() {
        return this.hasAttribute('error');
    }

    async isSuccess() {
        return this.hasAttribute('success');
    }
   
}

module.exports = VlFormValidationMessage;