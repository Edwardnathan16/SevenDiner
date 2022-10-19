const UserAdminUpdateAccountController = require('./UserAdminUpdateAccountController')

jest.mock("next-auth/update", () => {
  return {
    UserAdminUpdateAccountController: () => { ok: true }
  }
})

test("account updated successfully", async () => {
	const validUsername = "useradmin2"
	const email = "useradmin2@a.com"
    const password = "admin222"
	const firstName = "Admin2"
	const lastName = "Admin2"
	const role = "useradmin"
    const authConfig = { callbackUrl: undefined, redirect: false }

    const { getByTestId, getByText } = render(<UpdateUserAccount>)
    const updateButton = getByText(/submit/i)

    user.type(username, email, password, firstName, lastName)
    expect(true).toBe(true);

    expect(UserAdminUpdateAccountController).toHaveBeenCalledTimes(1) // Is called 0 times and test fails
 })
