const LoginController = require('./LoginController')

jest.mock("next-auth/login", () => {
  return {
    LoginController: () => { ok: true }
  }
})

test("login to the system", async () => {
  const validUsername = "useradmin1"
  const password = "admin123"
  const authConfig = { callbackUrl: undefined, redirect: false }

  const { getByTestId, getByText } = render(<loginUser>)
  const signInButton = getByText(/submit/i)

  user.type(username, password)
  expect(true).toBe(true);

  expect(LoginController).toHaveBeenCalledTimes(1) // Is called 0 times and test fails
})
