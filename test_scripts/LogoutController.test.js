const LogoutController = require('./LogoutController')

jest.mock("next-auth/logout", () => {
  return {
    LogoutController: () => { ok: true }
  }
})

test("logout of the system", async () => {
  const authConfig = { callbackUrl: undefined, redirect: false }

  const { getByTestId, getByText } = render(<ValidateLogout>)
  const logoutButton = getByText(/submit/i)

  expect(true).toBe(true);

  expect(v).toHaveBeenCalledTimes(1) // Is called 0 times and test fails
})
