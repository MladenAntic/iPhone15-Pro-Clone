import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Iguana from "./components/Iguana";
import Lenses from "./components/Lenses";
import MainCamera from "./components/MainCamera";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";
import Zoom from "./components/Zoom";
import Action from "./components/Action";
import Gigablast from "./components/Gigablast";
import BatteryLife from "./components/BatteryLife";
import Emergency from "./components/Emergency";
import MakeADifference from "./components/MakeADifference";
import StyleItOut from "./components/StyleItOut";
import SignificantOthers from "./components/SignificantOthers";
import ShopAndSave from "./components/ShopAndSave";
import KeepExploring from "./components/KeepExploring";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Iguana />
      <Lenses />
      <MainCamera />
      <Zoom />
      <Action />
      <Gigablast />
      <BatteryLife />
      <Emergency />
      <MakeADifference />
      <StyleItOut />
      <SignificantOthers />
      <ShopAndSave />
      <KeepExploring />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
