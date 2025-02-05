import { Scroll } from "@react-three/drei";
import React, { useLayoutEffect, useRef } from "react";
import { forwardRef } from "react";
import { motion } from "framer-motion";
import "./FrontendPage.css";
import comma_img from "../../assets/comma.png";
import frontend_iconImage1 from "../../assets/frontend_iconImage1.png";

const Section = (props) => {
  return (
    <section className="w-full paddinghori16 flex flex-col items-center">
      <div className="w-full h-full flex flex-col max-w-[1300px] justify-center bgdiv ">
        {props.children}
      </div>
    </section>
  );
};

const BlackSection = (props) => {
  return (
    <section className="w-full px-16 py-6  bg-black text-white flex flex-col justify-start items-center">
      <div className="w-full h-full flex justify-end items-center max-w-[1300px]">
        {props.children}
      </div>
    </section>
  );
};

const handlelinkedinginclick = () => {
  window.open("https://www.linkedin.com/company/altusreinvents/", "_blank");
};

const PartnerSection = ({ number, heading, content, subheading }) => {
  return (
    <div className="partner_section">
      <span className="partner_arrow">
        <i className="bi bi-arrow-up"></i>
      </span>

      <div className="h-full firstpartner_div">
        <h3 className="why_choosetext">Why Choose Us?</h3>
        <h3 className="numbertext">0{number}.</h3>
        <h3 className="headingtext">{heading}</h3>
      </div>

      <div className="nextdiv">
        <h4 className="nextdiv_h4">{subheading}</h4>
        <p className="nextdiv_p">{content}</p>
      </div>
    </div>
  );
};

const Table_Data = [
  { feature: "NLP", ai: true, chatbot: false },
  { feature: "CONTEXTUAL UNDERSTANDING", ai: true, chatbot: false },
  {
    feature: "LEARNING FROM INTERACTIONS/MACHINE LEARNING",
    ai: true,
    chatbot: false,
  },
  {
    feature: "PERSONALISED RESPONSES",
    ai: true,
    chatbot: false,
  },
  {
    feature: "MULTI-STEP QUERY HANDLING",
    ai: true,
    chatbot: false,
  },
  {
    feature: "INTEGRATION WITH BUSINESS SYSTEMS",
    ai: true,
    chatbot: false,
  },
  {
    feature: "SELF-CORRECTING CAPABILITIES",
    ai: true,
    chatbot: false,
  },
  {
    feature: "COMPLEX QUERIES",
    ai: true,
    chatbot: false,
  },
  {
    feature: "REAL TIME INSIGHTS AND REPORTING",
    ai: true,
    chatbot: false,
  },
  {
    feature: "ERROR RECOGNITION AND CLARIFICATION",
    ai: true,
    chatbot: false,
  },
  {
    feature: "MULTILINGUAL CAPABILTIES",
    ai: true,
    chatbot: false,
  },
  {
    feature: "ADAPTABLE CONVERSATION FLOW",
    ai: true,
    chatbot: "Limited",
  },
  {
    feature: "SCALABILITY",
    ai: true,
    chatbot: "Limited",
  },
  {
    feature: "24/7 SUPPORT",
    ai: true,
    chatbot: false,
  },
];

const FrontendPageSection = forwardRef(({ onScrollPagesChange }, ref) => {
  const localRef = useRef(null);

  useLayoutEffect(() => {
    let debounceTimeout;

    const calculateScrollPages = () => {
      if (localRef.current) {
        const indexSectionHeight = localRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        const pages = indexSectionHeight / windowHeight;
        onScrollPagesChange(Math.max(pages, 3));
      }
    };

    const handleResize = () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(calculateScrollPages, 10);
    };

    window.addEventListener("resize", handleResize);

    setTimeout(calculateScrollPages, 0);

    return () => {
      clearTimeout(debounceTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [onScrollPagesChange]);

  return (
    <Scroll html className="w-full">
      <div ref={localRef}>
        <Section>
          <div className="w-full h-full flex flex-col items-start  justify-evenly">
            <div>
              <h2 className="frontendPageheading_1">
                Empower customer support 
              </h2>
              <h3 className="frontendPagesubheading_1">
                with AGENTIC AI Assistants
              </h3>
            </div>
            <div className="flex items-start mt-10">
              <img className="w-44" src={comma_img} alt="comma_png" />
              <div className="mt-14 w-[30rem]">
                <p className="frontendPageparaheading_1">
                  AGENTIC AI Assistant, powered with Machine Learning, is a
                  representative uniquely tailored to reflect your company’s
                  identity, engage your audience, and elevate your brand.
                </p>
                <button className="logo_button mt-10">
                  <motion.div
                    className="flex flex-col mx-4"
                    style={{ lineHeight: "0px", gap: "-2rem" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <motion.i
                      className="bi bi-chevron-down"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 0,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />

                    <motion.i
                      className="bi bi-chevron-down"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  Continue TO scroll
                  <motion.div
                    className="flex flex-col mx-4"
                    style={{ lineHeight: "0px", gap: "-2rem" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <motion.i
                      className="bi bi-chevron-down"
                      initial={{ opacity: 0 }}
                      style={{ lineHeight: "-10px" }}
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 0,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />

                    <motion.i
                      className="bi bi-chevron-down"
                      style={{ lineHeight: "-10px" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full ">
            <h3 className="frontendPageheading_2">Tackle</h3>
            <div className=" flex flex-wrap w-full p-1 justify-between gap-y-5 ">
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full h-full flex flex-col items-start  justify-evenly">
            <div>
              <h2 className="frontendPageheading_1">
                enhancing human <br /> connection
              </h2>
              <h3 className="frontendPagesubheading_2">
                seamless, personalised, and contextual support across all
                digital channels powered by Machine Learning
              </h3>
            </div>
            <div className="flex gap-5 w-full my-5">
              <div className=" w-fit flex flex-col justify-center items-center  mt-10">
                <div className="flex w-fit items-center ">
                  <img className="w-44" src={comma_img} alt="comma_png" />
                  <div className="mt-14 w-[30rem]">
                    <p className="frontendPageparaheading_1">
                      AGENTIC AI Assistant, powered with Machine Learning, is a
                      representative uniquely tailored to reflect your company’s
                      identity, engage your audience, and elevate your brand.
                    </p>
                  </div>
                </div>
                <button className="logo_button w-[30rem] mt-10">
                  <motion.div
                    className="flex flex-col mx-4"
                    style={{ lineHeight: "0px", gap: "-2rem" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <motion.i
                      className="bi bi-chevron-down"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 0,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />

                    <motion.i
                      className="bi bi-chevron-down"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                  Continue TO scroll
                  <motion.div
                    className="flex flex-col mx-4"
                    style={{ lineHeight: "0px", gap: "-2rem" }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <motion.i
                      className="bi bi-chevron-down"
                      initial={{ opacity: 0 }}
                      style={{ lineHeight: "-10px" }}
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 0,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />

                    <motion.i
                      className="bi bi-chevron-down"
                      style={{ lineHeight: "-10px" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1,
                        delay: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </button>
              </div>
              <div className=" flex-grow flex flex-col justify-between items-start gap-3">
                <p className="frontendPageparaheading_2">
                  AGENTIC AI Assistants powered by machine learning continuously
                  learn and adapt, diminishing the need for extensive customer
                  service resources.
                </p>
                <p className="frontendPageparaheading_2">
                  With seamless integration across all digital channels, it
                  streamlines operations by handling routine and complex
                  queries, reducing inefficiencies and accelerating response
                  times, empowering your team to provide unparalleled customer
                  engagement whenever and wherever it’s needed.
                </p>
                <p className="frontendPageparaheading_2">
                  By consistently delivering accurate answers and boosting
                  customer satisfaction, AGENTIC AI Assistants free your team to
                  focus on cultivating relationships and tackling high-priority
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full">
            <h2 className="frontendPageheading_1">INDUSTRIES</h2>
            <p className="frontendPagesubheading_3">
              Altus' AGENTIC AI Assistants are designed and customised to serve
              customers in any industry, effortlessly adapting to any use case
              for seamless, personalised interactions.
            </p>
            <div className="flex flex-wrap gap-0.5 gap-y-3 justify-between items-center mt-5">
              <PartnerSection
                number={1}
                subheading="We solve your unique problems."
                heading="BESPOKE SOLUTIONS "
                content="We work closely with you to design and deliver bespoke solutions, ensuring that our AI tools are fine-tuned to address your unique business challenges and requirements."
              />
              <PartnerSection
                number={2}
                subheading="Partnership for lasting impact"
                heading="PARTNERSHIP FOR LASTING IMPACT "
                content="We work closely with you to design and deliver bespoke solutions, ensuring that our AI tools are fine-tuned to address your unique business challenges and requirements."
              />
              <PartnerSection
                number={3}
                subheading="Resolve business challenges seamlessly and effortlessly."
                heading="SEAMLESS INTEGRATION"
                content="Our solutions are designed to work seamlessly with your existing systems, minimising disruption and ensuring a swift and efficient transition."
              />
              <PartnerSection
                number={4}
                subheading="Years of experience, fresh creative minds, and a passion for problem-solving and innovation."
                heading="EXPERTISE"
                content="With deep industry knowledge, creativity, and innovation, we go beyond technology by partnering with you to unlock your business's potential."
              />
              <PartnerSection
                number={4}
                subheading="Years of experience, fresh creative minds, and a passion for problem-solving and innovation."
                heading="EXPERTISE"
                content="With deep industry knowledge, creativity, and innovation, we go beyond technology by partnering with you to unlock your business's potential."
              />
              <PartnerSection
                number={4}
                subheading="Years of experience, fresh creative minds, and a passion for problem-solving and innovation."
                heading="EXPERTISE"
                content="With deep industry knowledge, creativity, and innovation, we go beyond technology by partnering with you to unlock your business's potential."
              />
              <PartnerSection
                number={4}
                subheading="Years of experience, fresh creative minds, and a passion for problem-solving and innovation."
                heading="EXPERTISE"
                content="With deep industry knowledge, creativity, and innovation, we go beyond technology by partnering with you to unlock your business's potential."
              />
              <PartnerSection
                number={4}
                subheading="Years of experience, fresh creative minds, and a passion for problem-solving and innovation."
                heading="EXPERTISE"
                content="With deep industry knowledge, creativity, and innovation, we go beyond technology by partnering with you to unlock your business's potential."
              />
              <PartnerSection
                number={4}
                subheading="Years of experience, fresh creative minds, and a passion for problem-solving and innovation."
                heading="EXPERTISE"
                content="With deep industry knowledge, creativity, and innovation, we go beyond technology by partnering with you to unlock your business's potential."
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className=" w-full  p-6">
            <h3 className="frontendPagesubheading_4">
              Bridging the Gap Between Technology and Empathy
            </h3>
            <p className="frontendPageparaheading_3">
              From Simple Scripts to Intelligent Interactions
            </p>
            <div className="overflow-x-auto my-5">
              <table className="w-full border-gray-900 border-separate border-spacing-3">
                <thead>
                  <tr className="bg-gray-200 text-left text-black gap-2">
                    <th className="p-3 table_heading_font firstcoulmn_table">
                      FEATURE
                    </th>
                    <th className="p-3 table_heading_font Secondcoulmn_table">
                      AI ASSISTANT
                    </th>
                    <th className="p-3 table_heading_font thirdcoulmn_table">
                      TRADITIONAL CHATBOT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Table_Data.map((row, idx) => (
                    <tr key={idx} className={`table_font`}>
                      <td className="p-3 Allltable_coulmnbradius uppercase bg-gray-200 border-[rgba(219,139,54,1)]">
                        {row.feature}
                      </td>
                      <td className="p-3 Allltable_coulmnbradius bg-gray-200 border-[rgba(219,139,54,1)] text-center">
                        {row.ai ? (
                          <span className="text-green-700">
                            <i class="bi bi-check2"></i>
                          </span>
                        ) : (
                          <span className="text-red-500">
                            <i class="bi bi-x-lg"></i>
                          </span>
                        )}
                      </td>
                      <td className="p-3 Allltable_coulmnbradius bg-gray-200 text-center">
                        {typeof row.chatbot === "boolean" ? (
                          row.chatbot ? (
                            <span className="text-green-700 ">
                              <i className="bi bi-check2"></i>
                            </span>
                          ) : (
                            <span className="text-red-500 ">
                              <i className="bi bi-x-lg"></i>
                            </span>
                          )
                        ) : (
                          <span className="text-red-500">{row.chatbot}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full h-screen p-2">
            <h3 className="frontendPageheading_3">DIFFERENTIATORS</h3>
            <h5 className="frontendPagesubheading_5">
              Minimise frustrations and enhance engagement with. 
            </h5>
            <p className="frontendPageparaheading_4">
              AGENTIC AI Assistants are customised to integrate seamlessly and
              are tailored to meet each client’s unique requirements and
              challenges.
            </p>
            <div className="flex justify-between items-start py-10 ">
              <div className="gap-y-4 flex flex-col">
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">MACHINE LEARNING </span>
                </div>
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">
                    MULTI-LINGUAL SUPPORT 
                  </span>
                </div>
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">
                    24/7 INDEPENDENT AVAILABILITY 
                  </span>
                </div>
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">
                    CROSS-SELLING AND UPSELLING 
                  </span>
                </div>
                <div className="flex  gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">
                    MULTI-CHANNEL INTEGRATION 
                  </span>
                </div>
              </div>
              <div className="gap-y-4 flex flex-col">
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">LIVE ASSISTANCE</span>
                </div>
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">
                    DATA-DRIVEN INSIGHTS 
                  </span>
                </div>
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">TICKET MANAGEMENT </span>
                </div>
                <div className="flex  gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">
                    NATURAL LANGUAGE PROCESSING
                  </span>
                </div>
                <div className="flex gap-7 items-center w-fit justify-between">
                  <div className="customwidth"></div>
                  <span className="customwidth_span">SCALABILITY</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full">
            <h3 className="frontendPageheading_4">Pain Relievers</h3>
            <p className="frontendPagesubheading_6">
              From real-time support to personalised customer journeys, Altus
              ensures that every interaction is smarter, faster, and more
              responsive.
            </p>
            <div className=" flex flex-wrap w-full p-1 justify-center gap-x-5 gap-y-5 ">
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
              <div className="frontend_BoxContainer">
                <div className="frontend_BoxContainer_circle">
                  <img src={frontend_iconImage1} alt="frontend_iconImage1" />
                </div>
                <span className="frontend_BoxContainer_span">Delays</span>
              </div>
            </div>
          </div>
        </Section>
             <BlackSection>
                  <div className="w-50 h-full p-2 flex flex-col items-start justify-evenly">
                    <motion.h3
                      className="logo_subheading animate-text"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      Your bold idea, our smart solutions
                    </motion.h3>
        
                    <motion.h1
                      className="logo_heading animate-text"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      Reinvent
                      <br /> Your
                      <br /> business
                    </motion.h1>
                    <button className="logo_button">
                      <motion.div
                        className="flex flex-col mx-4"
                        style={{ lineHeight: "0px", gap: "-2rem" }}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: 2,
                        }}
                      >
                        <motion.i
                          className="bi bi-chevron-down"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 1,
                            delay: 0,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                          }}
                        />
        
                        <motion.i
                          className="bi bi-chevron-down"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{
                            duration: 1,
                            delay: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                      Continue TO scroll
                      <motion.div
                        className="flex flex-col mx-4"
                        style={{ lineHeight: "0px", gap: "-2rem" }}
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: 2,
                        }}
                      >
                        <motion.i
                          className="bi bi-chevron-down"
                          initial={{ opacity: 0 }}
                          style={{ lineHeight: "-10px" }}
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 1,
                            delay: 0,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                          }}
                        />
        
                        <motion.i
                          className="bi bi-chevron-down"
                          style={{ lineHeight: "-10px" }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{
                            duration: 1,
                            delay: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </button>
                  </div>
                </BlackSection>
                <Section>
                  <div className="footer_maindiv h-[63vh]">
                    <motion.div
                      className="flex flex-col justify-start max-h-max footersection"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <motion.p className="uppercase">
                        <span style={{ color: "rgba(219, 139, 54, 1)" }}>
                          United Kingdom
                        </span>{" "}
                        <br />
                        Newcastle Upon Tyne
                        <br />
                        <span style={{ color: "rgba(219, 139, 54, 1)" }}>
                          INDIA
                        </span>{" "}
                        <br />
                        Indore
                        <br />
                        Surat (Coming Soon!)
                      </motion.p>
                      <motion.span className="text-2xl font-poppins font-bold">
                        <i className="bi bi-c-circle"></i> 2025 Altus
                      </motion.span>
                    </motion.div>
                    <motion.div className="flex flex-col max-h-max footersection">
                      <motion.p
                        className="cursor-pointer underline underline-offset-4"
                        onClick={handlelinkedinginclick}
                      >
                        LinkedIn
                      </motion.p>
                      <motion.span className="mt-5">Reinvent your business</motion.span>
                      <motion.p>reinvent@altus-intel.com</motion.p>
                    </motion.div>
                  </div>
                </Section>
      </div>
    </Scroll>
  );
});

export default FrontendPageSection;
