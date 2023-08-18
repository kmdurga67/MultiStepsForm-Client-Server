import React, { useState } from "react";
import { toast } from "react-toastify";
import PersonalInformation from "./PersonalInformation";
import ContactDetails from "./ContactDetails";
import Address from "./Address";
import TermCondition from "./TermCondition";
import Review from "./Review";
import useStyles from "./styles";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import FormSubmitted from "./FormSubmitted";
import axios from "axios";

const steps = [
  "Personal Information",
  "Contact Details",
  "Address",
  "Agree & Continue",
  "Review & Submit",
];

const Form = () => {
  //adding .env file to call API
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  //dynamic styles is added
  const classes = useStyles();
  const [step, setStep] = useState(0);

  //form data variables
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    agree: false,
    profilePicture: null,
    hobbies: "",
    gender: "",
    graduation: "",
    alternatemobile: "",
    country: "",
    state: "",
    profile: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  //adding stepper to the form to track steps from step 1 to 5
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1); //to take backstep from 5 to 1 stepper

  const submitForm = async () => {
    // This line of codes will check If the user is in the last step, perform the final form submission
    if (step === steps.length - 1) {
      try {
        const profile = formData.profilePicture
          ? URL.createObjectURL(formData.profilePicture)
          : null;
        await axios.post(`${apiBaseUrl}/api/formdata`, { ...formData, profile });

        console.log("Final Form Data:", formData, profile);
        toast.success("Form submitted successfully!");

        setTimeout(() => {
          setIsSubmitted(true);
        }, 8000); //after 8 sec message will be displaying with new page where it shows submitted successfully
      } catch (error) {
        toast.error("Failed to submit form.");
      }
    } else {
      // Move to the next step
      nextStep();
    }
  };

  const updateFormData = (stepData) => {
    // Update the formData with the current step's data
    setFormData((prevData) => {
      return { ...prevData, ...stepData };
    });
  };

  // Render the FormSubmitted component if the form is successfully submitted
  if (isSubmitted) {
    return <FormSubmitted />;
  }

  //with the help of switch case stepper is able to move from step 1 to 5 without any hinderance also this is the parent component for all the page because props are passing from parent to child
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <PersonalInformation
            formData={formData}
            setFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <ContactDetails
            formData={formData}
            setFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 2:
        return (
          <Address
            formData={formData}
            setFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <TermCondition
            formData={formData}
            setFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <Review
            formData={formData}
            prevStep={prevStep}
            submitForm={submitForm}
            nextStep={nextStep}
          />
        );
      default:
        return (
          <PersonalInformation
            formData={formData}
            setFormData={updateFormData}
            nextStep={nextStep}
          />
        );
    }
  };

  return (
    <div className={classes.formContainer}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={classes.formStep}>{renderStep()}</div>
      {/* <div className={classes.formActions}>
        {step > 0 && (
          <Button variant="contained" color="primary" onClick={prevStep}>
            Previous
          </Button>
        )}
        {step < steps.length - 1 && (
          <Button variant="contained" color="primary" onClick={nextStep}>
            Next
          </Button>
        )}
      </div> */}
    </div>
  );
};

export default Form;
