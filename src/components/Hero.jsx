import { curve} from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";

import { useRef } from "react";


const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          Effortless Parcel Delivery Simplify Your Shipping Experience with {` `}
            <span className="inline-block relative text-blue-500">
              ParcelSync{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6  text-[#a7a7a7] lg:mb-8">
          Elevate Your Parcel Delivery Experience with Brainwave: Your Ultimate Shipping Solution
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
            

          <BackgroundCircles />
        
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
