const TOKEN = "token";

export const checkToken = token => {
  let isAuth = "false";
  const tokenStorage = localStorage.getItem(TOKEN);
  const tokenRedux = token;
  if (tokenStorage || tokenRedux) {
    isAuth = "true";
  }
  return isAuth;
};
