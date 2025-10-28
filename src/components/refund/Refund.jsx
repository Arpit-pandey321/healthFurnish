import React from "react";
import back from "../media/images/banner-1.jpg"

const Refund = () => {
  return (
    <>
      <div
        className=" container-fluid about-intro d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: { back },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "30vh",
        }}
      >
        <h1 className="">Refund</h1>
      </div>
      <div className="container text-center">
        <h1
          style={{ fontFamily: "serif", fontWeight: "600", margin: "80px 0px" }}
        >
          Cancellation and Refund Policy
        </h1>
        <div className="row">
          <p className="text-muted text-start">
            Thank you for subscribing to our Service(s) at ‘Nutrifurnish Diet
            Packages’. If, for any reason, You are not completely satisfied with
            our Service(s), We invite You to review our policy on Cancellation
            and Refunds. The following Terms are applicable for any Services
            that You availed from us.
          </p>
        </div>
        <div className="row text-start mt-3">
          <h3>Interpretation</h3>
          <p className="text-muted mt-2">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
        </div>
        <div className="row text-start mt-3">
          <h3>Definitions</h3>
          <p className="text-muted mt-2">
            You mean the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the Service, as applicable.
          </p>
        </div>
        <div className="row text-start mt-3 mb-5">
          <h3>Refund</h3>
          <p className="text-muted mt-2">
            We don’t have any Return Policy. Once You placed Orders for any of
            our Services, We will not be making any Refund of Orders under any
            circumstances.
          </p>
        </div>
      </div>
    </>
  );
};

export default Refund;
