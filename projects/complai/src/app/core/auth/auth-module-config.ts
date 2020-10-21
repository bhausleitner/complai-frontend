import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [
      'https://localhost:44394/regulations',
      'http://localhost:44394/regulations',
      'https://dev-complai.azurewebsites.net',
    ], // this is the api url
    sendAccessToken: true,
  }
};
