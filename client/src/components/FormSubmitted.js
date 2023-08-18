import React from "react";
import Typography from "@material-ui/core/Typography";

const FormSubmitted = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img
        src="https://static.wixstatic.com/media/4b0f16_ad7e950fec8247aa9946a1bf4e6c765c~mv2.gif"
        alt="Form Submitted"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Typography
        variant="h5"
        gutterBottom
        style={{
          color: "green",
          fontSize: "40px",
          fontWeight: "400",
          paddingTop: "10px",
        }}
      >
        Form Submitted Successfully!
      </Typography>
    </div>
  );
};

export default FormSubmitted;