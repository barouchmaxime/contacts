import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    height: 40,
  },
  toolbar: {
    paddingLeft: 48,
    minHeight: 40,
  },
  title: {
    flexGrow: 1,
    display: "none",
    fontWeight: "bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h7" noWrap>
            Contact List
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
}
