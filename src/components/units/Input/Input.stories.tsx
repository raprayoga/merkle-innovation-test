import { useState } from "react";
import Input from "./index";

export default {
  component: Input,
  tags: ["autodocs"],
};

const StoryComponent = ({ variant }: { variant?: "default" | "danger" }) => {
  const [value, setValue] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
  };

  return (
    <Input
      placeholder="Name"
      value={value}
      onChange={(e) => handleOnChange(e)}
      theme={variant}
    />
  );
};

export const Default = () => {
  return <StoryComponent variant="default" />;
};

export const Danger = () => {
  return <StoryComponent variant="danger" />;
};
