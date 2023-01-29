import React from "react";

import SearchBar, { SearchBarProps } from "./SearchBar";

export default {
  component: SearchBar,
  title: "SearchBar",
};

const Template = (args: SearchBarProps) => <SearchBar {...args} />;
