import React, { useEffect } from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";
import { supabase } from "../../../supabaseClient";
import { useState } from "react";
import shape5 from "../media/images/shape-5.png"
import shape6 from "../media/images/shape-6.png"

const Client = () => {
  let [clientData, setClientData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let { data, error } = await supabase.from("client").select("*");

      console.log(data);

      if (error) {
        console.log(error);
      } else {
        setClientData(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container-fluid client-section position-relative mt-5">
      <img
        src={shape5}
        alt=""
        className="first "
      />
      <img
        src={shape6}
        alt=""
        className="second"
      />
      <Carousel controls={true} indicators={true} interval={null} touch>
        {clientData.map((v, i) => {
          return (
            <Carousel.Item key={i + 1}>
              <div className="row text-center p-5 mt-0 position-relative">
                <div className="section-before">
                  <h6 className="p-1 mb-1 client-happy">HAPPY CLIENTS</h6>

                  <h1 className="text-light mb-5 client-says">
                    What Client Say About Us
                  </h1>
                </div>
                <div className="mt-3 ">
                  <img
                    src={v.client_img}
                    alt=""
                    height={"100px"}
                    width={"100px"}
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <p className="text-light client-para">{v.client_para}</p>
                <div>
                  <h3 className="text-light">{v.client_name}</h3>
                  <h6
                    className=""
                    style={{
                      color: "orange",
                      fontFamily: "sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    {v.designation}
                  </h6>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Client;


