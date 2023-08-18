import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button, TextField, Card, CardMedia } from "@material-ui/core";
import useStyles from "./styles";

const PersonalInformation = ({ formData, setFormData, nextStep }) => {
  const classes = useStyles();
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [isProfilePictureUploaded, setIsProfilePictureUploaded] =
    useState(false);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .min(4, "Minimum 4 characters required"),
    lastName: Yup.string()
      .required("Last Name is required")
      .min(4, "Minimum 4 characters required"),
    age: Yup.number()
      .required("Age is required")
      .positive("Age must be a positive number"),
    profilePicture: Yup.mixed()
      .required("Profile Picture is required")
      .test("fileSize", "File size is too large", (value) => {
        return value ? value.size <= 5000000 : true;
      })
      .test("fileType", "Invalid file type", (value) => {
        return value ? value.type.startsWith("image/") : true;
      }),
  });

  const handleSubmit = (values) => {
    setFormData(values);
    nextStep();
  };

  const handleProfilePictureChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      setProfilePicturePreview(URL.createObjectURL(file));
      setIsProfilePictureUploaded(true);
    } else {
      setProfilePicturePreview(null);
      setIsProfilePictureUploaded(false); //when profile picture is not uploaded
    }
    setFieldValue("profilePicture", file);
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div className={classes.formRow}>
            <div className={classes.formField}>
              <div className={classes.formRow}>
                <Field
                  as={TextField}
                  name="firstName"
                  label="First Name *"
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
              </div>
              <div className={classes.formRow}>
                <Field
                  as={TextField}
                  name="lastName"
                  label="Last Name *"
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
              </div>
              <div className={classes.formRow}>
                <Field
                  as={TextField}
                  type="number"
                  name="age"
                  label="Age *"
                  error={touched.age && !!errors.age}
                  helperText={touched.age && errors.age}
                />
              </div>
            </div>
            <div className={classes.formField}>
              <input
                id="profilePicture"
                name="profilePicture"
                type="file"
                onChange={(event) =>
                  handleProfilePictureChange(event, setFieldValue)
                }
                style={{ display: "none" }}
                required
              />
              <label htmlFor="profilePicture">
                <Button component="span" variant="contained" color="primary">
                  Upload Profile Picture
                </Button>
              </label>
              {touched.profilePicture && errors.profilePicture && (
                <div style={{ color: "red" }}>{errors.profilePicture}</div>
              )}
              {profilePicturePreview && (
                <Card className={classes.imagePreview}>
                  <CardMedia
                    component="img"
                    image={profilePicturePreview}
                    alt="Profile Picture"
                  />
                </Card>
              )}
            </div>
          </div>
          <div className={classes.submit}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!isProfilePictureUploaded}
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInformation;
