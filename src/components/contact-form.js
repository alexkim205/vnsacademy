import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { formatPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormButton } from "../components/button";
import { Container, Select } from "./contact-form.style";

const emailAddress = "vnsacademy@gmail.com";
const ccEmailAddresses = "sogyu30@yahoo.com,oliviaebea@yahoo.com";

const toastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    clearError,
    triggerValidation,
    formState: { isSubmitting },
    errors,
  } = useForm();
  const [phoneValue, setPhoneValue] = useState("");

  const onSubmit = ({ reason, email, phone, subject, moreinfo }) => {
    clearError("phone");
    clearError("email");
    if (isSubmitting) return;

    var requestFormData = new FormData();
    requestFormData.set("reason", reason);
    requestFormData.set("email", email);
    requestFormData.set("subject", subject);
    requestFormData.set("phone", formatPhoneNumber(phone));
    requestFormData.set("moreinfo", moreinfo);
    requestFormData.set("_replyto", emailAddress);
    requestFormData.set("_captcha", false);
    requestFormData.set("_subject", `VnS Website: ${subject} ${reason}`);
    requestFormData.set("_cc", ccEmailAddresses);

    return axios({
      method: "post",
      url: `https://cors-anywhere.herokuapp.com/https://formsubmit.co/${emailAddress}`,
      data: requestFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        //handle success
        reset();
        setPhoneValue("");
        console.log(response);
        toast.success(
          <div>
            <div className="title">Message sent.</div>
            <br />
            <div className="title">Message sent.</div>
            We will reach out in the next 3-5 business days.
          </div>,
          toastOptions
        );
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        toast.error(
          "There was an error submitting your form. Please try again.",
          toastOptions
        );
      });
  };

  useEffect(() => {
    register(
      {
        name: "phone",
        type: "custom",
      },
      {
        pattern: {
          value: /^\+1[0-9]{10}$/,
          message: "Phone number is invalid.",
        },
        required: "Phone number is required.",
      }
    );
  }, [register]);

  console.log(isSubmitting, errors);

  return (
    <Container>
      <div className="content">
        {isSubmitting.toString()}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <div className="input-text">You are contacting us about</div>{" "}
            <div className="input-input">
              <Select
                name="reason"
                ref={register({ required: "Reason is required." })}
              >
                <option value="registering a student for a group class">
                  registering a student for a group class
                </option>
                <option value="registering a student for private tutoring">
                  registering a student for private tutoring
                </option>
                <option value="becoming a tutor">becoming a tutor</option>
                <option value="other">other</option>
              </Select>
            </div>
            <div className="input-text append">,</div>
            {/* <div className="input-error">{errors?.reason?.message}</div> */}
          </div>
          <div className="input-wrapper">
            <div className="input-text">for</div>{" "}
            <div className="input-input">
              <Select
                name="subject"
                ref={register({ required: "Subject is required." })}
              >
                <option value="SAT">the SAT</option>
                <option value="SAT Subject Tests">the SAT Subject Tests</option>
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Math">Math</option>
                <option value="SHSAT">the SHSAT</option>
                <option value="Hunter Entrance Exam">
                  the Hunter Entrance Exam
                </option>
                <option value="Competitive Math">Competitive Math</option>
                <option value="School Math Prep">School Math Prep</option>
                <option value="School English Prep">School English Prep</option>
              </Select>
            </div>
            <div className="input-text append">.</div>
            {/* <div className="input-error">{errors?.subject?.message}</div> */}
          </div>
          <div className="input-wrapper">
            <div className="input-text">I'd like to be reached at</div>{" "}
            <div className="input-input">
              <PhoneInput
                country="US"
                name="phone"
                placeholder="(123) 456-7890"
                value={phoneValue}
                onChange={value => {
                  setValue("phone", value);
                  setPhoneValue(value);
                  triggerValidation("phone");
                }}
              />{" "}
            </div>
            <div className="input-text">or</div>{" "}
            <div className="input-input">
              <input
                type="text"
                placeholder="user@email.com"
                name="email"
                ref={register({
                  required: "Email is required.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email is invalid.",
                  },
                })}
              />{" "}
            </div>
            <div className="input-text">.</div>
            <div className="input-error">{errors?.phone?.message}</div>
            <div className="input-error">{errors?.email?.message}</div>
          </div>
          <div className="input-wrapper">
            <div className="input-text" style={{ padding: "0.7em 0" }}>
              Any additional information (Optional):
            </div>
            <div className="input-input break">
              {" "}
              <textarea
                name="moreinfo"
                ref={register}
                rows={5}
                spellCheck={false}
              />
            </div>
            <div className="input-error">{errors?.moreinfo?.message}</div>
          </div>
          <div className="buttons-section">
            <FormButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send message"}
            </FormButton>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </Container>
  );
};

export default ContactForm;
