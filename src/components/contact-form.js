import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
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
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    var requestFormData = new FormData();
    requestFormData.set("topic", data.topic);
    requestFormData.set("subject", data.subject);
    requestFormData.set("moreinfo", data.moreinfo);
    requestFormData.set("_replyto", emailAddress);
    requestFormData.set(
      "_subject",
      `VnS Website Form Submission: ${data.topic}`
    );

    axios({
      method: "post",
      url: `https://formspree.io/${emailAddress}`,
      data: requestFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(response => {
        //handle success
        console.log(response);
        toast.success(
          "Form submitted! Please wait for us to call you.",
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
  console.log(errors);

  return (
    <Container>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <select name="topic" ref={register({ required: true })}>
            <option value="registering a student for a group class">
              registering a student for a group class
            </option>
            <option value="registering a student for private tutoring">
              registering a student for private tutoring
            </option>
            <option value="becoming a tutor">becoming a tutor</option>
            <option value="other">other</option>
          </select>
          <select name="subject" ref={register({ required: true })}>
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
          <PhoneInput
            placeholder="+12345678910"
            value={value}
            onChange={setValue}
          />
          <input
            type="tel"
            placeholder="phone"
            name="phone"
            ref={register({ required: true })}
          />
          <textarea name="moreinfo" ref={register} />

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
