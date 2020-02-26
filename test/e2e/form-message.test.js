const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlFormMessage = require('./pages/vl-form-message.page');

describe('vl-form-message', async () => {
    const vlFormMessage = new VlFormMessage(driver);

    before(() => {
        return vlFormMessage.load();
    });

    it("Dummy test om de browsers te laten sluiten", () => {
    	assert.isTrue(true);
    });
});
