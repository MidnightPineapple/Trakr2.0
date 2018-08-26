export const protocol = process.env.NODE_ENV === "production" ? "https://" : "http://";
export const serverUrl = process.env.NODE_ENV === "production" ? protocol + "lara-trakr.herokuapp.com": protocol + "trakr.test" ;
export const authUri = "/oauth/authorize";
export const authRedirect = serverUrl;
export const authClientId = 1;
export const graphQLUri = "/graphql";


