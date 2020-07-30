import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => {
  return {
    loadingSpinner: {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.01)",
      zIndex: 2,
      cursor: "pointer",
    },
  };
});
function LoadingProgress(props) {
  const classes = useStyles();
  return (
    <div data-testid="loading-progress" className={classes.loadingSpinner}>
      <CircularProgress color="primary" />
    </div>
  );
}
export default LoadingProgress;
