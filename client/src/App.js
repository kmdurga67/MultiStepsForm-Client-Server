import "./App.css";
import React from "react";
import ErrorBoundary from "./ErrorBoundaries/ErrorBoundary";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
} from "@material-ui/core";
import "./ErrorBoundaries/style.css";
import useStyles from "./components/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";

function App() {
  const classes = useStyles();

  return (
    <ErrorBoundary className="error-boundary">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography>
            <a href="./components/PersonalInformation.js">
              <img
                src="https://images.ctfassets.net/lzny33ho1g45/4ODoWVyzgicvbcb6J9ZZZ5/c0333ef44af8588fee18c1e6ed403fc7/Group_12549.jpg"
                height={"80px"}
                width={"130px"}
                alt="no images found"
              />
            </a>
          </Typography>
          <Typography variant="h2" className={classes.header}>
            Multi Step Form
          </Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container maxWidth="lg">
        <Form />
      </Container>
      <ToastContainer />
    </ErrorBoundary>
  );
}

export default App;
