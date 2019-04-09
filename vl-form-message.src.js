import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * vl-ui-form-message
 *
 * @demo demo/vl-ui-form-message.html
 */
export class VlFormMessage extends NativeVlElement(HTMLLabelElement) {

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

customElements.define('vl-form-message', VlFormMessage, {extends: 'label'});