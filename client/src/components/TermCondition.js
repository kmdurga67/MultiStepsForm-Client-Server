import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import useStyles from "./styles";

const TermCondition = ({ formData, setFormData, prevStep, nextStep }) => {
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    agree: Yup.boolean().oneOf([true], "You must agree to the terms"),
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
          <FormGroup>
            <FormControlLabel
              control={<Field as={Checkbox} type="checkbox" name="agree" />}
              label="I agree to the terms and conditions"
              error={touched.agree && errors.agree}
              helpertext={touched.agree && errors.agree}
            />
            <ErrorMessage
              name="agree"
              component="div"
              style={{ color: "red" }}
            />
          </FormGroup>
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

export default TermCondition;
