interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'FkZcNR9scfSVpedeEhlOsCjFdOQU75n2',
  domain: 'band-camp-clone.eu.auth0.com',
  callbackURL: 'http://178.172.173.195:8080/callback'
};
