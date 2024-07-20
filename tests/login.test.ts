import { expect, test } from '@playwright/test';
import { GO_EVENT_URL } from '../utils/Constants';
import { LoginPage, LandingPage, AccountPage } from '../pages';
import { sucessfulLoginUser } from '../fixture/loginUser';

let landingPage: LandingPage;
let loginPage: LoginPage;
let accountPage: AccountPage;

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  await page.goto(GO_EVENT_URL);
  landingPage = new LandingPage(page);
  loginPage = new LoginPage(page);
});

test('non existent account test', async () => {
  await landingPage.clickOnLoginBtn();
  await loginPage.enterEmailForLogin('nonvalid@mail.com');
  await loginPage.clickOnSignInBtn();
  await loginPage.verifyAccountNotFound();
});
test('successful login test', async () => {
  await landingPage.clickOnLoginBtn();
  await loginPage.enterEmailForLogin(sucessfulLoginUser.email);
  await loginPage.clickOnSignInBtn();
  await loginPage.enterpasswordForLogin(sucessfulLoginUser.password);
  await loginPage.clickOnSignInBtn();
});
test.afterEach('Status check', async ({ page }, testInfo) => {
  console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

  if (testInfo.status !== testInfo.expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});
