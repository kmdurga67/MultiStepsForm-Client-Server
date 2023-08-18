import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "10px",
    },
  },
  formField: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  imagePreview: {
    width: 150,
    height: 150,
    marginTop: theme.spacing(2),
  },
  formContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
  },
  formStep: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    minHeight: "100px",
  },
  error: {
    color: "red",
  },
  formActions: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  submit: {
    paddingTop: "20px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px",
    },
  },
  submit1: {
    float: "right",
  },
  reviewSection: {
    padding: "20px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  stepper: {
    padding: "20px 0",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  },
}));

export default useStyles;