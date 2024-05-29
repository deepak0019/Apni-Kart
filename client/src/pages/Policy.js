import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus mt-5">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h3>Privacy Policy for Apni-Kart</h3>
          <ul>
            <li>
              <h4>How We Use Your Information:</h4>
              <p>
                We use the collected information for order processing, account
                management, and to provide a personalized shopping experience.
                We may also use your email address to send updates, promotional
                offers, and newsletters, with the option to unsubscribe at any
                time.
              </p>
            </li>

            <li>
              <h4>Data Security:</h4>
              <p>
                We take appropriate measures to protect your information. This
                includes encryption during data transmission, secure payment
                gateways, and regular security assessments to guard against
                unauthorized access.
              </p>
            </li>

            <li>
              <h4>User Rights</h4>
              <p>
                Users have the right to access, correct, or delete their
                personal information. To exercise these rights or inquire about
                your data, please contact us at contact@apnikart.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
