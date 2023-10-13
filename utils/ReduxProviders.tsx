"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./Redux_Store/store";

const ReduxProviders = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default ReduxProviders;
