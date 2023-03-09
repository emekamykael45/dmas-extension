import { useEffect } from "react";

import "./App.css";

function App() {
  const APP_URL = `https://dmas-app.vercel.app`;

  // let loggedInUser = null;
  useEffect(() => {
    window.addEventListener("storage", (event) => {
      console.log(event, "event");
      if (event.storageArea !== localStorage) return;
      if (event.key === "msg") {
        // Do something with event.newValue
      }
    });
  }, []);

  return (
    <div className="ext_container">
      <div className="header">
        <div className="logo">
          <img src="https://www.domeasolid.co/assets/logo.png" alt="Logo" />
          <p>Do me a Solid</p>
        </div>

        <div className="close">
          <img src="https://www.domeasolid.co/assets/close.svg" alt="Close" />
        </div>
      </div>

      <div className="content">
        <div className="offer">
          <h6 className="hello_text">
            Hello! <span>Ryan31</span>, an influencer you follow has an offer
            for this product.
          </h6>

          <p>30% off new membership</p>

          <button className="btn btn_secondary" onClick={() => {}}>
            Use
          </button>
        </div>

        <div className="gain_access">
          Gain access to your influencer's links and personalized deal
          recommendations.
        </div>

        <div className="action">
          <button
            className="btn btn_primary"
            onClick={() => window.open(`${APP_URL}/register`)}
          >
            Sign up for free
          </button>

          <p>
            Already a member?{" "}
            <span onClick={() => window.open(`${APP_URL}`)}>Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
