import { After } from '@cucumber/cucumber';

After(async (scenario) => {
    if (scenario.pickle.tags.some(tag => tag.name === '@positiveLogin')) {
        await browser.deleteCookies();
        await browser.execute(() => {
            localStorage.clear();
        });
    }
});
