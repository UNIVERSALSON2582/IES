import React from 'react';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import * as yup from 'yup';
import { withFormik } from "formik";
import { WithAlert,WithUser} from './WithProvider';
import axios from 'axios';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdWifiPassword } from 'react-icons/md';

function callLoginApi(values, bag) {
  axios.post("https://myeasykart.codeyogi.io/login", {
    email: values.email, password: values.password
  }).then((response) => {
    const { user, token } = response.data;
    console.log(user, token)
    localStorage.setItem("token", token);
    bag.props.setUser(user);
    bag.props.setAlert({ type: "sucess", message: "login sucessFull " });


  }).catch(() => {
    bag.props.setAlert({ message: "Invalid Credentials", type: "error" });
  })
}



const schema = yup.object().shape({
  email: yup.string().email().required(" Must enter email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must minimum 6 charchters long"),
});

const initialValues = {
  email: "",
  password: "",
};


function LoginPage({ handleSubmit, values, errors, touched, handleChange, handleBlur }) {
  return (
    <div>
    <div
      className='flex h-screen sm: justify-center  sm:justify-end gap-4 bg-cover bg-no-repeat bg-center   '
      style={{
        backgroundImage: 'url("https://media.discordapp.net/attachments/968743874644303892/1158373484720824401/photo-1561089489-f13d5e730d72.png?ex=651c02e0&is=651ab160&hm=08f6cc6d16ff2ae3e429c91c320777a7cad48e0a1786e7fdec37cd708605bea5&=&width=566&height=425")',
      }}
    >
      <div className='bg-gradient-to-r from-blue-500 to-purple-500  bg-violet-400 px-24 py-16 mt-24 rounded-lg h-96 mr-36 sm:rounded-full'>
        <h1 className='font-bold text-3xl font-mono'>Login</h1>
        <form className='mt-2' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
        
        <Input
          placeholder='User Id'
          onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
            onChange={handleChange}
            values={values.email}
            name="email"
            type="email"
            id="email-address"
            required
            autoComplete="email"
            icon={<HiOutlineMail/>}

        />
        
        <Input
          placeholder='Password'
          onBlur={handleBlur}
          touched={touched.password}
          error={errors.password}
          onChange={handleChange}
          values={values.password}

          name="password"
          type="password"
          id="password"
          required
          autoComplete="current-password"
          icon={<RiLockPasswordLine/>}
        />
        <Button
        >
          Login
        </Button>
        </div>
        </form>

        <Link className='text-white mt-2' to="/SignupPage">Create an account</Link>
      </div>
    </div>
    </div>
  );
}

const myHOC = withFormik({
  initialValues: initialValues,
  handleSubmit: callLoginApi,
  validationSchema: schema,
  validateOnMount: true,
});
export default WithAlert(WithUser(myHOC(LoginPage)));
