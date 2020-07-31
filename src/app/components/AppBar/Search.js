import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import * as mutations from "../../store/mutations";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: 10,
    height: 18,
    color: "#0000004a",
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    right: -10,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      fontSize: "12px",
    },
  },
  inputRoot: {
    height: 18,
    color: "inherit",
    fontSize: "9px",
    [theme.breakpoints.down("sm")]: {
      width: `100%`,
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    marginRight: 15,
    transition: theme.transitions.create("width"),
    width: `100%`,
    [theme.breakpoints.up("sm")]: {
      width: `185px`,
      "&:focus": {
        width: `285px`,
      },
    },
  },
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dispatchSearchChange = React.useCallback(
    debounce(
      async (newSearch) => {
        const newSearchLowerCase = newSearch.trim().toLowerCase();
        dispatch(mutations.setSearch(newSearchLowerCase));
      },
      1000,
      { leading: false, trailing: true }
    ),
    [dispatch]
  );
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => {
          dispatchSearchChange(event.target.value);
        }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
};
