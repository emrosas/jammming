import "./Header.css";
import logo from "../../assets/logo.svg";
import signIn from "../../assets/sign-in.svg";
import { useEffect } from "react";

function Header({ userData }) {
  function generateRandomString(length) {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  //Handles login and permissions
  const loginWithSpotify = () => {
    const client_id = "af349e24cebb47d7b13cf902dc4a56a9";
    const redirect_uri = "http://localhost:5173/";
    const scopes = "user-read-private user-read-email playlist-modify-public";
    const state = generateRandomString(16);
    localStorage.setItem("spotify_auth_state", state);

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&scope=" + encodeURIComponent(scopes);
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&state=" + encodeURIComponent(state);

    window.location = url;
  };

  const logoutOfSpotify = () => {
    localStorage.removeItem("spotify_access_token");
    localStorage.removeItem("user_data");
    localStorage.removeItem("spotify_auth_state");
    window.location = "/";
  };

  //Checks for access token in URL
  const getAccessTokenFromURL = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("access_token");
  };

  const getExpiresInFromURL = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("expires_in");
  };

  useEffect(() => {
    const accessToken = getAccessTokenFromURL();
    const expiresIn = getExpiresInFromURL();
    if (accessToken) {
      localStorage.setItem("spotify_access_token", accessToken);

      // Clear the URL parameters
      window.history.pushState("", "", window.location.pathname);

      //Set a timeout to redirect the user for a new token when the current one expires
      setTimeout(() => {
        localStorage.removeItem("spotify_access_token");
        loginWithSpotify();
      }, expiresIn * 1000);
    }
  }, []);

  return (
    <header>
      {/* Sign in Component */}
      {userData ? (
        !userData.error ? (
          <div className="sign-in">
            <div className="user-info" onClick={logoutOfSpotify}>
              <p className="user-name">{userData.display_name}</p>
              <img
                src={userData.images[0].url}
                alt="User Profile"
                className="user-profile"
              />
            </div>
          </div>
        ) : (
          <div className="sign-in">
            <div className="sign-in-button" onClick={loginWithSpotify}>
              <p className="sign-in-text  medium-text">Sign In</p>
              <img src={signIn} alt="Sign In Icon" className="sign-in-icon" />
            </div>
          </div>
        )
      ) : (
        <div className="sign-in">
          <div className="sign-in-button" onClick={loginWithSpotify}>
            <p className="sign-in-text  medium-text">Sign In</p>
            <img src={signIn} alt="Sign In Icon" className="sign-in-icon" />
          </div>
        </div>
      )}
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
