import React from "react";
import Layout from "./../components/Layout/Layout";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <section className="mb-2">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="d-flex flex-row p-5">
          <div className="ml-2">
            <img src="./images/contactus.jpeg" alt="" srcset="" width={"60%"} />
          </div>

          <div>
            <div className="d-flex flex-col text-center my-2"></div>
            <ul className="list-unstyled mb-0 ">
              <li className="mb-4">
                <FaLocationDot size={30} className="h-100" />
                <p>Surat, India</p>
              </li>
              <li className="mb-4">
                <FaPhone size={30} className="h-100" />
                <p>90000-00000</p>
              </li>
              <li className="mb-4">
                <IoMdMail size={30} className="h-100" />
                <p>contact@apnikart.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="d-flex justify-content-center align-items-center row">
          <div className="col-md-6 mb-md-0 mb-2">
            <img src="./images/contactus.jpeg" alt="" srcset="" width={"50%"} />
          </div>
          <div className="col-md-2 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <FaLocationDot size={30} className="h-100" />
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <FaPhone size={30} className="h-100" />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <IoMdMail size={30} className="h-100" />
                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div> */}
      </section>
    </Layout>
  );
};

export default Contact;
