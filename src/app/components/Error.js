import React from "react";
export default ({ error, classes }) => {
  return (
    <div role="alert" className={classes?.alert}>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};
