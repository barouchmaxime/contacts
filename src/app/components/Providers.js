import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { light } from "../themes";
import { Provider } from "react-redux";
import { store } from "../store";

export const Providers = ({ children }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={light}>{children}</MuiThemeProvider>
  </Provider>
);
