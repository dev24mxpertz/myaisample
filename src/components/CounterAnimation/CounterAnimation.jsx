// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import "./counter.css";
// import "../indexPage/IndexPage.css";

// const CounterAnimation = ({ loadingDuration }) => {
//   const digitsRef = useRef([]);
//   const loadingContainerRef = useRef(null);

//   const [isShowoverlay, setIsShowoverlay] = useState();

//   useEffect(() => {
//     let currentCounter = 0;
//     const totalAnimationSteps = 100;
//     const animationDuration = 0.05;

//     const updateCounter = (number) => {
//       const formattedDigits = String(number).padStart(3, "0");

//       digitsRef.current.forEach((digitInner, index) => {
//         const currentDigit = parseInt(digitInner.textContent);
//         const nextDigit = parseInt(formattedDigits[index]);

//         if (currentDigit !== nextDigit) {
//           animateDigit(digitInner, nextDigit);
//         }
//       });

//       animateLoadingBar(number);
//     };

//     const animateDigit = (digitInner, nextDigit) => {
//       const clone = digitInner.cloneNode(true);
//       clone.textContent = nextDigit;
//       gsap.set(clone, { yPercent: 100 });

//       digitInner.parentNode.appendChild(clone);

//       gsap.to([digitInner, clone], {
//         yPercent: "-=100",
//         duration: animationDuration,
//         ease: "power1.out",
//         onComplete: () => {
//           digitInner.textContent = nextDigit;
//           gsap.set(digitInner, { yPercent: 0 });
//           clone.remove();
//         },
//       });
//     };

//     const animateLoadingBar = (progress) => {
//       gsap.to(loadingContainerRef.current, {
//         width: `${progress}%`,
//         duration: animationDuration,
//         ease: "power1.out",

//       });
//     };

//     const interval = setInterval(() => {
//       if (currentCounter > totalAnimationSteps) return clearInterval(interval);
//       updateCounter(currentCounter++);
//     }, animationDuration * 1000);

//     return () => clearInterval(interval);
//   }, [loadingDuration]);

//   return (
//     <div className="Main_Layout_Container">
//       <div className="main-container">
//         <div className="loader_div">
//           <div className="loading_container" ref={loadingContainerRef}></div>
//         </div>
//         <div className="loading_span_container">
//           <div className="digit-wrapper">
//             {[0, 1, 2].map((_, index) => (
//               <div className="digit" key={index}>
//                 <div
//                   className="digit-inner"
//                   ref={(el) => (digitsRef.current[index] = el)}
//                 >
//                   0
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {isShowoverlay ? (
//         <div className={`menu_overlay ${isShowoverlay ? "open" : ""}`}></div>
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// export default CounterAnimation;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./counter.css";
import "../indexPage/IndexPage.css";

const CounterAnimation = ({ loadingDuration }) => {
  const digitsRef = useRef([]);
  const loadingContainerRef = useRef(null);

  const [isShowoverlay, setIsShowoverlay] = useState(false);

  useEffect(() => {
    let currentCounter = 0;
    const totalAnimationSteps = 100;
    const animationDuration = 0.05;

    const updateCounter = (number) => {
      const formattedDigits = String(number).padStart(3, "0");

      digitsRef.current.forEach((digitInner, index) => {
        const currentDigit = parseInt(digitInner.textContent);
        const nextDigit = parseInt(formattedDigits[index]);

        if (currentDigit !== nextDigit) {
          animateDigit(digitInner, nextDigit);
        }
      });

      animateLoadingBar(number);
    };

    const animateDigit = (digitInner, nextDigit) => {
      const clone = digitInner.cloneNode(true);
      clone.textContent = nextDigit;
      gsap.set(clone, { yPercent: 100 });

      digitInner.parentNode.appendChild(clone);

      gsap.to([digitInner, clone], {
        yPercent: "-=100",
        duration: animationDuration,
        ease: "power1.out",
        onComplete: () => {
          digitInner.textContent = nextDigit;
          gsap.set(digitInner, { yPercent: 0 });
          clone.remove();
        },
      });
    };

    const animateLoadingBar = (progress) => {
      gsap.to(loadingContainerRef.current, {
        width: `${progress}%`,
        duration: animationDuration,
        ease: "power1.out",
      });
    };

    const interval = setInterval(() => {
      if (currentCounter > totalAnimationSteps) {
        clearInterval(interval);
        setIsShowoverlay(true); // Show overlay when animation completes
        return;
      }
      updateCounter(currentCounter++);
    }, animationDuration * 1000);

    return () => clearInterval(interval);
  }, [loadingDuration]);

  return (
    <div className="Main_Layout_Container">
      <div className="main-container">
        <div className="loader_div">
          <div className="loading_container" ref={loadingContainerRef}></div>
        </div>
        <div className="loading_span_container">
          <div className="digit-wrapper">
            {[0, 1, 2].map((_, index) => (
              <div className="digit" key={index}>
                <div
                  className="digit-inner"
                  ref={(el) => (digitsRef.current[index] = el)}
                >
                  0
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`menu_overlay ${isShowoverlay ? "open" : ""}`}></div>
    </div>
  );
};

export default CounterAnimation;
