import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Dashboard } from "./Dashboard";
import { Providers } from "./Providers";

export default () => (
  <Providers>
    <CssBaseline />
    <Dashboard />
  </Providers>
);
