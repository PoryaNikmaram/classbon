import { Meta, StoryObj } from "@storybook/react";
import { Price } from "./price";
import { withTests } from "@storybook/addon-jest";
import results from "../../../../.jest-test-results.json";

type Story = StoryObj<typeof Price>;

const meta: Meta<typeof Price> = {
  component: Price,
  tags: ["autotags"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

export const Tests: Story = {
  render: (args) => <Price {...args} />,
};

Tests.decorators = [withTests({ results })];

export const WithPrice: Story = {
  render: () => (
    <>
      <Price price={1500000} size="tiny" />
      <Price price={1500000} size="small" />
      <Price price={1500000} size="normal" />
      <Price price={1500000} size="large" />
    </>
  ),
};

export const WithoutPrice: Story = {
  render: () => (
    <>
      <Price size="tiny" text="free" />
      <Price size="small" text="free" />
      <Price size="normal" text="free" />
      <Price size="large" text="free" />
    </>
  ),
};
