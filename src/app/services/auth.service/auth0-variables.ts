interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'yMOoMB10FCDcX2Pqa33PXeXNsSrNcZ7a',
  domain: 'band-camp-clone.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
