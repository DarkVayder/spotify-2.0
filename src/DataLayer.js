import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); 

  return (
    <DataLayerContext.Provider value={"string"}>
      {children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);