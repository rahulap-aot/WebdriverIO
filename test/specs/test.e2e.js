describe('Open React App Button Test', () => {
    it('should open the React app and perform actions', async () => {
        // Navigate to the specified URL
        await browser.url('https://kasinathanb.vercel.app/projects');

        // Wait for the button to be displayed and click it
        const openReactAppButton = await $('#openReactApp');
        await openReactAppButton.waitForDisplayed({ timeout: 10000 });
        await openReactAppButton.click();

        // Wait for the task name input to be displayed and click it
        const taskNameInput = await $('#taskName');
        await taskNameInput.waitForDisplayed({ timeout: 10000 });
        await taskNameInput.click();

        // Type into the task name input
        await taskNameInput.setValue('abhi');

        // Wait for the button in the upper div to be displayed and click it
        const myExtBtn = await $('.upperDiv:nth-child(1) > .myextBtn');
        await myExtBtn.waitForDisplayed({ timeout: 10000 });
        await myExtBtn.click();
    });
});
