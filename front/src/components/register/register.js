import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import "./register.css";

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Too Short!")
            .required("Password is required"),
          passwordConfirmation: Yup.string().oneOf(
            [Yup.ref("password"), Yup.ref("passwordConfirmation")],
            "Passwords must match"
          ),
        })}
        onSubmit={(value) => console.log(value)}
      >
        <Form>
          <div className="px-8 py-6 bg-white shadow-xl">
            <h1 className="text-center">REGISTER</h1>
            <TextInput name="name" type="text" label="Name" id="name" />
            <TextInput name="email" type="email" label="Email" id="email" />
            <TextInput
              name="password"
              type="password"
              label="Password"
              id="password"
            />
            <TextInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              id="confirmPassword"
            />
            <div className="text-center pt-5">
              <button
                type="submit"
                className="btn btn-primary btn-lg item-center"
              >
                Register
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props.name);
  return (
    <>
      <label className="form-label" htmlFor={props.name}>
        {label}
      </label>
      <input
        {...field}
        className="border-2"
        placeholder=" "
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
