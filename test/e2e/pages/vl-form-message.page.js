const VlFormLabel = require('../components/vl-form-label');
const VlFormAnnotation = require('../components/vl-form-annotation');
const VlFormValidationMessage = require('../components/vl-form-validation-message');
const {Page, Config} = require('vl-ui-core').Test;

class VlFormMessagePage extends Page {
  async _getFormLabel(selector) {
    return new VlFormLabel(this.driver, selector);
  }

  async _getFormAnnotation(selector) {
    return new VlFormAnnotation(this.driver, selector);
  }

  async _getFormValidationMessage(selector) {
    return new VlFormValidationMessage(this.driver, selector);
  }

  async getFormLabel() {
    return this._getFormLabel('#form-label');
  }

  async getFormLabelLight() {
    return this._getFormLabel('#form-label-light');
  }

  async getFormLabelBlock() {
    return this._getFormLabel('#form-label-block');
  }

  async getFormAnnotation() {
    return this._getFormAnnotation('#form-annotation');
  }

  async getFormAnnotationBlock() {
    return this._getFormAnnotation('#form-annotation-block');
  }

  async getFormValidationMessageError() {
    return this._getFormValidationMessage('#form-validation-message-error');
  }

  async getFormValidationMessageBlockError() {
    return this._getFormValidationMessage('#form-validation-message-block-error');
  }

  async getFormValidationMessageSuccess() {
    return this._getFormValidationMessage('#form-validation-message-success');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-form-message.html');
  }
}

module.exports = VlFormMessagePage;
