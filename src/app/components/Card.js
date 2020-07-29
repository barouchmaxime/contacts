import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import clsx from "clsx";
import * as Yup from "yup";

import { makeValidationForSchema } from "../utils/validate";
import { Field } from "./Field";

const useStyles = makeStyles({
  root: {
    maxWidth: 135,
    minWidth: 135,
    maxHeight: 250,
    minHeight: 250,
    margin: 5,
    "&:hover": {
      "& img.avatar": {
        height: 120,
      },
      "& .phone, & .email": {
        display: "block",
      },
    },
  },
  image: {
    height: 150,
    objectPosition: "top",
  },
  phone: {
    display: "none",
  },
  email: {
    display: "none",
  },
  action: {
    padding: "10px",
    "& .MuiCardActionArea-focusHighlight": {
      backgroundColor: "#ffffff",
    },
  },
  content: {
    position: "relative",
    padding: "25px 0 0 0",
  },
  iconRoot: {
    position: "absolute",
    top: -15,
    left: 10,
  },
  name: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
const validate = makeValidationForSchema(
  Yup.object({
    name: Yup.string().required(),
    profile_image: Yup.string().required(),
    driverType: Yup.string().required(),
    driverRank: Yup.number().required(),
    email: Yup.string().email().required(),
    phone: Yup.string()
      .matches(phoneRegex, "Invalid phone number")
      .required("Phone is required"),
  })
);
export default ({ card }) => {
  const classes = useStyles();
  const errors = validate(card);
  // console.log("errors=", errors);
  return (
    <form>
      <Card className={classes.root}>
        <CardActionArea className={classes.action}>
          <CardMedia
            className={clsx("avatar", classes.image)}
            component="img"
            alt="Avatar"
            src={card.profile_image}
            title="Please upload you profile picture"
          />
          <CardContent className={classes.content}>
            <Icon fontSize="large" classes={{ root: classes.iconRoot }}>
              {card.driverType &&
              card.driverType.trim().toLowerCase() === "citizen" ? (
                <img width="32px" src="/assets/images/citizen.svg" />
              ) : (
                <img width="32px" src="/assets/images/professional.svg" />
              )}
            </Icon>
            <Field
              classField={classes.name}
              value={card.name}
              error={errors?.name}
            />
            <Field value={card.driverRank} error={errors?.driverRank} />
            <div className={clsx("phone", classes.phone)}>
              <Field
                label="Phone Number:"
                value={card.phone}
                error={errors?.phone}
              />
            </div>
            <div className={clsx("email", classes.email)}>
              <Field label="Email:" value={card.email} error={errors?.email} />
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </form>
  );
};
