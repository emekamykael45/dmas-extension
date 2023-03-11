import Header from "../components/header";

function Home(props) {
  return (
    <div className="ext_container">
      <Header />

      <div className="content">
        {props.authUser && (
          <div className="offer">
            <h6 className="hello_text">
              Hi <span className="name">{props.authUser?.name}</span>!,{" "}
              <span className="handle">[ryan31]</span> an influencer you follow
              has an offer for this product.
            </h6>

            <p>30% off new membership</p>

            <button className="btn btn_secondary" onClick={() => {}}>
              Use
            </button>
          </div>
        )}

        {!props.authUser && (
          <div className="gain_access">
            Gain access to your influencer's links and personalized deal
            recommendations.
          </div>
        )}

        <div className="action">
          {!props.authUser ? (
            <button
              className="btn btn_primary"
              onClick={() => props.switchView(props.authValue)}
            >
              Login to your account
            </button>
          ) : (
            <button
              className="btn btn_primary"
              onClick={() => window.open(`${props?.appUrl}/home`)}
            >
              My DMAS Account
            </button>
          )}

          {!props.authUser && (
            <p>
              New user?{" "}
              <span onClick={() => window.open(`${props?.appUrl}/register`)}>
                Sign up for free
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
