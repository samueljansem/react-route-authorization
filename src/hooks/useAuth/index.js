import { useState } from 'react';

const useAuth = (initialState) => {
  const [isAuth, setIsAuth] = useState(initialState);

  function login() {
    setIsAuth(true);
  }

  function logout() {
    setIsAuth(false);
  }

  return [isAuth, login, logout];
};

export default useAuth;
