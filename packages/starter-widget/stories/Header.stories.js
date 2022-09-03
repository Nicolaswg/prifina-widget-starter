import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "../src/components/Header/Header";

export default {
  title: "Header",
  component: Header,
};

export const HeaderStories = () => (
  <Header
    ouraData={{ date: "03/09/2022" }}
    userData={{
      name: {first: 'User', last: 'Test'},
      email: "userTesting@example.com",
    }}
  />
);
