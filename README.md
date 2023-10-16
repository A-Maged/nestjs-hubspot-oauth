# Hubspot OAuth & JWT authentication using Nest.js & Passport.js

- Sign in with Hubspot OAuth & generate JWT.
- All routes are protected with JWT.
- Public routes using `@Public` decorator.

## Perquisites

1. Check [Hubspot OAuth Docs](https://developers.hubspot.com/docs/api/working-with-oauth)

2. run the following command to create .env file

   ```bash
   $ cp .env.example .env
   ```

3. Create a developer account
4. Create a hubspot app
5. Open the hubspot app page, then navigate to the "Auth" tab
6. Change the redirect url to be "http://localhost:3000/auth/hubspot/callback"
7. Add desired scopes
8. Save changes
9. Copy from hubspot app page to `.env` the following:

   - `Client ID` to `HUBSPOT_CLIENT_ID`
   - `Client secret` to `HUBSPOT_CLIENT_SECRET`
   - `Install URL(OAuth)` to `HUBSPOT_AUTHORIZATION_URL`
   - one `Redirect URLs` to `HUBSPOT_REDIRECT_URL`
   - `Selected scopes` to `HUBSPOT_SCOPE` as a space separated string. Example: "crm.lists.read crm.objects.contacts.read"

## Getting Started

1. Run the following commands to install & start the app:

   ```bash
   $ yarn install    # install dependencies
   $ yarn start:dev  # run dev server
   ```

2. Navigate to http://localhost:3000/auth/sign-in and click on "sign in with Hubspot"

3. Click to Install the app, then you'll be redirected to a page that contains the access token.

4. send a GET request to http://localhost:3000/contacts with the access token in the authorization header prefixed with `Bearer `

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
