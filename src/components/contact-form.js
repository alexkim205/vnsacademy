import React, { useEffect, useState } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import { formatPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BaseSection from "./sections/base.style";
import {
  WHITE,
  BUTTON_SHADOW,
  BOX_SHADOW,
  SUBJECTS_COLORS,
  breakpoint,
} from "../constants/theme";

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

const Container = styled(BaseSection)`
  .content {
    width: 100%;
    box-sizing: border-box;
    background-color: ${WHITE};
    align-items: center;
    border-radius: 5px;
    box-shadow: ${BOX_SHADOW};
    padding: 3.5em 2.5em;

    form {
      display: flex;
      flex-direction: column;

      .submit {
      }
    }
  }
`;

const ContactForm = () => {
  const { register, handleSubmit, setValue, getValues, errors } = useForm();
  const [phoneValue, setPhoneValue] = useState("");
  const onSubmit = ({ reason, email, phone, subject, moreinfo }) => {
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

    axios({
      method: "post",
      url: `https://cors-anywhere.herokuapp.com/https://formsubmit.co/${emailAddress}`,
      data: requestFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        //handle success
        console.log(response);
        toast.success(
          "Form submitted! We'll reach out in the next 3-5 business days.",
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

  console.log(getValues(), errors);

  return (
    <Container>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <select
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
          </select>
          <div className="input-error">{errors?.reason?.message}</div>
          <select
            name="subject"
            ref={register({ required: "Subject is required." })}
          >
            <option value="SAT">SAT</option>
            <option value="SAT Subject Tests">SAT Subject Tests</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Math">Math</option>
            <option value="SHSAT">SHSAT</option>
            <option value="Hunter Entrance Exam">Hunter Entrance Exam</option>
            <option value="Competitive Math">Competitive Math</option>
            <option value="School Math Prep">School Math Prep</option>
            <option value="School English Prep">School English Prep</option>
          </select>
          <div className="input-error">{errors?.subject?.message}</div>
          <PhoneInput
            country="US"
            name="phone"
            value={phoneValue}
            onChange={value => {
              setValue("phone", value);
              setPhoneValue(value);
            }}
          />
          <div className="input-error">{errors?.phone?.message}</div>
          <input
            type="text"
            name="email"
            ref={register({
              required: "Email is required.",
              pattern: { value: /^\S+@\S+$/i, message: "Email is invalid." },
            })}
          />
          <div className="input-error">{errors?.email?.message}</div>
          <textarea name="moreinfo" ref={register} />
          <div className="input-error">{errors?.moreinfo?.message}</div>
          <input type="submit" />
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
