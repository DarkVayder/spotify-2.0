import React, { createContext, useContext, useReducer } from "react"; // Fix the import statement

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // Fix useReducer arguments

  return (
    <DataLayerContext.Provider value={{ state, dispatch }}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);