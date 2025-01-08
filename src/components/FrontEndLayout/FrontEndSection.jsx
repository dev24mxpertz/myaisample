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

const FrontendsectionFirst = () => {
  return (
    <div className="FrontendsectionFirst_maincont">
      <div className="FrontendsectionFirst_contentcont">
        <h1 className="FrontendsectionFirst_contentcont_h1">
          Empower customer support
        </h1>
        <h2 className="FrontendsectionFirst_contentcont_h2">
          with AI Assistants.
        </h2>
        <p className="FrontendsectionFirst_contentcont_p">
          Reinvent the value chain, solve unique problems, and boost
          productivity, efficiency, and profitability with Bespoke AI solutions.
        </p>
        <div className="FrontendsectionFirst_contentcont_buttoncont">
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            Delays
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            Fragmented
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            Impersonal
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            High inquiry
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            limited
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>

          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            Ever-changing
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            Stress
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            challenges
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            Eroding
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FrontendsectionSecond = () => {
  return (
    <div className="FrontendsectionSecond_maincont">
      <div className="FrontendsectionSecond_contentcont">
        <h1 className="FrontendsectionSecond_contentcont_h1">
          Enhancing human connection
        </h1>
        <h2 className="FrontendsectionSecond_contentcont_h2">
          seamless, personalised, and contextual support across all digital
          channels powered by Machine Learning.
        </h2>
        <p className="FrontendsectionSecond_contentcont_p">
          AI Assistant powered by Machine Learning, elevates your customer
          service and engagement by offering 24/7 independent, personalised,
          multilingual, and contextual support in both B2B and B2C environments
        </p>
        <p className="FrontendsectionSecond_contentcont_p">
          AI assistants powered by machine learning continuously learn and
          adapt, diminishing the need for extensive customer service resources.
        </p>
        <p className="FrontendsectionSecond_contentcont_p">
          With seamless integration across all digital channels, it streamlines
          operations by handling both routine and complex queries, reducing
          inefficiencies and accelerating response times, empowering your team t
          provide unparalleled customer engagement whenever and wherever it’s
          needed.
        </p>
        <p className="FrontendsectionSecond_contentcont_p">
          By consistently delivering accurate answers and boosting customer
          satisfaction, AI Assistants free your team to focus on cultivating
          relationships and tackling high-priority challenges.
        </p>
        <div className="FrontendsectionFirst_contentcont_buttoncont">
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            HIRE AI ASSISTANTS
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FrontendsectionThird = () => {
  return (
    <div className="FrontendsectionThird_maincont">
      <div className="FrontendsectionThird_contentcont">
        <h1 className="FrontendsectionThird_contentcont_h1">
          Bridging the Gap Between Technology and Empathy
        </h1>
        <h2 className="FrontendsectionThird_contentcont_h2">
          From Simple Scripts to Intelligent Interactions
        </h2>
      </div>
      <div className="FrontendsectionThird_tablecont">
        <table className="FrontendsectionThird_table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>
                AI <br /> ASSISTANT
              </th>
              <th>
                TRADITIONAL <br /> CHATBOT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NLP</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>24/7 SUPPORT</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>CONTEXTUAL UNDERSTANDING</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>LEARNING FROM INTERACTIONS /MACHINE LEARNING</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>PERSONALISED RESPONSES</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>MULTI-STEP QUERY HANDLING</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>ADAPTABLE CONVERSATION FLOW</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>INTEGRATION WITH BUSINESS SYSTEMS</td>
              <td>Y</td>
              <td>LIMITED</td>
            </tr>
            <tr>
              <td>SELF-CORRECTING CAPABILITIES</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>COMPLEX QUERIES</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>REAL TIME INSIGHTS AND REPORTING</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>ERROR RECOGNITION AND CLARIFICATION</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>MULTILINGUAL CAPABILTIES</td>
              <td>Y</td>
              <td>N</td>
            </tr>
            <tr>
              <td>SCALABILITY</td>
              <td>Y</td>
              <td>N</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FrontendsectionFourth = () => {
  return (
    <div className="FrontendsectionFourth_maincont">
      <div className="FrontendsectionFourth_contentcont">
        <h1 className="FrontendsectionFourth_contentcont_h1">
          DIFFERENTIATORS
        </h1>
        <h2 className="FrontendsectionFourth_contentcont_h2">
          Minimise frustrations and enhance engagement with.
        </h2>
        <p className="FrontendsectionFourth_contentcont_p">
          AI Assistants are customised to integrate seamlessly and are tailored
          to meet each client’s unique requirements and challenges.
        </p>
        <div className="FrontendsectionFirst_contentcont_buttoncont">
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            MACHINE LEARNING
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            MULTI-LINGUAL SUPPORT
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            24/7 INDEPENDENT AVAILABILITY
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            CROSS-SELLING AND UPSELLING
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            MULTI-CHANNEL INTEGRATION
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            LIVE ASSISTANCE
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            DATA-DRIVEN INSIGHTS
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            TICKET MANAGEMENT
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            NATURAL LANGUAGE PROCESSING
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            SCALABILITY
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FrontendsectionFifth = () => {
  return (
    <div className="FrontendsectionFifth_maincont">
      <h1 className="FrontendsectionFifth_contentcont_h1">PAIn RELIEVERS</h1>
      <h2 className="FrontendsectionFifth_contentcont_h2">
        From real-time support to personalised customer journeys, Altus ensures
        that every interaction is smarter, faster, and more responsive.
      </h2>

      <div className="FrontendsectionFifth_contentcont">
        {/* <div className="FrontendsectionFirst_contentcont_buttoncont">
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            REALL-TIME SERVICE
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            CONSISTENT CUSTOMER SUPPORT
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            EMPOWERED WORKFORCE
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            BETTER CUSTOMER EXPERIENCE
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            QUICK RESPONSE TIME
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            IMPROVED ACCURACY
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            ENHANCED EFFICIENCY
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            COST REDUCTION
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            MAXIMISE RESULTS WITH MINIMAL OVERHEAD
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
          <button className="FrontendsectionFirst_contentcont_buttoncont_button">
            SCALABILITY
            <span className="FrontendsectionFirst_contentcont_buttoncont_button_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </button>
        </div> */}
        <p className="FrontendsectionFifth_contentcont_p1">cost reduction</p>
        <p className="FrontendsectionFifth_contentcont_p2">
          quick <br /> response time
        </p>
        <p className="FrontendsectionFifth_contentcont_p3">
          empowered <br /> workforce
        </p>
        <p className="FrontendsectionFifth_contentcont_p4">
          real -time service
        </p>
        <p className="FrontendsectionFifth_contentcont_p5">
          enhanced <br /> efficiency
        </p>
        <p className="FrontendsectionFifth_contentcont_p6">scalability</p>
        <p className="FrontendsectionFifth_contentcont_p7">
          improved <br /> accuracy
        </p>
        <p className="FrontendsectionFifth_contentcont_p8">
          maximise result <br /> with overhead
        </p>
        <p className="FrontendsectionFifth_contentcont_p9">
          better <br /> customer <br /> experience
        </p>
        <p className="FrontendsectionFifth_contentcont_p10">
          consistent <br /> customer <br /> support
        </p>
      </div>
      <p className="FrontendsectionFifth_contentcont_p">
        AI Assistants are customised to integrate seamlessly and are tailored to
        meet each client’s unique requirements and challenges.
      </p>
    </div>
  );
};

const Frontendsectionsixth = () => {
  return (
    <div className="Frontendsectionsixth_maincont">
      <div className="Frontendsectionsixth_contentcont">
        <h1 className="Frontendsectionsixth_contentcont_h1">
          AI’s IMPACT ON CUSTOMER SERVICE
        </h1>
        <p className="Frontendsectionsixth_contentcont_p">
          AI in customer service helped a company to increase efficiency and
          improve custome satisfaction
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          By leveraging AI an organisation achieved a 29% reduction in average
          handling time, successfully delivering personalised support at scale.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          The implementation of AI allowed a business to handle 70% of common
          inquiries, freeing up the team to address more intricate tasks and
          significantly boosting productivity.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          Faced with a 900% surge in customer requests, this particular company
          utilised AI to maintain high service quality and efficiently manage
          the increased volume.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          Through AI, the support function transitioned from being a cost centre
          to a value centre, directly contributing to revenue generation during
          customer interactions.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          By integrating AI customer support, an organisation reduced first
          response times by 74% achieving a 37% no-touch resolution rate and
          providing 24/7 multilingual assistance.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          The company automated 30% of customer service chats, transforming
          support from a cost centre to a value centre by generating direct
          revenue through upselling strategies.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          Implementing AI-driven chat automation enabled the business to handle
          a 900% increase in support requests, maintaining high service quality
          and achieving a 50% automation rate during peak times.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          The enterprise launched a virtual agent in nine languages within two
          months, resulting in a 28% deflection rate and allowing agents to
          focus on complex inquiries.
        </p>
        <p className="Frontendsectionsixth_contentcont_p">
          Utilising AI-powered automation, the company provided personalised,
          24/7 support, reducing average handling time by 29% and fully
          resolving 15% of client tickets across all channels.
        </p>
      </div>
    </div>
  );
};

const Frontendsectionseventh = () => {
  return (
    <div className="Frontendsectionseventh_maincont">
      <div className="Frontendsectionseventh_contentcont">
        <h1 className="Frontendsectionseventh_contentcont_h1">INDUSTRIES</h1>
        <p className="Frontendsectionseventh_contentcont_p">
          Altus' AI Assistants are designed and customised to serve customers in
          any industry, effortlessly adapting to any use case for seamless,
          personalised interactions.
        </p>
      </div>
    </div>
  );
};

const Frontendsectioneight = () => {
  return (
    <div className="Frontendsectioneight_maincont">
      <div className="Frontendsectioneight_contentcont">
        <h1 className="Frontendsectioneight_contentcont_h1">
          ENHANCE YOUR CUSTOMER SUPPORT WITH AI SOLUTIONS.
        </h1>
        <form className="Frontendsectioneight_contentcont_form">
          <div className="Frontendsectioneight_contentcont_form_div">
            <input
              placeholder="FIRST NAME"
              className="Frontendsectioneight_contentcont_form_input"
            />
            <input
              placeholder="LAST NAME"
              className="Frontendsectioneight_contentcont_form_input"
            />
          </div>
          <div className="Frontendsectioneight_contentcont_form_div">
            <input
              placeholder="BUSINESS EMAIL"
              className="Frontendsectioneight_contentcont_form_input"
            />
            <input
              placeholder="PHONE"
              className="Frontendsectioneight_contentcont_form_input"
            />
          </div>
          <div className="Frontendsectioneight_contentcont_form_div">
            <input
              placeholder="COUNTRY CODE"
              className="Frontendsectioneight_contentcont_form_input"
            />
            <input
              placeholder="SIZE OF CUSTOMER SERVICE DEPARTMENT"
              className="Frontendsectioneight_contentcont_form_input"
            />
          </div>
          <div className="Frontendsectioneight_contentcont_form_div">
            <input
              placeholder="YOUR CRM"
              className="Frontendsectioneight_contentcont_form_input"
            />
          </div>
          <div className="Frontendsectioneight_contentcont_form_div">
            <input
              placeholder="YOUR MESSAGE"
              className="Frontendsectioneight_contentcont_form_input2"
            />
          </div>
          <div className="Frontendsectioneight_contentcont_form_div">
            <input
              placeholder="HOW DID YOU HEAR ABOUT US?"
              className="Frontendsectioneight_contentcont_form_input2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

const FrontEndSection = () => {
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
          <FrontendsectionFirst />
        </div>
        <div className="Layout_section">
          <FrontendsectionSecond />
        </div>
        <div className="Layout_section">
          <FrontendsectionThird />
        </div>
        <div className="Layout_section">
          <FrontendsectionFourth />
        </div>
        <div className="Layout_section">
          <FrontendsectionFifth />
        </div>
        <div className="Layout_section">
          <Frontendsectionsixth />
        </div>
        <div className="Layout_section">
          <Frontendsectionseventh />
        </div>
        <div className="Layout_section">
          <Frontendsectioneight />
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

export default FrontEndSection;
