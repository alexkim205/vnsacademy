import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import _ from "lodash";
import { formatPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input/input";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormButton } from "../components/button";
import { Container, Select, StyledToast } from "./contact-form.style";
import { ENROLL_REASONS, ENROLL_SUBJECTS } from "../constants/contactReasons";

export const emailAddress = "vnsacademy@gmail.com";
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

const ContactForm = ({
  reason = null,
  reasons = ENROLL_REASONS,
  subjects = ENROLL_SUBJECTS,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    clearError,
    triggerValidation,
    formState: { isSubmitting },
    errors,
  } = useForm();
  const [phoneValue, setPhoneValue] = useState("");

  // On component mount, prefill with location state if it exists
  useEffect(() => {
    if (!reason) {
      return;
    }
    setValue("reason", reason);
    // setValue("subject", location.state.subject); // Don't set subject because its too tedious to map.
  }, [reason, setValue]);

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

    const renderToast = (name, message) => (
      <StyledToast>
        <div className="name">{name}</div>
        <div className="message">{message}</div>
      </StyledToast>
    );

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
        toast.success(
          renderToast(
            "Message sent.",
            "We will reach out in the next 3-5 business days."
          ),
          toastOptions
        );
      })
      .catch(function (response) {
        //handle error
        toast.error(
          renderToast(
            "Message not sent.",
            "There was an error submitting your form. Please try again."
          ),
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

  return (
    <Container>
      <div className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrapper">
            <div className="input-text">You are contacting us about</div>{" "}
            <div className="input-input">
              <Select
                name="reason"
                ref={register({ required: "Reason is required." })}
              >
                {reasons &&
                  _.values(reasons).map((reason, i) => (
                    <option value={reason} key={i}>
                      {reason}
                    </option>
                  ))}
              </Select>
            </div>
            <div className="input-text append select">,</div>
            {/* <div className="input-error">{errors?.reason?.message}</div> */}
          </div>
          <div className="input-wrapper">
            <div className="input-text">for</div>{" "}
            <div className="input-input">
              <Select
                name="subject"
                ref={register({ required: "Subject is required." })}
              >
                {subjects &&
                  _.values(subjects).map((subject, i) => subject !== 'Dummy Class' && (
                    <option value={subject} key={i}>
                      {subject}
                    </option>
                  ))}
              </Select>
            </div>
            <div className="input-text append select">.</div>
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
            <div className="input-text">and</div>{" "}
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
            <div className="input-text append">.</div>
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
        transition={Slide}
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
