import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/.netlify/functions/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const responseData = await response.json();
          console.log("Form data sent successfully:", responseData);
          toast.success("Form data sent successfully!");
          // Optionally, you can reset the form fields after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            message: "",
          });
        } else {
          console.error("Response does not contain valid JSON data");
          toast.error("Error: Unexpected response from the server");
        }
      } else {
        console.error("Error sending form data. Response status:", response.status);
        const responseData = await response.json();
        console.error("Response data:", responseData);
        toast.error(
          `Error sending form data: ${responseData.error || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(`Error: ${error.message}`);
    }
  };
  

  return (
    <div>
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input
                  type="text"
                  name="firstName"
                  required="required"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
                <span className="text">First Name</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input
                  type="text"
                  name="lastName"
                  required="required"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
                <span className="text">Last Name</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input
                  type="text"
                  name="email"
                  required="required"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input
                  type="text"
                  name="mobile"
                  required="required"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                />
                <span className="text">Mobile</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <textarea
                  required="required"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                <span className="text">Type your message Here...</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
