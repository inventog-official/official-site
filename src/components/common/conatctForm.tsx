import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button2 from "./button2";
import { MdOutlineAttachFile } from "react-icons/md";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

type IFormInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDetails: string;
  budget: string;
  finishedProject: string;
  files?: FileList;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormInput>();

  const [budget, setBudget] = useState<string>("Under 10,000 €");
  const [finishedProject, setFinishedProject] = useState<string>(
    "We need it available"
  );
  const [_, setFiles] = useState<FileList | null>(null);

  const validateForm = (data: IFormInput) => {
    let isValid = true;

    if (!data.name) {
      setError("name", { type: "manual", message: "Name is required" });
      isValid = false;
    }
    if (!data.email) {
      setError("email", { type: "manual", message: "Invalid email address" });
      isValid = false;
    }
    if (!data.phone) {
      setError("phone", {
        type: "manual",
        message: "Phone number is required",
      });
      isValid = false;
    }
    if (!data.company) {
      setError("company", {
        type: "manual",
        message: "Company name is required",
      });
      isValid = false;
    }
    if (!data.projectDetails) {
      setError("projectDetails", {
        type: "manual",
        message: "Project details are required",
      });
      isValid = false;
    }
    if (!budget) {
      setError("budget", {
        type: "manual",
        message: "Budget selection is required",
      });
      isValid = false;
    }
    if (!finishedProject) {
      setError("finishedProject", {
        type: "manual",
        message: "Finished project selection is required",
      });
      isValid = false;
    }

    return isValid;
  };

  const onSubmit = (data: IFormInput) => {
    if (validateForm(data)) {
      console.log("Form submitted successfully!", data);
      // You can also perform further actions here, like sending data to an API
    }
  };

  return (
    <div className="w-full xl:px-20 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="border-b border-t border-black py-10">
          <h2 className="text-3xl font-bold mb-4">Your contact information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <input
              type="text"
              placeholder="Your name"
              className={`w-full p-5 shadow-xl rounded-full ${
                errors.name ? "border border-red-500" : ""
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="E-mail"
              className={`w-full p-5 shadow-xl rounded-full ${
                errors.email ? "border border-red-500" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              type="text"
              placeholder="Phone number"
              className={`w-full p-5 shadow-xl rounded-full ${
                errors.phone ? "border border-red-500" : ""
              }`}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}

            <input
              type="text"
              placeholder="Company or project name"
              className={`w-full p-5 shadow-xl rounded-full ${
                errors.company ? "border border-red-500" : ""
              }`}
              {...register("company")}
            />
            {errors.company && (
              <p className="text-red-500">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className="border-b border-black">
          <h2 className="text-3xl font-bold mb-4">Budget</h2>
          <div className="flex flex-wrap gap-4  py-16">
            {[
              "Under 10,000 ₹",
              "10,000 ₹ - 20,000 ₹",
              "20,000 ₹ - 30,000 ₹",
              "30,000 ₹ - 40,000 ₹",
              "Over 50,000 ₹",
            ].map((option) => (
              <button
                type="button"
                key={option}
                className={`px-4 py-3 justify-center gap-5  p-2   items-center mx-auto text-lg  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full   shadow-xl ${
                  budget === option ? "bg-primary text-black" : ""
                }`}
                onClick={() => setBudget(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-4">About the project</h2>
        <div className="border-b border-black py-5">
          <textarea
            placeholder="Tell us more about your project"
            className={`w-full p-4 shadow-xl rounded-2xl h-48 ${
              errors.projectDetails ? "border-red-500" : ""
            }`}
            {...register("projectDetails")}
          ></textarea>
          {errors.projectDetails && (
            <p className="text-red-500">{errors.projectDetails.message}</p>
          )}
          <div className="flex items-center gap-2 ">
            <input
              type="file"
              className="hidden"
              {...register("files")}
              onChange={(e) => setFiles(e.target.files)}
              id="file-upload"
            />

            <label
              className="text-black w-full flex gap-2 pb-10 items-center justify-center cursor-pointer"
              htmlFor="file-upload"
            >
              Attach files related to project
              <Button2
                onClick={() => {
                  //@ts-ignore
                  document.getElementById("file-upload").click();
                }}
                arrowEnable={false}
                icon={{
                  enable: true,
                  icon: <MdOutlineAttachFile className="h-10 w-10 rotate-45" />,
                }}
                classNames="p-3"
              />
            </label>
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Finished project</h2>
          <div className="flex flex-wrap gap-1 py-16">
            {[
              "We need it available",
              "In next 2 months",
              "In next 6 months",
              "Less than 6 months",
            ].map((option) => (
              <button
                type="button"
                key={option}
                className={`px-4 py-3 justify-center gap-5  p-2   items-center mx-auto text-lg  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full   shadow-xl  ${
                  finishedProject === option ? "bg-primary text-black" : ""
                }`}
                onClick={() => setFinishedProject(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <span className=" text-black font-bold">
          By submitting this form you agree to{" "}
          <span className="underline">Privacy Policy </span> of Inventog team
        </span>
        <div className="flex items-center justify-between gap-10 py-9 ">
          <span className="flex gap-4 justify-center items-center">
            <p className="uppercase text-3xl font-semibold">submit</p>
            <Button2
              arrowEnable={false}
              icon={{
                enable: true,
                icon: (
                  <FaArrowRight className="h-10 font-thin w-10  -rotate-45" />
                ),
              }}
              classNames="p-7 shadow-lg"
            />
          </span>

          <div className=" flex flex-col gap-4">
            <span className="w-full px-2 font-semibold">Follow us:</span>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  "
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  "
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="flex  justify-center gap-5  p-2   items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-primary hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 text-black relative z-10  font-thin overflow-hidden  rounded-full  "
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
