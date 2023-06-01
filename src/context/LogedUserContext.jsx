import { createContext, useState } from 'react';

export const LogedUserContext = createContext();

export const LogedUserProvider = ({children}) => {
  const [logedUser, setLogedUser] = useState(undefined);
  console.log(logedUser);

  return (
    <LogedUserContext.Provider value={{ logedUser, setLogedUser }}>
      {children}
    </LogedUserContext.Provider>
  );
}