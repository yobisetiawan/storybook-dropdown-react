import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Dropdown from "yob-dropdown-react";
import "yob-dropdown-react/dist/yob-dropdown-react.css";
import { IProps } from "yob-dropdown-react/dist/src/Dropdown";
import "../index.css";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    value: { control: "object" },
    onChange: { action: "changed" },
    options: { control: "object" },
    portal: { control: "boolean" },
    withSearch: { control: "boolean" },
    multiple: { control: "boolean" },
    outlined: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<IProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<any>(args.value);
  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Dropdown
        {...args}
        value={selectedValue}
        onChange={(val) => {
          setSelectedValue(val);
        }}
      />
    </div>
  );
};

export const Default = Template.bind({});

const options = [
  { label: "Option 1", value: "Option 1" },
  { label: "Option with icon", value: "Option with icon" },
  { label: "Long long Option 3", value: "Long long Option 3" },
  {
    label: "Long long long long Option 5",
    value: "Long long long long Option 5",
  },
  {
    label: "Long long long long long Option 6",
    value: "Long long long long long Option 6",
  },
];

Default.args = {
  value: undefined,
  options: options,
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  ...Default.args,
  multiple: true,
  value: options,
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  ...Default.args,
  withSearch: true,
};

export const CustomOptions = Template.bind({});
CustomOptions.args = {
  value: undefined,
  options: options,
  multiple: true,
  withSearch: true,
  outlined: true,
};
