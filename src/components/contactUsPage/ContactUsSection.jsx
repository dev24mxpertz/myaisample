import { Scroll } from "@react-three/drei";
import React, { forwardRef, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <section className="w-full h-screen paddinghori16 flex flex-col items-center">
      <div className="w-full h-full flex flex-col max-w-[1300px] bgdiv justify-center">
        {props.children}
      </div>
    </section>
  );
};

const ContactUsSection = forwardRef(({ onScrollPagesChange }, ref) => {
  const localRef = useRef(null);

  useLayoutEffect(() => {
    let debounceTimeout;

    const calculateScrollPages = () => {
      if (localRef.current) {
        const indexSectionHeight = localRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        const pages = indexSectionHeight / windowHeight;
        onScrollPagesChange(Math.max(pages, 1));
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
          <div className="footer_maindiv contactresponsivediv">
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

export default ContactUsSection;
