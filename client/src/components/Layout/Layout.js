import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      {/* <main className="min-h-4/5">{children}</main> */}

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Apni-Kart shop now",
  description: "Best-things available",
  keywords: "shop,best,cheap,mobile,price",
  author: "Learner",
};

export default Layout;
