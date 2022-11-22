import React , {createContext}from "react";

// interface List {
//   name: string;
// }

export const listContext = createContext<string[]>([]);

export const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    <listContext.Provider value={["satish","kumar"]}>
      {children}
    </listContext.Provider>
  )
}