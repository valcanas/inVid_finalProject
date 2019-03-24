const TOKEN = "token";

export const saveToken = token => {
  if (token) {
    localStorage.setItem(TOKEN, JSON.stringify(token.token));
    console.log(JSON.stringify(token.token));
  } else {
    localStorage.removeItem(TOKEN);
    console.log(token);
    console.log(JSON.stringify(token));
  }
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN);
};

export const getToken = () => {
  const token = localStorage.getItem(TOKEN);
  if (token !== null) {
    return JSON.parse(token);
  }
  return null;
};

export const isAuth = () => getToken() != null;
