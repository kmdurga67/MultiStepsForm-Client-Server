import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  Checkbox,
} from "@material-ui/core";
import useStyles from "./styles";
import graduation from "./graduation.json";

const ContactDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format, kindly use this format abc@gmail.com")
      .required("Email is required"),
    phone: Yup.number()
      .typeError("Invalid phone number")
      .integer("Invalid phone number")
      .positive("Invalid phone number")
      .min(1000000000, "Only 10 digits required")
      .max(9999999999, "Only 10 digits required")
      .required("Phone Number is required"),
    hobbies: Yup.array()
      .min(1, "Select at least one hobby")
      .required("Hobbies are required"),
    gender: Yup.string().required("Gender is required"),
    graduation: Yup.string().required("Highest Degree is required"),
    alternatemobile: Yup.number()
      .typeError("Invalid alternate phone number")
      .integer("Invalid alternate phone number")
      .positive("Invalid alternate phone number")
      .min(1000000000, "Only 10 digits required")
      .max(9999999999, "Only 10 digits required"),
  });

  const handleSubmit = (values) => {
    setFormData(values);
    nextStep();
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={classes.formStep}>
            <Field
              as={TextField}
              name="email"
              label="Email *"
              type="email"
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
          </div>
          <div className={classes.formStep}>
            <Field
              as={TextField}
              name="phone"
              label="Phone *"
              type="number"
              error={touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
            />
          </div>
          <div className={classes.formStep}>
            <Field
              as={TextField}
              type="number"
              name="alternatemobile"
              label="Alternate Mobile"
              error={touched.alternatemobile && !!errors.alternatemobile}
              helperText={touched.alternatemobile && errors.alternatemobile}
            />
          </div>
          <div className={classes.formStep}>
            <FormControl
              component="fieldset"
              error={touched.gender && !!errors.gender}
            >
              <FormLabel component="legend">Gender *</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="Male"
                  control={<Field as={Radio} name="gender" />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Field as={Radio} name="gender" />}
                  label="Female"
                />
                <FormControlLabel
                  value="Transgender"
                  control={<Field as={Radio} name="gender" />}
                  label="Transgender"
                />
              </RadioGroup>
              {touched.gender && errors.gender && (
                <div className={classes.error}>{errors.gender}</div>
              )}
            </FormControl>
          </div>

          <div className={classes.formStep}>
            <FormControl
              component="fieldset"
              error={touched.hobbies && !!errors.hobbies}
            >
              <FormLabel component="legend">Hobbies *</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="hobbies"
                      value="Reading"
                    />
                  }
                  label="Reading"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="hobbies"
                      value="Gardening"
                    />
                  }
                  label="Gardening"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="hobbies"
                      value="Sports"
                    />
                  }
                  label="Sports"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="hobbies"
                      value="Singing"
                    />
                  }
                  label="Singing"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="hobbies"
                      value="Travelling"
                    />
                  }
                  label="Travelling"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="hobbies"
                      value="Reading Novels"
                    />
                  }
                  label="Reading Novels"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      type="checkbox"
                      name="hobbies"
                      value="Others"
                    />
                  }
                  label="Others"
                />
              </FormGroup>
              {touched.hobbies && errors.hobbies && (
                <div className={classes.error}>{errors.hobbies}</div>
              )}
            </FormControl>
          </div>
          <div className={classes.formStep}>
            <FormControl
              error={touched.graduation && !!errors.graduation}
              fullWidth
            >
              <FormLabel component="legend">Highest Degree *</FormLabel>
              <Field
                as={Select}
                name="graduation"
                label="Highest Degree *"
                error={touched.graduation && !!errors.graduation}
              >
                {/* Iterating the graduation array and creating MenuItem for each options to display to UI */}
                {graduation.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              {touched.graduation && errors.graduation && (
                <div className={classes.error}>{errors.graduation}</div>
              )}
            </FormControl>
          </div>
          <div className={classes.submit}>
            <Button variant="contained" color="primary" onClick={prevStep}>
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.submit1}
            >
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactDetails;
