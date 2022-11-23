# Hubspot OAuth & JWT authentication using Nest.js & Passport.js

- Sign in with Hubspot OAuth & generate JWT.
- All routes are protected with JWT.
- Public routes using `@Public` decorator.

## Instruction

```bash
$ yarn install    # install dependencies
$ yarn start:dev  # run dev server
```

## Routes

<table>
  <tr>
    <th>Route</th>
    <th>Security</th>
    <th>Description</th>
  </tr>

  <tr>
    <td>
      <code>/health-check</code>
    </td>
    <td>Public</td>
    <td>Health check</td>
  </tr>

  <tr>
    <td>
      <code>/auth/sign-in</code>
    </td>
    <td>Public</td>
    <td>Show "sign in with hubspot" button</td>
  </tr>

  <tr>
    <td>
      <code>/auth/hubspot/sign-in</code>
    </td>
    <td>Public</td>
    <td>Redirect to hubspot authentication page</td>
  </tr>

  <tr>
    <td>
      <code>/auth/hubspot/callback</code>
    </td>
    <td>Public</td>
    <td>
    Returns access token used to request protected routes. 
    <br/>
    Hubspot will redirect to this route (after successful authentication) with code in url query. </td>
  </tr>

  <tr>
    <td>
      <code>/contacts</code>
    </td>
    <td>Protected</td>
    <td>List contacts in Hubspot.</td>
  </tr>
</table>
