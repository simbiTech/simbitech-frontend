import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css";
import { Input, message } from "antd";

const Forgetpwd = () => {
  const navigate = useNavigate();
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const [passwords, setPasswords] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = passwords;
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      message.error("Passwords did not match!");
      return;
    }
    const regexNumber = /[0-9]/;
    const regexLowercase = /[a-z]/;
    const regexUppercase = /[A-Z]/;
    const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const isNumberValid = regexNumber.test(password);
    const isLowerCaseValid = regexLowercase.test(password);
    const isUpperCaseValid = regexUppercase.test(password);
    const isSpecialCharValid = regexSpecialChar.test(password);
    const isLengthValid = password.length >= 12;

    if (
      !isNumberValid||
      !isLowerCaseValid ||
      !isUpperCaseValid ||
      !isSpecialCharValid ||
      !isLengthValid
    ) {
      setPasswordError(
        "Password must have at least one lowercase, one uppercase, one number one special character, and be at least 12 characters long."
      );
      return;
    }
    message.success('Account created successfully, verify your Email to continue');
    localStorage.setItem("email", email.value);
    navigate("/verify");
  };
  return (
    <>
      <div className="bg-login-bg1 bg-cover bg-center bg-no-repeat h-[100vh] font-source-sans-pro relative flex justify-center items-center text-[16px]">
        <div className="bg-primarybase absolute w-full flex justify-center items-center opacity-80 inset-0"></div>
        <div className="flex flex-col bg-greybase border-[4px] border-b-[#F9DBBD] border-r-[#F9DBBD] w-[unset] md:w-[35%] rounded-xl gap-10 p-10 relative">
          <div className="flex flex-col justify-center text-center gap-2">
            <p className="font-bold text-[32px] tracking-wide">
              {" "}
              Reset your password
            </p>
            <p>
              Fill in your details to Reset your password.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                id="email"
                title="Enter the email you used to register"
                value={passwords.email}
                onChange={handleChange}
                required
                className="flex p-2 rounded-md border-[1px] border-primarybase border-opacity-[0.2] outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">New password</label>
              <Input.Password
                placeholder="New password"
                type="password"
                id="Password"
                name="password"
                title="Password must have lowercase,uppercase, number special character, and must be 12 characters"
                value={passwords.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="newPassword">Confirm password</label>
              <Input.Password
                placeholder="Confirm password"
                type="password"
                name="confirmPassword"
                id="newPassword"
                title="Confirm your password"
                value={passwords.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              {passwordError && (
                  <p style={{ color: "red" }}>{passwordError}</p>
                )}
              <button
                type="submit"
                name="submit"
                id="submit"
                title="Click to Reset your password"
                className="bg-[#FBE7D3] after:flex rounded-sm text-center w-full py-2"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgetpwd;
