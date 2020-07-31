import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "7px",
    color: "grey",
  },
  labelFieldContainer: {
    display: "flex",
    flexWrap: "no-wrap",
    width: "100%",
    marginTop: "5px",
  },
  label: {
    flex: "0 0 auto",
  },
  labelField: {
    margin: "0 0 0 3px",
    flex: "1 1 auto",
  },
  extensibleField: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    "&:hover": {
      overflow: "visible",
    },
  },
  errorField: {
    borderColor: "red",
    borderWidth: 2,
    borderStyle: "solid",
  },
  field: {
    marginTop: "3px",
  },
  error: {
    fontSize: "6px",
    color: "red",
  },
}));

export const Field = ({
  label,
  classLabel,
  value,
  classField,
  error,
  classError,
}) => {
  const classes = useStyles();
  return (
    <>
      {label ? (
        <>
          <div className={classes.labelFieldContainer}>
            <div className={clsx(classes.text, classes.label, classLabel)}>
              {label}
            </div>
            <div
              className={clsx(
                classes.text,
                classes.labelField,
                classes.extensibleField,
                classField,
                {
                  [classes.errorField]: error,
                }
              )}
            >
              {value}
            </div>
          </div>
        </>
      ) : (
        <div
          className={clsx(
            classes.text,
            classes.field,
            classes.extensibleField,
            classField,
            {
              [classes.errorField]: error,
            }
          )}
        >
          {value}
        </div>
      )}
      {error ? (
        <div className={clsx(classes.text, classes.error, classError)}>
          {error}
        </div>
      ) : null}
    </>
  );
};
