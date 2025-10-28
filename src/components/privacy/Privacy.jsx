import React from "react";
import back from "../media/images/banner-1.jpg"

const Privacy = () => {
  return (
    <>
      <div
        className=" container-fluid about-intro d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:{back},
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "30vh",
        }}
      >
        <h1 className="">Privacy policy</h1>
      </div>
      <div className="container text-center">
        <h1
          style={{ fontFamily: "serif", fontWeight: "600", margin: "80px 0px" }}
        >
          Privacy policy
        </h1>
        <div className="row">
          <p className="text-muted text-start">
            As a condition to using the Service, you agree to the terms of the
            Nutrifurnish Privacy Policy as it may be updated from time to time.
            Nutrifurnish understands that privacy is important to you. You do,
            however, agree that Nutrifurnish may monitor, edit or disclose your
            personal information, including the content of your emails, if
            required to do so in order to comply with any valid legal process or
            governmental request (such as a search warrant, subpoena, statute,
            or court order), or as otherwise provided in these Terms of Use and
            the Privacy Policy. Personal information collected by Nutrifurnish
            may be stored and processed in any country in which Nutrifurnish or
            its agents maintain facilities. By using Nutrifurnish you consent to
            any such transfer of information outside of your country. Account
            Inactivity: After a period of inactivity, Nutrifurnish reserves the
            right to disable or terminate a user's account.
          </p>
        </div>
        <div className="row text-start mt-3">
          <h3>Termination / Cancellation</h3>
          <p className="text-muted mt-2">
            You may cancel your use of the Services and/or terminate this
            Agreement with or without cause at any time by providing notice to
            Nutrifurnish provided, however, that a terminated account may
            continue to exist for up to two business days before such
            cancellation takes effect. Nutrifurnish may at any time and for any
            reason terminate the Services, terminate this Agreement, or suspend
            or terminate your account. In the event of termination, your account
            will be disabled and you may not be granted access to your account
            or any files or other content contained in your account although
            residual copies of information may remain in our system. Except as
            set forth above or unless Nutrifurnish has previously canceled or
            terminated your use of the Services (in which case subsequent notice
            by Nutrifurnish shall not be required), if you have provided an
            valid email address, Nutrifurnish will notify you via email of any
            such termination or cancellation, which shall be effective
            immediately upon Nutrifurnish delivery of such notice.
          </p>
        </div>
        <div className="row text-start mt-3">
          <h3>Indemnification</h3>
          <p className="text-muted mt-2">
            You agree to hold harmless and indemnify Nutrifurnish, and its
            subsidiaries, affiliates, officers, agents, and employees from and
            against any third party claim arising from or in any way related to
            your use of the Service, including any liability or expense arising
            from all claims, losses, damages (actual and consequential), suits,
            judgments, litigation costs and attorneys' fees, of every kind and
            nature. In such a case, Nutrifurnish will provide you with written
            notice of such claim, suit or action.
          </p>
        </div>
        <div className="row text-start mt-3 mb-5">
          <h3>Choice of Law / Jurisdiction</h3>
          <p className="text-muted mt-2">
            These Terms of Use will be governed by and construed in accordance
            with the laws of the State of Maharashtra, INDIA, without giving
            effect to its conflict of laws provisions or your actual state or
            country of residence. Any claims, legal proceeding or litigation
            arising in connection with the Service will be brought solely in
            city Ambernath, Dist: THANE Tal: Ambernath, Maharashtra, INDIA and
            you consent to the jurisdiction of such courts. <br />
            <br /> "We as a merchant shall be under no liability whatsoever in
            respect of any loss or damage arising directly or indirectly out of
            the decline of authorization for any Transaction, on Account of the
            Cardholder having exceeded the preset limit mutually agreed by us
            with our acquiring bank from time to time"
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
