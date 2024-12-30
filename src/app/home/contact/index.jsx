"use client";
import React, { useState } from "react";
import { Label } from "@app/home/contact/components/label";
import { Input } from "@app/home/contact/components/input";
import { TextArea } from "@app/home/contact/components/textarea";
import { combineCSSClasses } from "@app/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import Toast from "@app/components/Toast";

export function ContactMeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState(null);
  const [isDisabled, setisDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Send →");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setToast(null); // Reset toast state
    setButtonText("Sending...");
    setisDisabled(true);
    try {
      let response = await fetch(
        "https://contact-backend-production-e63b.up.railway.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      let result = await response.json();

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      if (result.code === 200) {
        setToast({
          title: "I got your message!",
          description: "I will reply as soon as possible.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else if (result.code === 429) {
        setToast({
          title: "Too many request!",
          description: "Please try again after sometime.",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } else {
        setToast({
          title: "Error",
          description: "Something went wrong.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
      setToast({
        title: "Error",
        description: "Network error or server issue.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setButtonText("Send →");
      setisDisabled(false);
    }
  };

  return (
    <section className="RRA-contact p-8" id="RRA_ContactForm">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#151515]">
        <h2 className="font-bold text-2xl	 text-neutral-200 flex justify-center">
          Got a Question?
        </h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300">
          Feel free to drop a message, I will reply as soon as possible.
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-neutral-300">
                First name
              </Label>
              <Input
                id="firstname"
                name="firstName"
                placeholder="Jhon"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={isDisabled}
                style={{ cursor: isDisabled ? "not-allowed" : "auto" }}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-neutral-300">
                Last name
              </Label>
              <Input
                id="lastname"
                name="lastName"
                placeholder="Doe"
                type="text"
                disabled={isDisabled}
                style={{ cursor: isDisabled ? "not-allowed" : "auto" }}
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email" className="text-neutral-300">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="jhon.doe@gmail.com"
              type="email"
              disabled={isDisabled}
              style={{ cursor: isDisabled ? "not-allowed" : "auto" }}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message" className="text-neutral-300">
              Your Message/Query
            </Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Your message/query here..."
              value={formData.message}
              disabled={isDisabled}
              style={{ cursor: isDisabled ? "not-allowed" : "auto" }}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={isDisabled}
            style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
          >
            {buttonText}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="button"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <a
                href="https://github.com/RINITH-AMIN"
                className="text-neutral-700 dark:text-neutral-300 text-sm no-underline"
                target="_blank"
              >
                GitHub
              </a>
              <BottomGradient />
            </button>
            {toast && <Toast {...toast} />}
          </div>
        </form>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div
      className={combineCSSClasses("flex flex-col space-y-2 w-full", className)}
    >
      {children}
    </div>
  );
};
