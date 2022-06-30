import logo from "./logo.svg";
import "./App.css";
import { Formik } from "formik";
import React from "react";
import Select from "react-select";

function App() {
  const options = [
    { value: "0", label: "Inactive" },
    { value: "1", label: "Active" },
  ];

  return (
    <div className="App">
      <header>
        <div>
          <h1>welcome to formik</h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              gender: "",
              term_and_policy: "",
              is_active: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.name) {
                errors.name = "Please enter your name";
              }
              if (!values.email) {
                errors.email = "Please senter the email address";
              }
              if (!values.gender) {
                errors.gender = "Please select your gender";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <p style={{ color: "red" }}>
                  {errors.name && touched.name && errors.name}
                </p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p style={{ color: "red" }}>
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="radio"
                  value="MALE"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
                Male
                <input
                  type="radio"
                  value="FEMALE"
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
                Female
                <p style={{ color: "red" }}>
                  {errors.gender && touched.gender && errors.gender}
                </p>
                <input
                  type="checkbox"
                  name="term_and_policy"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />{" "}
                term and policy
                <Select options={options} name="is_active" />
                # setFieldValue is not working on select
                # setFieldValue('is_active', value)
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </header>
    </div>
  );
}

export default App;
