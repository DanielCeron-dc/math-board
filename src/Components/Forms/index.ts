import formInterface, { IOption } from "./FormInterface";
import colors from "./colors";

let options: IOption[] = Object.keys(colors).map((color) => ({
  value: color,
  displayValue: color,
}));



export const Login = {

  email: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholer: "correo",
    },
    value: "",
    validation: {
      isEmail: true,
      required: true,
    },
    valid: false,
  } as formInterface,

  password: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholer: "Password",
    },
    value: "",
    validation: {required: true},
    valid: false,
  } as formInterface,

};

export const Register = {

  email: {
    elementType: "input",
    elementConfig: {
      type: "text",
      placeholer: "correo",
    },
    value: "",
    validation: {
      isEmail: true,
      required: true,
    },
    valid: false,
  } as formInterface,

  password: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholer: "Password",
    },
    value: "",
    validation: {required: true},
    valid: false,
  } as formInterface,

  confirmPassword: {
    elementType: "input",
    elementConfig: {
      type: "password",
      placeholer: "Password",
    },
    value: "",
    validation: {required: true},
    valid: false,
  } as formInterface,

};


