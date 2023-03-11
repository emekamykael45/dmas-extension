function Header({ close }) {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://www.domeasolid.co/assets/logo.png" alt="Logo" />
        <p>Do me a Solid</p>
      </div>

      <div className="close" onClick={close}>
        <img src="https://www.domeasolid.co/assets/close.svg" alt="Close" />
      </div>
    </div>
  );
}

export default Header;
