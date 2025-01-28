import { Scroll } from "@react-three/drei";
import React, { useState } from "react";
import logoimage from "../../assets/Logo_image.png";
import secondsectionimage1 from "../../assets/secondsectionimage1.png";
import secondsectionimage2 from "../../assets/secondsectionimage2.png";
import fourthIcon1 from "../../assets/fourthIcon1.png";
import fourthIcon2 from "../../assets/fourthIcon2.png";
import fourthIcon3 from "../../assets/fourthIcon3.png";
import goalicon1 from "../../assets/goalicon1.png";
import goalicon2 from "../../assets/goalicon2.png";
import goalicon3 from "../../assets/goalicon3.png";
import goalicon4 from "../../assets/goalicon4.png";
import goalicon5 from "../../assets/goalicon5.png";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <section className="w-full paddinghori16 flex flex-col  items-center">
      <div className="w-full h-full flex flex-col max-w-[1300px] justify-center bgdiv ">
        {props.children}
      </div>
    </section>
  );
};

const BlackSection = (props) => {
  return (
    <section className="w-full BLACKpaddinghori16 flex bg-black flex-col justify-start items-center">
      <div className="w-full h-full flex justify-end items-center    max-w-[1300px]">
        {props.children}
      </div>
    </section>
  );
};

const PartnerSection = ({ number, heading, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="partner_section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="partner_arrow">
        <i
          className={`bi bi-arrow-up ${isHovered ? "rotated" : ""}`}
          style={{ transition: "transform 0.3s ease" }}
        ></i>
      </span>

      <h3>
        {isHovered
          ? "Your success is our priority, now and in the future."
          : "Why Choose Us"}
      </h3>

      <span style={{ opacity: isHovered ? 0 : 1 }}>{number}.</span>

      <p>{isHovered ? content : heading}</p>
    </div>
  );
};

const IndexSection = () => {
  return (
    <Scroll html className="w-full">
      <Section>
        <motion.h1
          className="frontheading animate-text"
          initial={{ opacity: 0, y: "120px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Reinvent
        </motion.h1>

        <motion.h2
          className="frontsubheading animate-text"
          initial={{ opacity: 0, y: "120px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          Value Chain
        </motion.h2>
        <div className="w-full mt-10 flex items-end justify-end">
          <motion.p
            className="frontsubpara"
            initial={{ opacity: 0, x: "120px" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Reinvent the value chain, solve unique problems, and boost
            productivity, efficiency, and profitability with bespoke AI
            solutions.
          </motion.p>
        </div>
        {/* ================================== */}
        <div className="flex flex-col mt-10 items-center">
          <div className="w-full secondboxbg rounded-md flex flex-col justify-center items-center p-4">
            <motion.h3
              className="secondsectionheading animate-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              REINVENTION
            </motion.h3>

            <motion.h4
              className="secondsectionsubheading animate-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              STRATEGY FOR SUCCESS
            </motion.h4>
            <motion.p
              className="secondsectionsubpara animate-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              The rate of change affecting businesses has risen over 183% in the
              last 4 years. To counter this, 83% of organisations have
              accelerated the execution of reinvention with GenAI.
            </motion.p>
          </div>
          <motion.p
            className="secondsectionpara animate-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            in less than half the time against competitors
          </motion.p>
          <div className="  firstflexidv ">
            <motion.div
              className="px-4 py-4 flex flex-col mx-2 items-center justify-evenly subboxshadow rounded-md w-1/4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <img
                src={secondsectionimage1}
                alt="secondsectionimage1"
                className="w-12"
              />
              <h3 className="secondsectionspannumber">2.5x</h3>
              <p className="secondsectionlastpara">
                Greater improvements in productivity
              </p>
            </motion.div>
            <motion.div
              className="px-4 py-4 flex flex-col mx-2 items-center justify-evenly subboxshadow bg-white rounded-md w-1/4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <img
                src={secondsectionimage2}
                alt="secondsectionimage2"
                className="w-12"
              />
              <h3 className="secondsectionspannumber">2.6x</h3>
              <p className="secondsectionlastpara">
                Higher average revenue growth.
              </p>
            </motion.div>
          </div>
        </div>
        {/* ================================== */}
        <div className="w-full py-16">
          <motion.h1
            className="thirdSectionheading animate-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            GEN AI IN ACTION
          </motion.h1>
          <div className="secondflexidv">
            <motion.div
              className="w-1/3 px-4 py-4 bg-orange-700 fourthbox relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <img src={fourthIcon1} alt="fourthIcon1" />
              <h3 className="fourthboxheading">3M</h3>
              <p className="fourthboxsubheading">Hours Saved</p>
              <span className="fourthbox_arrow">
                <i className="bi bi-chevron-right"></i>
              </span>
              <div className="fourth_subcircle"></div>
              <motion.p
                className="new-paragraph"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                An agency saved 3 million operational hours using GenAI.
              </motion.p>
            </motion.div>

            <motion.div
              className="w-1/3 px-4 py-4 bg-orange-700 fourthbox"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <img src={fourthIcon2} alt="fourthIcon2" className="w-16" />
              <h3 className="fourthboxheading">16M</h3>
              <p className="fourthboxsubheading">CUSTOMER OFFERINGS</p>
              <span className="fourthbox_arrow">
                <i className="bi bi-chevron-right"></i>
              </span>
              <div className="fourth_subcircle"></div>
              <motion.p
                className="new-paragraph"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                A company delivered 16 million personalized offerings to their
                customers within 3 months.
              </motion.p>
            </motion.div>

            <motion.div
              className="w-1/3 px-4 py-4 bg-orange-700 fourthbox"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <img src={fourthIcon3} alt="fourthIcon3" className="w-16" />
              <h3 className="fourthboxheading">+10%</h3>
              <p className="fourthboxsubheading">Hours Saved</p>
              <span className="fourthbox_arrow">
                <i className="bi bi-chevron-right"></i>
              </span>
              <div className="fourth_subcircle"></div>
              <motion.p
                className="new-paragraph"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                An insurer increased the potential revenue by 10% using AI in
                only one single function of the whole process.
              </motion.p>
            </motion.div>
          </div>
        </div>
        {/* ================================== */}
        <div className="w-full py-8 ">
          <motion.h1
            className="fouthSectionheading animate-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Our suite of Solutions
          </motion.h1>
          <div className=" thirdflexidv">
            <motion.div
              className="oursite_box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3>AI ASSISTANT FOR CUSTOMER SERVICE</h3>
              <p>
                Eliminate unique customer frustrations and operational issues to
                deliver a seamless experience that keeps them coming back, all
                while driving greater operational efficiency and productivity
                with the custom AI assistant for customer service.
              </p>
              <motion.button
                className="oursite_box_link"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              className="oursite_box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3>AI WORKFORCE FOR BUSINESS OPERATIONS</h3>
              <p>
                Imagine a workplace where challenges are met head-on,
                departments thrive, and employees are empowered to focus on
                creativity and innovation—all driven by custom AI solutions
                applicable throughout the value chain.
              </p>
              <motion.button
                className="oursite_box_link"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
        {/* ================================== */}
        <div className="w-full p-2 h-full ">
          <motion.h3
            className="goalachieve_heading animate-text my-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Achieve Your Goals <br /> with Altus Solutions
          </motion.h3>
          <div className="fourthflexidv">
            <motion.div
              className="w_85"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="goalwrapper w-full goalwrapper_padding flex flex-col justify-between">
                <h3>BOOST YOUR SUCCESS</h3>
                <p>An agency saved 3 million operational hours using GenAI.</p>
                <div className="goalouter_circle">
                  <motion.div
                    className="goalinner_circle"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <img src={goalicon1} alt="goalicon1" />
                    <span>
                      An agency saved 3 million operational hours using GenAI.
                    </span>
                    <p>
                      Our intelligent solutions target unique challenges,
                      enhance customer experiences, and fuel innovation, setting
                      you apart in a competitive landscape.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="goalwrapper flex flex-col justify-center">
                <h3>ADAPTIVE SCALABILITY</h3>
                <p>AI Tools that grow with you.</p>
                <div className="goalouter_circle">
                  <motion.div
                    className="goalinner_circle"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <img src={goalicon2} alt="goalicon2" />
                    <span>An agency saved 3 million</span>
                    <p>
                      Our intelligent solutions target unique challenges,
                      enhance customer experiences.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="fouthsubflexdiv">
            <motion.div
              className="goalwrapper flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3>
                EMPOWERED <br /> HUMAN CAPITAL
              </h3>
              <p>An agency saved 3 million operational hours using GenAI.</p>
              <div className="goalouter_circle">
                <motion.div
                  className="goalinner_circle"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <img src={goalicon3} alt="goalicon3" />
                  <span>An agency saved 3 million</span>
                  <p>
                    Our intelligent solutions target unique challenges, enhance
                    customer experiences.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="goalwrapper flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3>
                MAX RESULTS, <br /> LOW OVERHEAD
              </h3>
              <p>Achieve more without heavy costs</p>
              <div className="goalouter_circle">
                <motion.div
                  className="goalinner_circle"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <img src={goalicon4} alt="goalicon4" />
                  <span>An agency saved 3 million</span>
                  <p>
                    Our intelligent solutions target unique challenges, enhance
                    customer experiences.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="goalwrapper flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3>BE A DIFFERENTITOR</h3>
              <p>Stand out from the crowd.</p>
              <div className="goalouter_circle">
                <motion.div
                  className="goalinner_circle"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <img src={goalicon5} alt="goalicon5" />
                  <span>An agency saved 3 million</span>
                  <p>
                    Our intelligent solutions target unique challenges, enhance
                    customer experiences.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* ================================== */}
        <div className="w-full h-full p-2 flex flex-col items-start">
          <motion.h3
            className="partner_heading animate-text my-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Partner with Us to <br /> Realize Your Vision
          </motion.h3>
          <div className="fifthflexidv">
            <PartnerSection
              number={1}
              heading="Expertise"
              content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
            />
            <PartnerSection
              number={2}
              heading="Seamless Integration"
              content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
            />
            <PartnerSection
              number={3}
              heading="PARTNERSHIP FOR LASTING IMPACT"
              content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
            />
            <PartnerSection
              number={4}
              heading="Bespoke Solutions"
              content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
            />
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
        <div className="footer_maindiv">
          <motion.div
            className="flex flex-col justify-start max-h-max footersection"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.img
              src={logoimage}
              alt="logo_image"
              className="footer_logo_image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
            <motion.p
              className="my-16 animate-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              3517 W. Gray St. Utica, Pennsylvania 57867
              <br />
            </motion.p>
            <motion.span
              className="text-2xl font-poppins font-bold firstfooterspan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <i className="bi bi-c-circle"></i> 2025 Altus
            </motion.span>
          </motion.div>

          <motion.div
            className="flex flex-col max-h-max footersection"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Twitter/X
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Instagram
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Linkedin
            </motion.p>
            <motion.span
              className="my-6 animate-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Reinvent your business
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              support@example.com
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col max-h-max footersection2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.h3
              className="my-4 animate-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Get in Touch with us
            </motion.h3>
            <div className="px-5 w-full">
              <div className="footer_input_container">
                <motion.input
                  className="footer_input"
                  placeholder="Your Email"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <i className="bi bi-arrow-right"></i>
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </Scroll>
  );
};

export default IndexSection;
