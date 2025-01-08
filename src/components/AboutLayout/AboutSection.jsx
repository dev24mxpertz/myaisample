import React, { useState, useRef } from "react";
import { Scroll } from "@react-three/drei";
// import box1iconimage from "../assets/box1iconimage.png";
// import box2iconimage from "../assets/box1iconimage2.png";
// import box1iconimage3 from "../assets/box1iconimage3.png";
// import box1iconimage4 from "../assets/box1iconimage4.png";
// import box1iconimage5 from "../assets/box1iconimage5.png";
// import box1iconimage6 from "../assets/box1iconimage6.png";
import { Link, useNavigate } from "react-router-dom";
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

const AboutsectionFirst = () => {
  return (
    <div className="Aboutfirst_maincont">
      <div className="AboutFirst_contentcont">
        <h1 className="AboutFirst_contentcont_h1">
          Transforming Value Chains, Solving Challenges
        </h1>
        <h2 className="AboutFirst_contentcont_h2">With Bespoke AI Solutions</h2>
        <p className="AboutFirst_contentcont_p">
          We collaborate with businesses as strategic partners, offering
          insightful consulting to uncover obstacles, seize opportunities, and
          craft bespoke AI solutions. Our approach doesn’t just solve challenges
          or mitigate risks—it reinvents your value chain, empowering your team
          to focus on innovation and high-impact work.
        </p>
        <p className="AboutFirst_contentcont_p">
          Specialising in AI consulting, we design tailored solutions to address
          unique business needs, streamline both front-end and back-end
          operations, and eliminate inefficiencies. Helping you unlock the
          potential fo sustainable growth and unparalleled efficiency.
        </p>
      </div>
    </div>
  );
};

const AboutsectionSecond = () => {
  return (
    <div className="AboutSecond_maincont">
      <div className="AboutSecond_contentcont">
        <h1 className="AboutSecond_contentcont_h1">WHO ARE WE ?</h1>
        {/* <h2 className="AboutSecond_contentcont_h2">Value Chain</h2> */}
        <p className="AboutSecond_contentcont_p">
          We are a UK-based GenAI company of passionate professionals dedicated
          to solving business challenges with AI reinvention. With a
          client-first approach and a relentless focus on results, we delive
          strategic consulting and custom AI solutions to help businesses
          achieve operational excellence.
        </p>
        <p className="AboutSecond_contentcont_p">
          We believe in AI's transformative power to overcome challenges, drive
          growth, empower teams, and enhance productivity, enabling businesses
          to achieve their goals and unlock new possibilities
        </p>
      </div>
    </div>
  );
};

const AboutsectionThird = () => {
  return (
    <div className="AboutThird_maincont">
      <div className="AboutThird_contentcont">
        <h1 className="AboutThird_contentcont_h1">
          Our vision is to create a future where technology and humanity coexist
          symbiotically.
        </h1>
        {/* <h2 className="AboutSecond_contentcont_h2">Value Chain</h2> */}
        <p className="AboutThird_contentcont_p">
          <span>We want t</span>o create a world where technology and humanity
          thrive together, unlocking infinit possibilities for innovation,
          growth, and sustainability. We strive to build work environments that
          inspire creativity, amplify human potential, and pave the way for a
          brighter, AI-driven future.
        </p>
        <p className="AboutThird_contentcont_p">
          We envision a world where businesses thrive by fostering work
          environments that empower people and enable them to achieve their
          fullest potential, amplified by the transformative power of artific
          intelligence. We aspire to bridge the gap between human creativity and
          AI’s limitless capacity to innovate, ensuring a sustainable and
          prosperous future for Businesses, Employees, and Customers
        </p>
      </div>
    </div>
  );
};

const AboutsectionFourth = () => {
  return (
    <div className="AboutFourth_maincont">
      <div className="AboutFourth_contentcont">
        <h1 className="AboutFourth_contentcont_h1">
          Our mission is to transform businesses through tailored AI solutions
          that don’t just solve problems but create new opportunities.
        </h1>
        {/* <h2 className="AboutSecond_contentcont_h2">Value Chain</h2> */}
        <p className="AboutFourth_contentcont_p">
          At our core, we empower businesses to embrace the transformative
          potential of artificia intelligence. Through custom-tailored
          solutions, we address unique challenges, streamline inefficiencies,
          and elevate workforce capabilities. Guided by a commitment to
          innovation an sustainability, we aim to reimagine industries, deliver
          exceptional value, and shape a future where AI works for humanity.
        </p>
        <p className="AboutFourth_contentcont_p">
          We aim to address inefficiencies, elevate productivity, and empower
          workforces to focus on high-valu contributions while leaving
          repetitive tasks to AI. By integrating ethical AI practices, we are
          committed to building scalable, secure, and sustainable solutions that
          fuel innovation, enhance employee satisfaction, and ensure long-term
          growth.
        </p>
      </div>
    </div>
  );
};

const AboutsectionFiFth = () => {
  return (
    <div className="AboutFiFth_maincont">
      <h1 className="AboutFiFth_h1">HOW WE WORK?</h1>
      <p className="AboutFiFth_p">
        We start with an in-depth consultation to understand your business
        objectives, challenges, and current processes.
      </p>
      <div className="AboutFiFth_main_contentbox">
        <div className="AboutFiFth_main_contentbox_left">
          <p className="AboutFiFth_main_contentbox_heading_p">
            ONGOING SUPPORT AND OPTIMISATION
          </p>
          <p className="AboutFiFth_main_contentbox_body_p">
            Our commitment to your success doesn’t end with implementation. We
            offer regular updates to your unique solutions, continuous support
            and optimisation to ensure your AI solutions remain effective and
            evolve with your business needs
          </p>
        </div>
        <div className="AboutFiFth_main_contentbox_middle">
          <div className="AboutFiFth_main_contentbox_middle_box">
            <p className="AboutFiFth_main_contentbox_heading_p">
              CONSULTATION AND ASSESSMENT
            </p>
            <p className="AboutFiFth_main_contentbox_body_p">
              We start with an in-depth consultation to understand your business
              problems, challenges, objectives, and current processes.
            </p>
          </div>
          <div className="AboutFiFth_main_contentbox_middle_box">
            <p className="AboutFiFth_main_contentbox_heading_p">
              IMPLEMENTATION AND TRAINING
            </p>
            <p className="AboutFiFth_main_contentbox_body_p">
              We implement AI solutions and provide comprehensive training to
              your staff, ensuring they are equipped to leverage the new
              technology effectively
            </p>
          </div>
        </div>
        <div className="AboutFiFth_main_contentbox_right">
          <p className="AboutFiFth_main_contentbox_heading_p">
            SOLUTION DESIGN AND DEVELOPMENT
          </p>
          <p className="AboutFiFth_main_contentbox_body_p">
            Our team designs and develops AI solutions customised to your
            specific requirements. We ensur seamless integration with your
            existing systems for a smooth transition and minimal disruption.
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
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
          <AboutsectionFirst />
        </div>
        <div className="Layout_section">
          <AboutsectionSecond />
        </div>
        <div className="Layout_section">
          <AboutsectionThird />
        </div>
        <div className="Layout_section">
          <AboutsectionFourth />
        </div>
        <div className="Layout_section">
          <AboutsectionFiFth />
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

export default AboutSection;
