import { Scroll } from "@react-three/drei";
import React, { useLayoutEffect, useRef, forwardRef } from "react";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <section className="w-full h-screen px-16 flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-evenly max-w-[1300px]">
        {props.children}
      </div>
    </section>
  );
};

const BlackSection = (props) => {
  return (
    <section className="w-full px-16 py-6 bg-black text-white flex flex-col justify-start items-center">
      <div className="w-full h-full flex justify-end items-center max-w-[1300px]">
        {props.children}
      </div>
    </section>
  );
};

const BackendPageSection = forwardRef(({ onScrollPagesChange }, ref) => {
  const localRef = useRef(null);

  useLayoutEffect(() => {
    let debounceTimeout;

    const calculateScrollPages = () => {
      if (localRef.current) {
        const indexSectionHeight = localRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        const pages = indexSectionHeight / windowHeight;
        onScrollPagesChange(Math.max(pages, 2));
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

  const handlelinkedinginclick = () => {
    window.open("https://www.linkedin.com/company/altusreinvents/", "_blank");
  };

  return (
    <Scroll html className="w-full">
      <div ref={localRef}>
        <BlackSection>
          <div className="w-50 h-full mt-16 p-2 flex flex-col items-start justify-evenly">
            <motion.h3
              className="logo_subheading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Your bold idea, our smart solutions
            </motion.h3>
            <motion.h1
              className="logo_heading my-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              coming
              <br /> soon !
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

export default BackendPageSection;
