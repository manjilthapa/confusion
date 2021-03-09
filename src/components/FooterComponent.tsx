import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterComponent: React.FC<{}> = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 col-sm-6">
            <h4>Our Address</h4>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <br />
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-4 col-sm-5 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
              </a>

              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
              </a>
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
