import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  image: benefitOneImg,
  bullets: [
    {
      title: "Portable Design",
      desc: " Compact and lightweight, making it easy to carry and use in various environments.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Energy Efficient",
      desc: " Designed to consume minimal power, ensuring long-lasting operation on a single battery charge.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Haptic Feedback",
      desc: "Equipped with vibration motors that provide tactile feedback to the user, indicating the proximity and direction of detected obstacles.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Obstacle Detection",
      desc: "Utilizes ultrasonic sensors to detect objects in the user's path up to a certain range, ensuring early warning and safe navigation.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Arduino Microcontroller:",
      desc: "Acts as the core of the system, processing input from sensors and controlling output to the haptic feedback devices.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
