import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import "./register.css";

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
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
          <div className="flex flex-col px-8 py-6 bg-white shadow-xl">
            <h1 className="text-2xl font-bold text-center">REGISTER</h1>
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
            <div className="flex items-center justify-center">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
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
    <div className="mt-4">
      <div>
        <label className="block" htmlFor={props.name}>
          {label}
        </label>
        <input
          {...field}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          placeholder={label}
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};
