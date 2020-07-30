import React from "react";
import { withErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./components/Error";
import Main from "./components/Main";

const myApp = () => {
  return <Main />;
};
export const App = withErrorBoundary(myApp, {
  FallbackComponent: ErrorFallback,
});
