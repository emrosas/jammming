import "./Header.css";
import logo from "../../assets/logo.svg";
import signIn from "../../assets/sign-in.svg";

function Header() {
  return (
    <header>
      {/* Sign in Component */}
      <div className="sign-in">
        <p className="sign-in-text  medium-text">Sign In</p>
        <img src={signIn} alt="Sign In Icon" className="sign-in-icon" />
      </div>
      {/* Header with logo and description */}
      <div className="header-comp">
        <a href="/" className="header-link">
          <img src={logo} className="logo" alt="Jammming Logo" />
          <h1>
            Ja<span className="green-span">mmm</span>ing
          </h1>
        </a>
        <p className="medium-text">
          This app will give you the power to search and select songs to create
          a playlist right into your Spotify account.
        </p>
      </div>
    </header>
  );
}

export default Header;
