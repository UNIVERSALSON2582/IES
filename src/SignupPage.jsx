import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdPermIdentity } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import * as yup from "yup";
import { withFormik } from "formik";
import Input from "./Input";
import axios from "axios";
import Button from "./Button";
import { WithAlert, WithUser } from "./WithProvider";

function callSignupApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.name,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({
        type: "sucess",
        message: "signUp sucessfull new account created",
      });
    })
    .catch(() => {
      console.log("invalid credential");
      bag.props.setAlert({
        type: "error",
        message: "Check your input field ,signUp failed !",
      });
    });
}

const schema = yup.object().shape({
  name: yup.string().min(3, "too short name"),

  email: yup.string().email().required(),
  password: yup
    .string()
    .required("this is reqired field")
    .min(6, "Password must minimum 6 charchters long"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function SignupPage({
  handleSubmit,
  handleBlur,
  values,
  errors,
  handleChange,
  touched,
}) {

  return (
    <div>
      <div className="flex justify-center items-center gap-4 p-4   border border-gray-500">
        <div className="hidden max-w-sm rounded-md md:block ">
          <img
            className="w-full grow-1"
            src="https://cdn.discordapp.com/attachments/998848043967320082/1021660829575299112/signup-ss-crop.jpg"
          />
        </div>
        <form className="grow-1" onSubmit={handleSubmit}>
          <div className='flex justify-center gap-4 p-8 '>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col bg-violet-400 px-24 py-16 my-24">
              <h1 className=' font-bold text-3xl font-mono'>Sign Up</h1>

              <Input onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.name}
                error={errors.name}
                value={values.name}
                placeholder="Name "
                type="text"
                required
                name="name"
                id="name"
                icon={<MdPermIdentity />} />

              <Input onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.email}
                error={errors.email}
                value={values.email}
                placeholder="Email address"
                type="email"
                required
                name="email"
                icon={<HiOutlineMail />}
                id="email-adress" />

              <Input onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                error={errors.password}
                value={values.password}
                placeholder="Create password"
                type="password"
                required
                name="password"
                icon={<RiLockPasswordLine />}
                id="newPassword" />

              <Button>SignUp</Button>
              <div className="flex gap-2 px-4 mt-6">
                <p>Already a member ?</p>
                <Link
                  to="/loginPage"
                  className="font-bold text-red-500 hover:cursor-pointer"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

const myHOC = withFormik({
  initialValues: initialValues,
  handleSubmit: callSignupApi,
  validationSchema: schema,
  validateOnMount: true,
});
export default WithAlert(WithUser(myHOC(SignupPage)));
