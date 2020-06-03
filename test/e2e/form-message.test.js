const {assert, driver} = require('vl-ui-core').Test.Setup;
const VlFormMessagePage = require('./pages/vl-form-message.page');

describe('vl-form-message', async () => {
  const vlFormMessagePage = new VlFormMessagePage(driver);

  before(() => {
    return vlFormMessagePage.load();
  });

  it('Als gebruiker kan ik een gewoon label zien', async () => {
    const label = await vlFormMessagePage.getFormLabel();
    await assert.eventually.isTrue(label.isDisplayed());
    await assert.eventually.equal(label.isFor(), 'demo-label');
    await assert.eventually.equal(label.text(), 'foobar');
  });

  it('Als gebruiker kan ik het onderscheid zien tussen een gewoon en een light label', async () => {
    const labelNotLight = await vlFormMessagePage.getFormLabel();
    const labelLight = await vlFormMessagePage.getFormLabelLight();
    await assert.eventually.isFalse(labelNotLight.isLight());
    await assert.eventually.isTrue(labelLight.isLight());
  });

  it('Als gebruiker kan ik het onderscheid zien tussen een gewoon label en een block label', async () => {
    const labelNotBlock = await vlFormMessagePage.getFormLabel();
    const labelBlock = await vlFormMessagePage.getFormLabelBlock();
    await assert.eventually.isFalse(labelNotBlock.isBlock());
    await assert.eventually.isTrue(labelBlock.isBlock());
  });

  it('Als gebruiker kan ik een form annotation zien', async () => {
    const annotation = await vlFormMessagePage.getFormAnnotation();
    await assert.eventually.isTrue(annotation.isDisplayed());
    await assert.eventually.equal(annotation.text(), 'De naam van het evenement moet minstens 12 karakters tellen.');
  });

  it('Als gebruiker kan ik een form validation message met een error zien', async () => {
    const formValidationMessage = await vlFormMessagePage.getFormValidationMessageError();
    await assert.eventually.isTrue(formValidationMessage.isDisplayed());
    await assert.eventually.equal(formValidationMessage.text(), 'Het veld \'Naam evenement\' is een verplicht veld.');
  });

  it('Als gebruiker kan ik het onderscheid zien tussen een gewone form validation message en een success form validation message', async () => {
    const formValidationMessageError = await vlFormMessagePage.getFormValidationMessageError();
    await assert.eventually.isFalse(formValidationMessageError.isSuccess());
    await assert.eventually.isTrue(formValidationMessageError.isError());

    const formValidationMessageSuccess = await vlFormMessagePage.getFormValidationMessageSuccess();
    await assert.eventually.isTrue(formValidationMessageSuccess.isSuccess());
    await assert.eventually.isFalse(formValidationMessageSuccess.isError());
  });
});
