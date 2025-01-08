import React, { useState, useRef } from "react";
import { Scroll } from "@react-three/drei";
// import box1iconimage from "../assets/box1iconimage.png";
// import box2iconimage from "../assets/box1iconimage2.png";
// import box1iconimage3 from "../assets/box1iconimage3.png";
// import box1iconimage4 from "../assets/box1iconimage4.png";
// import box1iconimage5 from "../assets/box1iconimage5.png";
// import box1iconimage6 from "../assets/box1iconimage6.png";
import botimage from "../../assets/aibotimagecontactis.png";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const LayoutOverlay = ({
  isVisible,
  toggleOverlay,
  handleaboutnavigate,
  handlehomenavigate,
  handleFrontendpagenavigate,
  handleBackendpagenavigate,
  handleContactusnavigate,
}) => {
  const overlayRef = useRef();

  React.useEffect(() => {
    if (isVisible) {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: "power2.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        duration: 0.5,
        opacity: 0,
        x: "-100%",
        ease: "power2.in",
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={overlayRef}
      className="layout-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        transform: "translateX(-100%)",
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "300px 50px",
        zIndex: 1000,
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          color: "white",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
        onClick={toggleOverlay}
      >
        ✖
      </button>
      <div className="Menu_container_contentbox">
        <div className="Menu_container_contentbox_left">
          <button
            onClick={handlehomenavigate}
            className="Menu_container_contentbox_left_link"
          >
            Home
          </button>
          <button
            onClick={handleaboutnavigate}
            className="Menu_container_contentbox_left_link"
          >
            About Us
          </button>
          <button
            onClick={handleContactusnavigate}
            className="Menu_container_contentbox_left_link"
          >
            Contact Us
          </button>
        </div>
        <div className="Menu_container_contentbox_right">
          <button
            onClick={handleFrontendpagenavigate}
            className="Menu_container_contentbox_right_link"
          >
            AI ASSISTANT FOR CUSTOMER SUPPORT
          </button>
          <button
            onClick={handleBackendpagenavigate}
            className="Menu_container_contentbox_right_link"
          >
            AI WORKFORCE FOR BACKEND OPERATIONS
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactusContent = () => {
    return (
      <div className="main_Contactus_container">
        <div className="Left_Contactus_container">
          <h1 className="Left_Contactus_container_h1">Get in touch</h1>
          <h2 className="Left_Contactus_container_h2">Get in touch</h2>
          <p className="Left_Contactus_container_p">
            We’d love to hear from you. Whether you have questions, feedback, or
            want to explore collaboration opportunities, reach out anytime!
          </p>
          <div className="Left_main_flexcontainer">
            <div className="Left_main_flexcontainer_left">
              <span className="Left_main_flexcontainer_left_span">
                <i class="bi bi-envelope-fill"></i>
              </span>
            </div>
            <div className="Left_main_flexcontainer_right">
              <span>SEND US A MESSAGE</span>
              <p>support@example.com</p>
            </div>
          </div>
          <div className="Left_main_flexcontainer">
            <div className="Left_main_flexcontainer_left">
              <span className="Left_main_flexcontainer_left_span">
                <i class="bi bi-telephone-fill"></i>
              </span>
            </div>
            <div className="Left_main_flexcontainer_right">
              <span>GIVE US A CALL</span>
              <p>+917894561230</p>
            </div>
          </div>
          <div className="Left_imageContainer">
            <img src={botimage} alt="botimage" />
          </div>
        </div>
        <div className="Right_Contactus_container">
          <form className="Right_Contactus_container_form">
            <div className="Right_Contactus_container_fieldcontainer">
              <div className="Right_Contactus_container_inputcontainer">
                <p>FIRST NAME</p>
                <input
                  placeholder="Chris"
                  className="Right_Contactus_container_inputcontainer_input"
                />
              </div>
              <div className="Right_Contactus_container_inputcontainer">
                <p>LAST NAME</p>
                <input
                  placeholder="Chris"
                  className="Right_Contactus_container_inputcontainer_input"
                />
              </div>
            </div>
            <div className="Right_Contactus_container_fieldcontainer">
              <div className="Right_Contactus_container_inputcontainer">
                <p>BUSINESS E-MAIL</p>
                <input
                  placeholder="abc@gmail.com"
                  className="Right_Contactus_container_inputcontainer_input"
                />
              </div>
              <div className="Right_Contactus_container_inputcontainer">
                <p>PHONE</p>
                <input
                  placeholder="1234567890"
                  className="Right_Contactus_container_inputcontainer_input"
                />
              </div>
            </div>
            <div className="Right_Contactus_container_fieldcontainer">
              <div className="Right_Contactus_container_inputcontainer">
                <p>COUNTRY CODE</p>
                <input
                  placeholder="451155"
                  className="Right_Contactus_container_inputcontainer_input"
                />
              </div>
              <div className="Right_Contactus_container_inputcontainer">
                <p>SUBJECT OF INDUSTRY</p>
                <input
                  placeholder="E-commerce"
                  className="Right_Contactus_container_inputcontainer_input"
                />
              </div>
            </div>
            <div className="Right_Contactus_container_fieldcontainer">
              <div className="Right_Contactus_container_inputcontainer2">
                <p>YOUR MESSAGE</p>
                <input
                  placeholder="Type Here..."
                  className="Right_Contactus_container_inputcontainer_input2"
                />
              </div>
            </div>
            <button className="Right_Contactus_container_button">Send</button>
          </form>
        </div>
      </div>
    );
}

const ContactusSection = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const navigate = useNavigate();
  const handlehomenavigate = () => {
    navigate("/");
  };

  const handleaboutnavigate = () => {
    navigate("/Aboutus");
  };

  const handleFrontendpagenavigate = () => {
    navigate("/Frontend_AI");
  };

  const handleBackendpagenavigate = () => {
    navigate("/Frontend_AI");
  };

  const handleContactusnavigate = () => {
    navigate("/ContactUs");
  };

  return (
    <Scroll html>
      <div className="Main_Layout_Container">
        <div className="Layout_section">
    <ContactusContent/>
        </div>
        <LayoutOverlay
          isVisible={isOverlayVisible}
          toggleOverlay={toggleOverlay}
          handlehomenavigate={handlehomenavigate}
          handleaboutnavigate={handleaboutnavigate}
          handleFrontendpagenavigate={handleFrontendpagenavigate}
          handleBackendpagenavigate={handleBackendpagenavigate}
          handleContactusnavigate={handleContactusnavigate}
        />
        <button
          onClick={toggleOverlay}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 900,
            background:
              "linear-gradient(131.19deg, #1c1c1c 1.42%, #292929 100.93%)",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-menu-button-fill"></i>
        </button>
      </div>
    </Scroll>
  );
};

export default ContactusSection;
