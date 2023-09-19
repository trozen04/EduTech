import { Selector } from 'testcafe';

fixture`Login Test`
    .page`http://localhost:your_port/index.html`; // Replace with your actual localhost and port

test('User can log in', async t => {
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const loginButton = Selector('input[type="submit"]');
    const loginStatus = Selector('#loginStatus');

    await t
        .typeText(usernameInput, 'your_username')
        .typeText(passwordInput, 'your_password')
        .click(loginButton)
        .expect(loginStatus.textContent).eql('Login successful!');
});
