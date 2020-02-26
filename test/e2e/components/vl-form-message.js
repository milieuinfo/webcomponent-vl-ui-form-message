const { VlElement } = require('vl-ui-core').Test;
class VlFormMessage extends VlElement {  
    async isLight() {
        return this.hasAttribute('light');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }

    async isAnnotation() {
        return this.getAttribute('is').indexOf('annotation') > 0;
    }

    async isError() {
        return this.hasAttribute('error');
    }

    async isErrorBlock() {
        return this.hasAttribute('error') && this.hasAttribute('block');
    }

    async isSuccess() {
        return this.hasAttribute('success');
    }
}

module.exports = VlFormMessage;
