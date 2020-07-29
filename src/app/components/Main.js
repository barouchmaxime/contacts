import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Dashboard } from "./Dashboard";
import { Providers } from "./Providers";

export const Main = () => (
  <Providers>
    <CssBaseline />
    <Dashboard />
  </Providers>
);
