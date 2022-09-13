import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import Footer from "../src/components/Footer/Footer";

export default {
  title: "Footer",
  component: Footer,
  decorators: [withKnobs],
};

//
export const FooterStories = () => (
  <Footer
    score={number("score", 87)}
    rest={number("rest", 400)}
    non_wear={number("non_wear", 300)}
    cal_total={number("calories", 2000)}
  />
);
