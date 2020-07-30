import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";

import * as mutations from "../store/mutations";
import AppBar from "./AppBar";
import { Contacts } from "./Contacts";
import LoadingProgress from "./LoadingProgress";

const useStyles = makeStyles((theme) => ({}));
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

  return (
    <div>
      <AppBar />
      {isLoading ? <LoadingProgress /> : <Contacts contacts={contacts} />}
    </div>
  );
};
