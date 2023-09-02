import React from "react";
import "./Contact.css";
import FillDetails from "./FillDetails";
import MyDetails from "./MyDetails";

const Contact = () => {
  return (
    <div id="contact">
      {/*  */}
      <div className="contact_inner">
        <div className="fill_details">
          <FillDetails />
        </div>
        <div className="my_info">
          <MyDetails />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Contact;
