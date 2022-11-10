import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";


const App = () => {
  const [values, setValues] = useState({

    name: "",
    email: "",
    password: "",
    mobileNumber: "",
    userName: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Name",
      errorMessage:
        "Name should be 5-15 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "mobileNumber",
      type: "text",
      placeholder: "Mobile Number",
      errorMessage:
        "Name should be 5-15 characters and shouldn't include any special character!",
      label: "Mobile",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 5,
      name: "userName",
      type: "text",
      placeholder: "UserName",
      errorMessage: "Must Be Unique",
      label: "UserName",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Submit Profile</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};


export default App;
