import React, { Component } from "react";
// import { ReactComponent as Fb } from "./images/facebookLogo.svg";
// import { ReactComponent as Ig } from "./images/instaLogo.svg";
// import { ReactComponent as Twitter } from "./images/twitterLogo.svg";
import "./cStyles/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="socialmedia">
            {/* <div className="svgs">
                <Fb className="icons" />
                <Ig className="icons" />
                <Twitter className="icons" />
            </div> */}
            <p>Follow us on Social Media @CopingCorner </p>
        </div>
        <span className="copyr">© CopingCorner by Vanessa Moreno Torres</span>
      </div>
    );
  }
}

export default Footer;
