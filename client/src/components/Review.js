import React from "react";
import { Button, Typography, Card, CardMedia } from "@material-ui/core";
import useStyles from "./styles";
import "./Review.css";

const Review = ({ formData, prevStep, submitForm }) => {
  const classes = useStyles();
  const hobbiesList = formData.hobbies.join(", "); // Join hobbies with commas
  return (
    <>
      <div className="review-container">
        <Typography variant="h2" style={{ paddingBottom: "15px" }}>
          Review Your Information
        </Typography>
        <div className={classes.formRow}>
          <div className={classes.formField}>
            <Typography className="fontsize">
              Name: {formData.firstName} {formData.lastName}
            </Typography>
            <Typography className="fontsize">Age: {formData.age}</Typography>
            <Typography className="fontsize">
              Email: {formData.email}
            </Typography>
            <Typography className="fontsize">
              Phone: {formData.phone}
            </Typography>
            <Typography className="fontsize">
              Alternate Phone: {formData.alternatemobile}
            </Typography>
            <Typography className="fontsize">
              Graduation: {formData.graduation}
            </Typography>
            <Typography className="fontsize">
              Gender: {formData.gender}
            </Typography>
            <Typography className="fontsize">Hobbies: {hobbiesList}</Typography>
            <Typography className="fontsize">
              Address: {formData.address}
            </Typography>
            <Typography className="fontsize">
              Country: {formData.country}
            </Typography>
            <Typography className="fontsize">
              State: {formData.state}
            </Typography>
            <Typography className="fontsize">City: {formData.city}</Typography>
            <Typography className="fontsize">
              Postal Code: {formData.postalCode}
            </Typography>
          </div>
          <div className={classes.formField}>
            {formData.profilePicture && (
              <Card className={classes.imagePreview}>
                <CardMedia
                  component="img"
                  image={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile Picture"
                />
              </Card>
            )}
          </div>
        </div>
      </div>
      <div className={classes.submit}>
        <Button type="button" onClick={prevStep}>
          Previous
        </Button>
        <Button type="submit" onClick={submitForm} className={classes.submit1}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Review;
