const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlFormMessagePage = require('./pages/vl-form-message.page');

describe('vl-form-message', async () => {
    const vlFormMessagePage = new VlFormMessagePage(driver);

    before(() => {
        return vlFormMessagePage.load();
    });

    it('Als gebruiker kan ik een gewoon label zien', async() => {
        const label = await vlFormMessagePage.getFormLabel();
        await assert.eventually.isFalse(label.isBlock());
        await assert.eventually.isFalse(label.isLight());
    });

    it('Als gebruiker kan ik een light label zien', async() => {
        const label = await vlFormMessagePage.getFormLabelLight();
        await assert.eventually.isTrue(label.isLight());
        await assert.eventually.isFalse(label.isBlock());
    });

    it('Als gebruiker kan ik een block label zien', async() => {
        const label = await vlFormMessagePage.getFormLabelBlock();
        await assert.eventually.isTrue(label.isBlock());
        await assert.eventually.isFalse(label.isLight());
    });

    it('Als gebruiker kan ik een form annotation zien', async() => {
        const label = await vlFormMessagePage.getFormAnnotation();
        await assert.eventually.isFalse(label.isBlock());
    });

    it('Als gebruiker kan ik een form annotation block zien', async() => {
        const label = await vlFormMessagePage.getFormAnnotationBlock();
        await assert.eventually.isTrue(label.isBlock());
    });

    // it.only('Als gebruiker kan ik een form validation message met een error zien', async() => {
    //     const label = await vlFormMessagePage.getFormValidationMessageError();
    //     await assert.eventually.isTrue(label.isError());
    //     await assert.eventually.isFalse(label.isSuccess());
    //     await assert.eventually.isFalse(label.isBlock());
    // });

    // it.only('Als gebruiker kan ik een form validation message met een error block zien', async() => {
    //     const label = await vlFormMessagePage.getFormValidationMessageBlockError();
    //     await assert.eventually.isTrue(label.isError());
    //     await assert.eventually.isTrue(label.isBlock());
    //     await assert.eventually.isFalse(label.isSuccess());
    // });

    // it.only('Als gebruiker kan ik een form alidation message met een success zien', async() => {
    //     const label = await vlFormMessagePage.getFormValidationMessageSuccess();
    //     await assert.eventually.isTrue(label.isSuccess());
    //     await assert.eventually.isFalse(label.isError());
    //     await assert.eventually.isFalse(label.isBlock());
    // });


    after(async () => {
        return driver.quit();
    });
});
