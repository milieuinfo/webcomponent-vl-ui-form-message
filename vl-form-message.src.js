import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.src.js';

/**
 * VlFormLabel
 * @class
 * @classdesc Gebruik de vl-form-label om labels toe te voegen aan een formulier. <a href="demo/vl-form-label.html">Demo</a>.
 * 
 * @extends VlElement
 * 
 * @property {boolean} light - Attribuut wordt gebruikt om het label in een lichte kleur te tonen.
 * @property {boolean} block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormLabel extends NativeVlElement(HTMLLabelElement) {

  static get _observedClassAttributes() {
    return ['light', 'block'];
  }

  connectedCallback() {
    this.classList.add('vl-form__label');
  }

  get _classPrefix() {
    return 'vl-form__label--';
  }
  
  get _stylePath() {
    return '../style.css';
  }
}

export class VlFormValidation extends NativeVlElement(HTMLParagraphElement) {

  static get _observedClassAttributes() {
    return ['block'];
  }

  get _type() {
    if (this.hasAttribute("success")) {
      return "success"
    }
    return "error";
  }

  connectedCallback() {
    this.classList.add(`vl-form__${this._type}`);
    this._addCheckIfSuccess();
  }

  _getCheckTemplate() {
    return this._template('<span class="vl-vi vl-vi-check" aria-hidden="true"></span>');
  }

  _addCheckIfSuccess() {
    if (this._type === 'success') {
      this._element.append(this._getCheckTemplate());
    }
  }

  get _classPrefix() {
    return `vl-form__${this._type}--`;
  }

  get _stylePath() {
    return '../style.css';
  }
}

define('vl-form-label', VlFormLabel, {extends: 'label'});
define('vl-form-validation', VlFormValidation, {extends: 'p'});