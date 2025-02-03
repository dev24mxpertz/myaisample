import { Scroll } from "@react-three/drei";
import React, {
  forwardRef,
  useLayoutEffect,
  useRef,
} from "react";
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
    <section className="w-full BLACKpaddinghori16 bg-black flex flex-col justify-start items-center">
      <div className="w-full h-full flex justify-end items-center    max-w-[1300px]">
        {props.children}
      </div>
    </section>
  );
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

const IndexSection = forwardRef(({ onScrollPagesChange }, ref) => {
  
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
  }, [onScrollPagesChange, localRef]);

  const handlelinkedinginclick = () => {
    window.open("https://www.linkedin.com/company/altusreinvents/", "_blank");
  };

  return (
    <Scroll html className="w-full">
      <div ref={localRef}>
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
              Reinvent the value chain and solve unique problems to enhance
              productivity, efficiency, and profitability with Bespoke GenAI
              solutions.
            </motion.p>
          </div>
        </Section>
        <Section>
          <div className="flex flex-col mt-10 items-center">
            <motion.div
              className="w-full secondboxbg rounded-md flex flex-col justify-center items-center p-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3 className="secondsectionheading animate-text">REINVENTION</h3>

              <h4 className="secondsectionsubheading animate-text">
                STRATEGY FOR SUCCESS
              </h4>
              <p className="secondsectionsubpara animate-text">
                The rate of change affecting businesses has risen over 183% in
                the last 4 years. To counter this, 83% of organisations have
                accelerated the execution of reinvention with GenAI.
              </p>
            </motion.div>
            <motion.p
              className="secondsectionpara animate-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              More than double the revenue in less than half the time compared
              to competitors.
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
                  Higher average revenue growth
                </p>
              </motion.div>
            </div>
          </div>
        </Section>
        <Section>
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
                  An agency saved 3 million operational hours by using GenAI.
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
                  A company delivered 16 million personalised offerings to its
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
                <p className="fourthboxsubheading">Revenue</p>
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
                  An insurer increased potential revenue by 10% using AI in just
                  one function of the entire process.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </Section>
        <Section>
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
                <h3>AGENTIC AI ASSISTANT FOR CUSTOMER SERVICE</h3>
                <p>
                  Eliminate unique customer frustrations and operational issues
                  to deliver a seamless experience that keeps them coming back,
                  all while driving greater operational efficiency and
                  productivity with the bespoke Agentic AI assistant for
                  customer service.
                </p>
                {/* <motion.button
                  className="oursite_box_link"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  Learn More
                </motion.button> */}
              </motion.div>
              <motion.div
                className="oursite_box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <h3>AI WORKFORCE FOR BACK-END OPERATIONS </h3>
                <p>
                  Imagine a workplace where challenges are met head-on,
                  departments thrive, and employees are empowered to focus on
                  creativity and innovation—all driven by bespoke AI solutions
                  applicable throughout the value chain, designed to solve your
                  unique business problems and inefficiencies.
                </p>
                {/* <motion.button
                  className="oursite_box_link"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  Learn More
                </motion.button> */}
              </motion.div>
            </div>
          </div>
        </Section>
        <Section>
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
              <div class="goalwrapper goalwrapper_padding">
                <h3>BOOST YOUR SUCCESS</h3>
                <p>
                  Our goal is to help you overcome obstacles and unlock your
                  full potential. 
                </p>
                <span>
                  Our intelligent solutions address unique challenges, enhance
                  customer experiences, and drive innovation, setting you apart
                  in a competitive landscape.
                </span>
                <div class="goalouter_circle">
                  <div class="goalinner_circle">
                    <img src={goalicon1} alt="goal icon" />
                  </div>
                </div>
              </div>

              <div class="goalwrapper goalwrapper_padding">
                <h3>ADAPTIVE SCALABILITY</h3>
                <p>AI Tools that grow alongside you.</p>
                <span>
                  We proactively ensure that your solutions meet new demands, so
                  that as you grow, your processes and systems remain
                  optimised—enabling confident and sustainable scaling.
                </span>
                <div class="goalouter_circle">
                  <div class="goalinner_circle">
                    <img src={goalicon2} alt="goal icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="fouthsubflexdiv">
              <div class="goalwrapper goalwrapper_padding">
                <h3>MAX RESULTS, <br /> LOW OVERHEAD </h3>
                <p>Achieve more without heavy costs! </p>
                <span>
                  By optimising processes, we help you achieve peak performance
                  while keeping operational costs in check.
                </span>
                <div class="goalouter_circle">
                  <div class="goalinner_circle">
                    <img src={goalicon3} alt="goal icon" />
                  </div>
                </div>
              </div>{" "}
              <div class="goalwrapper goalwrapper_padding">
                <h3>EMPOWERED HUMAN CAPITAL </h3>
                <p> Empower your team to perform at their best.</p>
                <span>
                  Alleviate frustrations, mitigate risks, and manage routine
                  tasks, allowing your employees to focus on creativity,
                  innovation, and high-value work—leading to a more engaged,
                  productive, and motivated workforce.
                </span>
                <div class="goalouter_circle">
                  <div class="goalinner_circle">
                    <img src={goalicon4} alt="goal icon" />
                  </div>
                </div>
              </div>{" "}
              <div class="goalwrapper goalwrapper_padding">
                <h3> BE A DIFFERENTIATOR</h3>
                <p>Stand out from the crowd.</p>
                <span>
                  Our bespoke solutions enable you to offer distinctive
                  capabilities that set you apart from competitors.
                </span>
                <div class="goalouter_circle">
                  <div class="goalinner_circle">
                    <img src={goalicon5} alt="goal icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full h-full p-2 flex flex-col items-start">
            <motion.h3
              className="partner_heading animate-text my-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Partner with us to
              <br /> achieve your vision and mission
            </motion.h3>
            <div className="fifthflexidv">
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
              {/* <motion.p>Twitter/X</motion.p> */}
              {/* <motion.p>Instagram</motion.p> */}
              <motion.p
                className="cursor-pointer underline underline-offset-4"
                onClick={handlelinkedinginclick}
              >
                LinkedIn
              </motion.p>
              <motion.span className="mt-5">Reinvent your business</motion.span>
              <motion.p>reinvent@altus-intel.com</motion.p>
            </motion.div>
            {/* 
                     <motion.div className="flex flex-col max-h-max footersection2">
                       <motion.h3>Get in Touch with Us</motion.h3>
                       <div className="px-5 w-full">
                         <div className="footer_input_container">
                           <motion.input
                             className="footer_input"
                             placeholder="Your Email"
                           />
                           <motion.span>
                             <i className="bi bi-arrow-right"></i>
                           </motion.span>
                         </div>
                       </div>
                     </motion.div> */}
          </div>
        </Section>
      </div>
    </Scroll>
  );
});

export default IndexSection;
