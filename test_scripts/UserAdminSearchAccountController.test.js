const UserAdminSearchAccountController = require('./UserAdminSearchAccountController')

jest.mock("next-auth/search", () => {
  return {
    UserAdminSearchAccountController: () => { ok: true }
  }
})

test('search an account', () => {
	const data = getByText(/searchData/i)

	const authConfig = { callbackUrl: undefined, redirect: false }
	const submit = getByText(/submit/i)
	expect(true).toBe(true);

	expect(UserAdminSearchAccountController).toHaveBeenCalledTimes(1) // Is called 0 times and test fails
})
