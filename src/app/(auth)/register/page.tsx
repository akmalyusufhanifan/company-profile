"use client";

import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";

interface IValues {
  name: string;
  email: string;
  password: string;
}

const registerSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Register() {
  async function handleSubmit(
    values: IValues,
    formikHelpers: FormikHelpers<IValues>
  ) {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/users/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      alert("Register success");
      formikHelpers.resetForm();
    } catch (error) {
      console.log(error);
      alert(`Error registering user: ${error}`);
    }
  }
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold text-[#203475] mb-10">Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-2 w-full px-15 text-black md:max-w-[600px]">
              <label htmlFor="name">Name</label>
              <Field
                className="border-2 border-gray-200 bg-gray-100 p-2 rounded-xl"
                id="name"
                type="text"
                name="name"
                placeholder="name"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500"
              />

              <label htmlFor="email">Email</label>
              <Field
                className="border-2 border-gray-200 bg-gray-100 p-2 rounded-xl"
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />

              <label htmlFor="password">Password</label>
              <Field
                className="border-2 border-gray-200 bg-gray-100 p-2 rounded-xl"
                id="password"
                type="password"
                name="password"
                placeholder="at least 6 characters"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500"
              />

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-[#E11C22] p-2 mt-8 rounded-xl text-white border border-gray-400 shadow-lg"
              >
                {formik.isSubmitting ? "Registering..." : "Register"}
              </button>
            </Form>
          );
        }}
      </Formik>

      {/* <div className="absolute bottom-25 border border-gray-100 shadow-md rounded-xl w-[380px] p-2 flex justify-center items-center gap-2 md:w-[480px]">
        <Image
          src="/google-logo.webp"
          alt="Logo Google"
          width={20}
          height={20}
        />
        <h3 className="text-md text-black text-center">
          Register dengan akun Google
        </h3>
      </div> */}

      <div className="absolute bottom-10">
        <h3 className="text-md text-[#203475] font-light">
          Saya sudah memiliki akun.{" "}
          <Link href="/login">
            <span className="font-semibold">Login</span>
          </Link>
        </h3>
      </div>
    </main>
  );
}
