import React from "react";
import { Login, Logout } from "./Api";
import { isAuthenticated } from "./Api";
// components

// user context
const UserContext = React.createContext(null);

// user provider
function UserProvider(props) {
  const [user, setUser] = React.useState(false); // user (or false if not logged in)

  // fetch user on mount
  React.useEffect(() => {
    // checks if user is logged in
    console.log("Is authenticated is called");
    isAuthenticated()
      .then(function (response) {
        setUser(response.data.id);
      })
      .catch((error) => {
        setUser(false);
      });
  }, []); // run only once

  const login = React.useCallback(async (data) => {
    const response = await Login(data);
    if (response.status === 200) {
      console.log(response.data.user.id);
      setUser(response.data.user.id);
    }
    return response;
  }, []);

  const logout = React.useCallback(() => {
    Logout().then(function () {
      setUser(false);
    });
  }, []);

  // memo functions to optimise re-renders
  const contextValue = React.useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <UserContext.Provider value={contextValue} {...props} />;
}

// use user context hook
function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser() must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
