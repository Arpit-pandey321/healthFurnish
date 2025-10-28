import React, { useEffect } from "react";
import profile from "../media/images/profile_image_1718974002_u0c6szwgtof4xbvi6bhv.png";
import Aos from "aos";
import "aos/dist/aos.css";


const Team = () => {
    useEffect(()=>{
        Aos.init({
            duration:"1000"
        })
    },[])
  return (
    <div className="container">
      <div className="row mt-5 d-flex align-items-center justify-content-center">
        <h1 className="text-center mt-5 team-head" data-aos="fade-right" data-aos-duration="1000">Our Team</h1>
        <div className="col-5 mt-5" data-aos="fade-right">
          <div className="imgs-wrapper">
            <img
              src="https://cdn.fitimg.in/team/profile_image_1718974045_y3bkiqrwflwczcaiodwg.png"
              alt=""
            />
          </div>
          <div className="text-start">
            <h2 className="profile-name" >Priyam Roy</h2>
            <p className="profile-designation">Co-founder and Director</p>
            <p className="profile-education">UBS | Columbia | Oxford | University of Delhi</p>
          </div>
        </div>
        <div className="col-5 mt-5 " data-aos="fade-left">
          <div className="imgs-wrapper">
            <img src={profile} alt="amit" />
          </div>
          <div className="profile-info text-start">
            <h2 className="profile-name">Amit Lokhande</h2>
            <p className="profile-designation">Creative Head</p>
            <p className="profile-education">
              UBS | Columbia | Oxford | University of Delhi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
