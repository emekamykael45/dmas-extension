import { useState } from "react";

import Header from "../components/header";

import { signInWithEmailAndPassword } from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { auth, functions } from "../firebase";

function Auth(props) {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setFormErrors({
        ...formErrors,
        [name]: pattern.test(value) ? null : "Invalid email address",
      });
    }
    if (name === "password") {
      setFormErrors({
        ...formErrors,
        [name]: value?.length > 7 ? null : "Must be atleast 8 characters",
      });
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { email, password } = formData;

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        userCredential.user.uid && fetchUserInfoAction(userCredential.user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Authentication error: ", errorMessage);

        setIsSubmitting(false);
      });
  };

  const fetchUserInfoAction = async (uid) => {
    const func = httpsCallable(functions, "fetchUserInfo");
    await func({ uid })
      .then((result) => {
        props.setAuthUser(result.data);
        props.switchView(props.homeValue);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("Fetch User Info error: ", errorMessage);
      });

    setIsSubmitting(false);
  };

  const isFormInvalid = formErrors?.email || formErrors?.password || false;

  return (
    <div className="ext_container">
      <Header />

      <div className="content">
        <form className="form" onSubmit={submitForm}>
          <div className="form_group">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              onChange={handleOnChange}
              readOnly={isSubmitting}
              required
            />
            {formErrors?.email && <p>{formErrors?.email}</p>}
          </div>

          <div className="form_group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={handleOnChange}
              readOnly={isSubmitting}
              required
            />
            {formErrors?.password && <p>{formErrors?.password}</p>}
          </div>

          <div className="action">
            <button
              className="btn btn_primary"
              disabled={isSubmitting || isFormInvalid === false ? false : true}
            >
              {isSubmitting ? "Logging you in..." : "Login"}
            </button>

            <p>
              New user?{" "}
              <span onClick={() => window.open(`${props?.appUrl}/register`)}>
                Sign up for free
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
