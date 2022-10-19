const UserAdminDeleteAccountController = require('./UserAdminDeleteAccountController')

jest.mock("next-auth/delete", () => {
  return {
    UserAdminDeleteAccountController: () => { ok: true }
  }
})

test('delete an account', () => {
	const authConfig = { callbackUrl: undefined, redirect: false }
	const deleteButton = getByText(/delete/i)
	expect(true).toBe(true);

	expect(UserAdminDeleteAccountController).toHaveBeenCalledTimes(1) // Is called 0 times and test fails
})
