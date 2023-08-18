import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  MenuItem,
  TextField,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import useStyles from "./styles";
import Select from "@material-ui/core/Select/Select";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import country from "./country.json";
import state from "./state.json";

const Address = ({ formData, setFormData, nextStep, prevStep }) => {
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    postalCode: Yup.number()
      .typeError("Invalid Zip Code")
      .integer("Invalid Zip Code")
      .positive("Invalid Zip Code")
      .min(100000, "Only  6-digits required")
      .max(999999, "Only 6-digits required")
      .required("Phone Number is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("State is required"),
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
              name="address"
              label="Address *"
              error={touched.address && !!errors.address}
              helperText={touched.address && errors.address}
            />
          </div>
          <div className={classes.formStep}>
            <FormControl error={touched.country && !!errors.country} fullWidth>
              <InputLabel htmlFor="country">Country *</InputLabel>
              <Field
                as={Select}
                name="country"
                label="Country *"
                // error={touched.country && !!errors.country}
                // helperText={touched.country && errors.country}
              >
                {country.map((option) => (
                  <MenuItem key={option.code} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Field>
              <FormHelperText>
                {touched.country && errors.country}
              </FormHelperText>
            </FormControl>
          </div>
          <div className={classes.formStep}>
            <FormControl error={touched.state && !!errors.state} fullWidth>
              <InputLabel htmlFor="state">State *</InputLabel>
              <Field
                as={Select}
                name="state"
                label="State *"
                // error={touched.state && !!errors.state}
                // helperText={touched.state && errors.state}
              >
                {state.map((option) => (
                  <MenuItem key={option.sno} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </Field>
              <FormHelperText>{touched.state && errors.state}</FormHelperText>
            </FormControl>
          </div>
          <div className={classes.formStep}>
            <Field
              as={TextField}
              name="city"
              label="City *"
              error={touched.city && !!errors.city}
              helperText={touched.city && errors.city}
            />
          </div>
          <div className={classes.formStep}>
            <Field
              as={TextField}
              name="postalCode"
              label="Zip Code *"
              type="number"
              error={touched.postalCode && !!errors.postalCode}
              helperText={touched.postalCode && errors.postalCode}
            />
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

export default Address;
