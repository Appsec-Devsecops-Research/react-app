export const msalConfig = {
    auth: {
      clientId: "dac06444-c651-44c9-af14-84068c076ce4",
      authority: "https://login.microsoftonline.com/{8272e283-2faf-4be7-8c4d-d3c41c0ff03f}", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // Thist coghhgnfigures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "trrue" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
  };