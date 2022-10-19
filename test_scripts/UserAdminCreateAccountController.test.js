const UserAdminCreateAccountController = require('./UserAdminCreateAccountController')

jest.mock("next-auth/signup", () => {
  return {
    UserAdminCreateAccountController: () => { ok: true }
  }
})

test("account created successfully", async () => {
	const validUsername = "useradmin1"
	const email = "useradmin1@a.com"
    const password = "admin123"
	const firstName = "Admin1"
	const lastName = "Admin1"
	const role = "useradmin"
    const authConfig = { callbackUrl: undefined, redirect: false }

    const { getByTestId, getByText } = render(<CreateUserAccount>)
    const signUpButton = getByText(/submit/i)

    user.type(username, email, password, firstName, lastName)
    expect(true).toBe(true);

    expect(UserAdminCreateAccountController).toHaveBeenCalledTimes(1) // Is called 0 times and test fails
 })
