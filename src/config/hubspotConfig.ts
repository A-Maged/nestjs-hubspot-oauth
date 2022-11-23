export default () => ({
  hubspot: {
    clientId: process.env.HUBSPOT_CLIENT_ID,
    clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
    authorizationURL: process.env.HUBSPOT_AUTHORIZATION_URL,
    redirectUri: process.env.HUBSPOT_REDIRECT_URL,
    scope: process.env.HUBSPOT_SCOPE,
  },
});
