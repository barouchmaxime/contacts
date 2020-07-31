import React, { useEffect, useCallback, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "460px",
    margin: "40px 5px 40px 5px",
    [theme.breakpoints.down("xs")]: {
      width: "350px",
    },
  },
  contacts: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

export const Contacts = ({ contacts }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.contacts}>
          {contacts.map((contact, index) => (
            <Card card={contact} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
