import { Scroll } from "@react-three/drei";
import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
} from "react";
import logoimage from "../../assets/Logo_image.png";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <section className="w-full paddinghori16 flex flex-col items-center">
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
                Newcastle Upon Tyne
                <br />
                Indore
                <br />
                Surat (Coming Soon !)
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
      </div>
    </Scroll>
  );
});

export default ContactUsSection;
