import React, { useState, useRef } from "react";
import { Scroll } from "@react-three/drei";
import box1iconimage from "../assets/box1iconimage.png";
import box2iconimage from "../assets/box1iconimage2.png";
import box1iconimage3 from "../assets/box1iconimage3.png";
import box1iconimage4 from "../assets/box1iconimage4.png";
import box1iconimage5 from "../assets/box1iconimage5.png";
import box1iconimage6 from "../assets/box1iconimage6.png";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";

const HerosectionFirst = () => {
  return (
    <div className="HerosectionFirst_maincont">
      <div className="HerosectionFirst_contentcont">
        <h1 className="HerosectionFirst_contentcont_h1">Reinvent</h1>
        <h2 className="HerosectionFirst_contentcont_h2">Value Chain</h2>
        <p className="HerosectionFirst_contentcont_p">
          Reinvent the value chain, solve unique problems, and boost
          productivity, efficiency, and profitability with Bespoke AI solutions.
        </p>
        <div className="HerosectionFirst_contentcont_buttoncont">
          <button className="HerosectionFirst_contentcont_buttoncont_button">
            CTA 1
          </button>
          <button className="HerosectionFirst_contentcont_buttoncont_button">
            CTA 2
          </button>
        </div>
      </div>
    </div>
  );
};

const HerosectionSecond = () => {
  return (
    <div className="HerosectionSecond_maincont">
      <div className="HerosectionSecond_contentcont">
        <h1 className="HerosectionSecond_contentcont_h1">REINVENTION</h1>
        <h2 className="HerosectionSecond_contentcont_h2">
          STRATEGY FOR SUCCESS
        </h2>
        <p className="HerosectionSecond_contentcont_p">
          The rate of change affecting businesses has risen over 183% in the
          last 4 years.
        </p>
        <p className="HerosectionSecond_contentcont_p">
          To counter this, 83% of organisations have accelerated the execution
          of reinvention with GenAI.
        </p>
      </div>
    </div>
  );
};

const HerosectionThird = () => {
  return (
    <div className="HerosectionThird_maincont">
      <div className="HerosectionThird_maincont_h1">
        in less than half the time against competitors
      </div>
      <div className="HerosectionThird_contentcont">
        <div className="HerosectionThird_contentcont_box">
          <div className="HerosectionThird_contentcont_box_imagecont">
            <img src={box1iconimage} alt="box1iconimage" />
          </div>
          <p className="HerosectionThird_contentcont_box_p">
            Greater improvements in productivity 
          </p>
        </div>
        <div className="HerosectionThird_contentcont_box">
          <div className="HerosectionThird_contentcont_box_imagecont">
            <img src={box2iconimage} alt="box2iconimage" />
          </div>
          <p className="HerosectionThird_contentcont_box_p">
            Greater improvements in productivity 
          </p>
        </div>
      </div>
    </div>
  );
};

const HerosectionFourth = () => {
  return (
    <div className="HerosectionFourth_maincont">
      <h1 className="HerosectionFourth_maincont_h1">GEN AI IN ACTION</h1>
      <div className="HerosectionFourth_contentcont">
        <div className="HerosectionFourth_contentcont_box">
          <div className="HerosectionFourth_contentcont_box_imagecont">
            <img src={box1iconimage3} alt="box1iconimage" />
          </div>
          <h3 className="HerosectionFourth_contentcont_box_h3">
            3M Hours saved
          </h3>
          <p className="HerosectionFourth_contentcont_box_p">
            An agency saved 3 million operational hours using GenAI. 
          </p>
        </div>
        <div className="HerosectionFourth_contentcont_box">
          <div className="HerosectionFourth_contentcont_box_imagecont">
            <img src={box1iconimage4} alt="box2iconimage" />
          </div>
          <h3 className="HerosectionFourth_contentcont_box_h3">
            16M customer offerings
          </h3>
          <p className="HerosectionFourth_contentcont_box_p">
              A company delivered 16 million personalised offerings to their
            customers within 3 months. 
          </p>
        </div>
        <div className="HerosectionFourth_contentcont_box">
          <div className="HerosectionFourth_contentcont_box_imagecont">
            <img src={box1iconimage5} alt="box2iconimage" />
          </div>
          <h3 className="HerosectionFourth_contentcont_box_h3">+10% Revenue</h3>
          <p className="HerosectionFourth_contentcont_box_p">
            An insurer increased the potential revenue by 10% using AI in only
            one single function of the whole process. 
          </p>
        </div>
      </div>
    </div>
  );
};

const HerosectionFifth = () => {
  return (
    <div className="HerosectionFifth_maincont">
      <h1 className="HerosectionFifth_maincont_h1">Our suite of service</h1>
      <div className="HerosectionFifth_contentcont">
        <div className="HerosectionFifth_contentcont_box">
          <div className="HerosectionFifth_contentcont_box_imagecont">
            <img src={box1iconimage6} alt="box1iconimage" />
          </div>
          <h3 className="HerosectionFifth_contentcont_box_h3">
            AI ASSISTANT FOR CUSTOMER SERVICE
          </h3>
          <p className="HerosectionFifth_contentcont_box_p">
            Eliminate unique customer frustrations and operational issues to
            deliver a seamless experience that keeps them coming back, all while
            driving greater operational efficiency and productivity with the
            custom AI assistant for customer service.
          </p>
          <button className="HerosectionFifth_contentcont_box_button">
            Learn More
          </button>
        </div>
        <div className="HerosectionFifth_contentcont_box">
          <div className="HerosectionFifth_contentcont_box_imagecont">
            <img src={box1iconimage6} alt="box2iconimage" />
          </div>
          <h3 className="HerosectionFifth_contentcont_box_h3">
            AI WORKFORCE FOR BUSINESS OPERATIONS
          </h3>
          <p className="HerosectionFifth_contentcont_box_p">
            Imagine a workplace where challenges are met head-on, departments
            thrive, and employees are empowered to focus on creativity and
            innovation—all driven by custom AI solutions applicable throughout
            the value chain.
          </p>
          <button className="HerosectionFifth_contentcont_box_button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const Herosectionsixth = () => {
  return (
    <div className="Herosectionsixth_maincont">
      <h1 className="Herosectionsixth_maincont_h1">
        Achieve Your Goals <br /> with Altus Solutions
      </h1>
      <div className="Herosectionsixth_maincontent_cont">
        <div className="Herosectionsixth_maincontent_cont_uppermain">
          <div className="Herosectionsixth_maincontent_cont_uppermain_left">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              BOOST YOUR SUCCESS
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              An agency saved 3 million operational hours using GenAI. 
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              Our intelligent solutions target unique challenges, enhance
              customer experiences, and fuel innovation, setting you apart in a
              competitive landscape.
            </p>
          </div>
          <div className="Herosectionsixth_maincontent_cont_uppermain_right">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              ADAPTIVE SCALABILITY
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              AI Tools that grow with you.
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              We proactively ensure that your solutions meet new demands so as
              you grow, your processes and systems remain optimised—enabling
              confident and sustainable scaling.
            </p>
          </div>
        </div>
        <div className="Herosectionsixth_maincontent_cont_middlemain">
          <h2 className="Herosectionsixth_maincontent_cont_h2">
            EMPOWERED HUMAN <br /> CAPITAL
          </h2>
          <p className="Herosectionsixth_maincontent_cont_p">
            An agency saved 3 million operational hours using GenAI. 
          </p>
          <p className="Herosectionsixth_maincontent_cont_psmall">
            Ease frustrations, mitigate risks, and handle routine tasks,
            enabling your <br /> employees to focus on creativity, innovation,
            and high-value work— <br />
            leading to a more engaged, productive, and motivated workforce.
          </p>
        </div>
        <div className="Herosectionsixth_maincontent_cont_lowermain">
          <div className="Herosectionsixth_maincontent_cont_lowermain_left">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              MAX RESULTS, LOW OVERHEAD
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              Achieve more without heavy costs
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              By optimising processes, we help you achieve peak performance
              while keeping operational expenses in check.
            </p>
          </div>
          <div className="Herosectionsixth_maincontent_cont_lowermain_right">
            <h2 className="Herosectionsixth_maincontent_cont_h2">
              BE A DIFFERENTIATOR
            </h2>
            <p className="Herosectionsixth_maincontent_cont_p">
              Stand out from the crowd.
            </p>
            <p className="Herosectionsixth_maincontent_cont_psmall">
              Our customised solutions enable you to offer distinctive
              capabilities that set you apart from competitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Herosectionseventh = () => {
  return (
    <div className="Herosectionseventh_maincont">
      <h1 className="Herosectionseventh_maincont_h1">
        Partner with Us to <br />
        Realize Your Vision
      </h1>
      <div className="Herosectionseventh_maincont_content_cont">
        <div className="Herosectionseventh_maincont_content_cont_left">
          <p className="Herosectionseventh_maincont_content_cont_left_h2">
            EXPERTISE
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_h3">
            Years of experience, young creative minds, and passion for
            problem-solving and innovation.
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_p">
            With deep industry knowledge, a flare of creativity, experience, and
            a commitment to innovation, we don’t just offer technology—we
            partner and consult with you to unlock your business’s full
            potential by concisely identifying challenges, discerning room for
            improvements.
          </p>
        </div>
        <div className="Herosectionseventh_maincont_content_cont_middle">
          <div className="Herosectionseventh_maincont_content_cont_middleupper">
            <p className="Herosectionseventh_maincont_content_cont_left_h2">
              SEAMLESS INTEGRATION
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_h3">
              Resolve business problems smoothly and effortlessly.
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_p">
              Our solutions are designed to work harmoniously with your existing
              systems, minimising disruption and ensuring a quick and efficient
              transition.
            </p>
          </div>
          <div className="Herosectionseventh_maincont_content_cont_middlelower">
            <p className="Herosectionseventh_maincont_content_cont_left_h2">
              BESPOKE SOLUTIONS
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_h3">
              We solve your unique problems.
            </p>
            <p className="Herosectionseventh_maincont_content_cont_left_p">
              We collaborate closely with you to design and deliver customised
              solutions, ensuring that our AI tools are fine-tuned to address
              your unique business problems and requirements.
            </p>
          </div>
        </div>
        <div className="Herosectionseventh_maincont_content_cont_right">
          <p className="Herosectionseventh_maincont_content_cont_left_h2">
            PARTNERSHIP FOR LASTING IMPACT
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_h3">
            Your success is our priority, now and in the future.
          </p>
          <p className="Herosectionseventh_maincont_content_cont_left_p">
            e provide regular updates, ongoing support, and continuous
            optimisation to ensure your unique challenges are always addressed,
            and our AI solutions continue delivering value as your business
            grows.
          </p>
        </div>
      </div>
    </div>
  );
};

const AIFooter = () => (
  <div>
    <div className="Footer_maincontainer">
      <div className="Footer_content_container1">
        <h1 className="Footer_content_container1_h1">ALTUS</h1>
        <p>
          123 <br />
          Innovation <br />
          St, Tech City, <br />
          Country
        </p>
      </div>
      <div className="Footer_content_container2">
        <Link className="Footer_content_container2_link" to="#">
          Instagram
        </Link>
        <Link className="Footer_content_container2_link" to="#">
          Linkedin
        </Link>
        <Link className="Footer_content_container2_link" to="#">
          Whatsapp
        </Link>
        <div className="Footer_content_container2_emaildiv">
          <p className="Footer_content_container2_emaildiv_p">
            General inquiries
          </p>
          <span className="Footer_content_container2_emaildiv_span">
            support@example.com
          </span>
        </div>
        <div className="Footer_content_container2_emaildiv">
          <p className="Footer_content_container2_emaildiv_p">New business</p>
          <span className="Footer_content_container2_emaildiv_span">
            support@example.com
          </span>
        </div>
      </div>
      <div className="Footer_content_container3">
        <h1 className="Footer_content_container1_h1">
          Subscribe to <br /> our newsletter
        </h1>
        <div className="Footer_content_container1_inputcont">
          <input
            className="Footer_content_container1_input"
            placeholder="Your E-mail"
          />
          <span className="Footer_content_container1_span">
            <i className="bi bi-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
    <div className="FooterSub_container">
      <p className="FooterSub_container_p">
        2024 AI Solution. All rights reserved
      </p>
      <div className="FooterSub_container_right">
        <Link className="FooterSub_container_right_link" to="#">
          Terms and Conditions
        </Link>
        <Link className="FooterSub_container_right_link" to="#">
          Privacy Policy
        </Link>
      </div>
    </div>
  </div>
);

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

const HeroSection = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
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

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <Scroll html>
      <div className="Main_Layout_Container">
        <div className="Layout_section">
          <HerosectionFirst />
        </div>
        <div className="Layout_section">
          <HerosectionSecond />
        </div>
        <div className="Layout_section">
          <HerosectionThird />
        </div>
        <div className="Layout_section">
          <HerosectionFourth />
        </div>
        <div className="Layout_section">
          <HerosectionFifth />
        </div>
        <div className="Layout_section">
          <Herosectionsixth />
        </div>
        <div className="Layout_section">
          <Herosectionseventh />
        </div>
        {/* <AIFooter /> */}
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
            position: "absolute",
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

export default HeroSection;
