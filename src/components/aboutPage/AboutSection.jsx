import { Scroll } from "@react-three/drei";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import logoimage from "../../assets/Logo_image.png";
import menusymbol from "../../assets/menusymbol.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <section className="w-full paddinghori16 flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col max-w-[1300px] bgdiv ">
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

const PartnerSection = ({ number, heading, content, subheading }) => {
  return (
    <div className="partner_section">
      <span className="partner_arrow">
        <i className="bi bi-arrow-up"></i>
      </span>

      <div className="h-full firstpartner_div">
        <h3 className="why_choosetext">How We Work?</h3>
        {/* <h3 className="numbertext">0{number}.</h3> */}
        <h3 className="headingtext">{heading}</h3>
      </div>

      <div className="nextdiv">
        <h4 className="nextdiv_h4">{subheading}</h4>
        <p className="nextdiv_p">{content}</p>
      </div>
    </div>
  );
};

const AboutSection = forwardRef(({ onScrollPagesChange }, ref) => {
  
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
          <div className="w-full h-full flex flex-col items-start justify-center firstaboutsection backgroundbox ">
            <motion.h1
              className="About_Section_heading1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Transforming Value Chains, Solving Challenges
            </motion.h1>

            <motion.h2
              className="About_Section_heading2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              With Bespoke AI Solutions
            </motion.h2>

            <div className="About_Sectionflex1">
              <motion.p
                className="About_Section_para"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                We collaborate with businesses as strategic partners, offering
                insightful consulting to uncover obstacles, seize opportunities,
                and craft bespoke AI solutions. Our approach doesn’t just solve
                challenges or mitigate risks—it reinvents your value chain,
                empowering your team to focus on innovation and high-impact
                work.
              </motion.p>

              <motion.p
                className="About_Section_para"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Specializing in AI consulting, we design tailored solutions to
                address unique business needs, streamline both front-end and
                back-end operations, and eliminate inefficiencies. Helping you
                unlock the potential for sustainable growth and unparalleled
                efficiency.
              </motion.p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full h-full flex flex-col items-start justify-center backgroundbox">
            <motion.h2
              className="About_Section_heading3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Who are we?
            </motion.h2>

            <div className="About_Sectionflex2">
              <motion.p
                className="About_Section_para"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                We are a UK-based GenAI company of passionate professionals
                dedicated to solving business challenges with AI reinvention.
                With a client-first approach and a relentless focus on results,
                we deliver strategic consulting and custom AI solutions to help
                businesses achieve operational excellence.
              </motion.p>

              <motion.p
                className="About_Section_para"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                We believe in AI's transformative power to overcome challenges,
                drive growth, empower teams, and enhance productivity, enabling
                businesses to achieve their goals and unlock new possibilities.
              </motion.p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="About_Sectionflex3 backgroundbox">
            <div className="About_Sectionflexsub3">
              <motion.h2
                className="About_Section_heading4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Vision
              </motion.h2>

              <motion.p
                className="About_Section_para2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Our vision is to create a future where technology and humanity
                coexist symbiotically.
              </motion.p>
            </div>

            <div className="About_Sectionflexsub3_2">
              <motion.p
                className="About_Section_para3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                We want to create a world where technology and humanity thrive
                together, unlocking infinite possibilities for innovation,
                growth, and sustainability. We strive to build work environments
                that inspire creativity, amplify human potential, and pave the
                way for a brighter, AI-driven future. We envision a world where
                businesses thrive by fostering work environments that empower
                people and enable them to achieve their fullest potential,
                amplified by the transformative power of artificial
                intelligence. We aspire to bridge the gap between human
                creativity and AI’s limitless capacity to innovate, ensuring a
                sustainable and prosperous future for Businesses, Employees, and
                Customers.
              </motion.p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="About_Sectionflex3 backgroundbox">
            <div className="About_Sectionflexsub3">
              <motion.h2
                className="About_Section_heading4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Mission
              </motion.h2>

              <motion.p
                className="About_Section_para2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Our mission is to transform businesses through tailored AI
                solutions that don’t just solve problems but create new
                opportunities.
              </motion.p>
            </div>
            <div className="About_Sectionflexsub3_2">
              <motion.p
                className="About_Section_para3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                At our core, we empower businesses to embrace the transformative
                potential of artificial intelligence. Through custom-tailored
                solutions, we address unique challenges, streamline
                inefficiencies, and elevate workforce capabilities. Guided by a
                commitment to innovation and sustainability, we aim to reimagine
                industries, deliver exceptional value, and shape a future where
                AI works for humanity. We aim to address inefficiencies, elevate
                productivity, and empower workforces to focus on high-value
                contributions while leaving repetitive tasks to AI. By
                integrating ethical AI practices, we are committed to building
                scalable, secure, and sustainable solutions that fuel
                innovation, enhance employee satisfaction, and ensure long-term
                growth.
              </motion.p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full h-full p-2 flex flex-col justify-evenly">
            <div className="backgroundbox">
              <motion.h2
                className="About_Section_heading5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                HOW WE WORK?
              </motion.h2>
              <motion.p
                className="About_Section_para4 my-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                We collaborate with businesses as strategic partners, offering
                insightful consultancy to uncover obstacles, seize
                opportunities, and provide bespoke AI solutions. Our approach
                doesn’t just solve challenges or mitigate risks—it reinvents
                your value chain, empowering your team to focus on innovation
                and high-impact work.
              </motion.p>
              <motion.p
                className="About_Section_para4 my-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Specialising in AI development and consultancy, we create
                tailored solutions to address unique business needs, streamline
                both front-end and back-end operations, and eliminate
                inefficiencies—helping you unlock the potential for sustainable
                growth and unparalleled efficiency.
              </motion.p>
            </div>
            <div className="fifthflexidv">
              <PartnerSection
                number={1}
                subheading=""
                heading="CONSULTATION AND ASSESSMENT"
                content="We start with an in-depth consultation to understand your business problems, challenges, objectives, and current processes."
              />
              <PartnerSection
                number={2}
                subheading=""
                heading="SOLUTION DESIGN AND DEVELOPMENT"
                content="Our team designs and develops AI solutions customised to your specific requirements. We ensure seamless integration with your existing systems for a smooth transition and minimal disruption."
              />
              <PartnerSection
                number={3}
                subheading=""
                heading="IMPLEMENTATI ON AND TRAINING"
                content="We implement AI solutions and provide comprehensive training to your staff, ensuring they are equipped to leverage the new technology effectively."
              />
              <PartnerSection
                number={4}
                subheading=""
                heading="ONGOING SUPPORT AND OPTIMISATION"
                content="Our commitment to your success doesn’t end with implementation. We offer regular updates to your unique solutions, continuous support and optimisation to ensure your AI solutions remain effective and evolve with your business needs."
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
                  style={{ fontWeight: 999 }}
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

export default AboutSection;
