import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";

import * as mutations from "../store/mutations";
import AppBar from "./AppBar";
import { Contacts } from "./Contacts";
import LoadingProgress from "./LoadingProgress";
//import { useErrorHandler } from "react-error-boundary";
import ErrorFallback from "./Error";

const useStyles = makeStyles((theme) => ({
  alert: {
    paddingLeft: 25,
  },
}));
const selectFilteredContacts = createSelector(
  (state) => state.contacts,
  (state) => state.search,
  (contacts, search) =>
    contacts.filter(
      (contact) => contact.name && contact.name.toLowerCase().includes(search)
    )
);

export const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mutations.loadContacts());
  }, [dispatch]);
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector((state) => state.isLoading);
  const errorMessage = useSelector((state) => state.errorMessage);
  console.log(errorMessage);
  /* if (errorMessage) {
    useErrorHandler(new Error(errorMessage));
  } */
  return (
    <div>
      <AppBar />
      {isLoading ? <LoadingProgress /> : <Contacts contacts={contacts} />}
      {errorMessage && (
        <ErrorFallback classes={classes} error={new Error(errorMessage)} />
      )}
    </div>
  );
};
