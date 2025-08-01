import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function SvgPathLoader() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateLoader = async () => {
      // M1 and M2 animations (synchronized)
      const animateM = async () => {
        await animate(".m1", { pathLength: 0.5, pathOffset: 0 }, { duration: 1, ease: "linear" });
        await animate(".m1", { pathLength: 0.005, pathOffset: 0 }, { duration: 1, ease: "linear" });
        animate(".m2", { pathLength: 0.5, pathOffset: 0.5 }, { duration: 2, ease: "linear" });
      };
      
      // ON1 and ON2 animations (synchronized)
      const animateON = async () => {
        await animate(".on1", { pathLength: 0.5, pathOffset: 0 }, { duration: 1, ease: "linear" });
        await animate(".on1", { pathLength: 0.005, pathOffset: 0 }, { duration: 1, ease: "linear" });
        animate(".on2", { pathLength: 0.5, pathOffset: 0.5 }, { duration: 2, ease: "linear" });
      };
      
      // Inner O animation
      const animateInnerO = async () => {
        await animate(".innerO", { pathLength: 1.1, pathOffset: 0 }, { duration: 1.8, ease: "linear" });
        await animate(".innerO", { pathLength: 0, pathOffset: 0 }, { duration: 0, ease: "linear" });
        setTimeout(animateInnerO, 600); // repeatDelay
      };
      
      // Outer O animation  
      const animateOuterO = async () => {
        await animate(".outerO", { pathLength: 1.1, pathOffset: 0 }, { duration: 2, ease: "linear" });
        await animate(".outerO", { pathLength: 0, pathOffset: 0 }, { duration: 0, ease: "linear" });
        setTimeout(animateOuterO, 600); // repeatDelay
      };
      
      // Start all animations and set up infinite loops
      const runMLoop = async () => {
        while (true) {
          await animateM();
        }
      };
      
      const runONLoop = async () => {
        while (true) {
          await animateON();
        }
      };
      
      runMLoop();
      runONLoop();
      animateInnerO();
      animateOuterO();
    };
    
    animateLoader();
  }, [animate]);

  return (
    <svg
      ref={scope}
      width="94.033241mm"
      height="29.361317mm"
      viewBox="0 0 93.033241 29.361316"
    >
      <motion.path
        className="m1"
        initial={{ pathLength: 0.5, pathOffset: 0.5 }}
        d="M 1.0913967,27.435857 6.1678497,0.90879279 14.446371,20.084977 23.021669,0.90879279 27.582665,27.435857 H 23.84952 L 21.522164,12.542343 14.38389,28.570437 7.4486773,12.526363 4.8557837,27.435857 Z"
      />
      <motion.path
        className="m2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M 1.0913967,27.435857 6.1678497,0.90879279 14.446371,20.084977 23.021669,0.90879279 27.582665,27.435857 H 23.84952 L 21.522164,12.542343 14.38389,28.570437 7.4486773,12.526363 4.8557837,27.435857 Z"
      />
      <motion.path
        className="on1"
        initial={{ pathLength: 0.5, pathOffset: 0.5 }}
        d="M 62.368013,19.38002 V 2.2333221 h 3.63942 V 28.40881 L 45.951612,7.9542262 C 44.243841,6.1644481 42.129956,5.2695591 39.609953,5.2695591 c -2.509589,0 -4.628681,0.894889 -6.357278,2.6846671 -1.728599,1.7684692 -2.592897,3.9524228 -2.592897,6.5518618 0,2.727282 0.895537,4.969822 2.686614,6.727632 1.780665,1.75782 3.837278,2.63674 6.169842,2.63674 2.530417,0 4.665129,-0.89489 6.404139,-2.68469 1.73901,-1.81107 3.06749,-5.864752 3.06749,-5.864752 l 2.65748,2.402832 c -0.5354,2.2704 -1.4073,4.15564 -3.16331,5.90688 -2.488768,2.48228 -5.492984,3.7234 -9.012657,3.7234 -3.113557,0 -5.909513,-1.10264 -8.38786,-3.3079 -2.728269,-2.43963 -4.092402,-5.63566 -4.092402,-9.588092 0,-3.473017 1.24438,-6.4559818 3.733144,-8.9488859 2.478351,-2.492904 5.456536,-3.739355 8.934554,-3.739355 3.436367,0 6.383314,1.257105 8.840841,3.771317 z"
      />
      <motion.path
        className="on2"
        initial={{ pathLength: 0, pathOffset: 1 }}
        d="M 62.368013,19.38002 V 2.2333221 h 3.63942 V 28.40881 L 45.951612,7.9542262 C 44.243841,6.1644481 42.129956,5.2695591 39.609953,5.2695591 c -2.509589,0 -4.628681,0.894889 -6.357278,2.6846671 -1.728599,1.7684692 -2.592897,3.9524228 -2.592897,6.5518618 0,2.727282 0.895537,4.969822 2.686614,6.727632 1.780665,1.75782 3.837278,2.63674 6.169842,2.63674 2.530417,0 4.665129,-0.89489 6.404139,-2.68469 1.73901,-1.81107 3.06749,-5.864752 3.06749,-5.864752 l 2.65748,2.402832 c -0.5354,2.2704 -1.4073,4.15564 -3.16331,5.90688 -2.488768,2.48228 -5.492984,3.7234 -9.012657,3.7234 -3.113557,0 -5.909513,-1.10264 -8.38786,-3.3079 -2.728269,-2.43963 -4.092402,-5.63566 -4.092402,-9.588092 0,-3.473017 1.24438,-6.4559818 3.733144,-8.9488859 2.478351,-2.492904 5.456536,-3.739355 8.934554,-3.739355 3.436367,0 6.383314,1.257105 8.840841,3.771317 z"
      />
      <motion.path
        className="innerO"
        initial={{ pathLength: 1.1, pathOffset: 1 }}
        style={{ rotate: -90 }}
        d="m 70.884863,14.506375 q 0,4.090915 2.68661,6.727635 2.671,2.63674 6.16987,2.63674 3.79561,0 6.40412,-2.68469 2.60851,-2.71661 2.60851,-6.615766 0,-3.947096 -2.57725,-6.6157808 -2.56168,-2.6846671 -6.34167,-2.6846671 -3.76439,0 -6.35729,2.6846671 -2.5929,2.6527048 -2.5929,6.5518618 z"
      />
      <motion.path
        className="outerO"
        initial={{ pathLength: 1.1, pathOffset: 1 }}
        style={{ rotate: 90 }}
        d="m 67.214223,14.458425 q 0,-5.2095278 3.73313,-8.9488859 3.71754,-3.739355 8.93457,-3.739355 5.15454,0 8.84083,3.771317 3.7019,3.7713141 3.7019,9.0607469 0,5.321382 -3.71752,9.028772 -3.73315,3.7234 -9.01266,3.7234 -4.67035,0 -8.38787,-3.3079 -4.09238,-3.65944 -4.09238,-9.588095 z"
      />
    </svg>
  );
}