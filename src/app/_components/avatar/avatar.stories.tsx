import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";
import { withTests } from "@storybook/addon-jest";

import results from "../../../../.jest-test-results.json";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autotags"],
  args: {
    variant: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Tests: Story = {
  render: (args) => <Avatar {...args} />,
};

Tests.decorators = [withTests({ results })];

export const BrandColors: Story = {
  render: () => (
    <>
      <Avatar variant="neutral" />
      <Avatar variant="primary" />
      <Avatar variant="secondary" />
      <Avatar variant="accent" />
      <Avatar variant="ghost" />
    </>
  ),
};

export const StateColors: Story = {
  render: () => (
    <>
      <Avatar variant="success" />
      <Avatar variant="info" />
      <Avatar variant="warning" />
      <Avatar variant="error" />
    </>
  ),
};

export const AvatarSizes: Story = {
  render: () => (
    <>
      <Avatar variant="accent" size="tiny" />
      <Avatar variant="accent" size="small" />
      <Avatar variant="accent" size="normal" />
      <Avatar variant="accent" size="large" />
    </>
  ),
};
