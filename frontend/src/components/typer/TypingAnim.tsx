import { TypeAnimation } from "react-type-animation";

export const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Chat With Your Own AI",
        1000,
        "Built With Open AI",
        2000,
        "Your Own Customized ChatGPT",
        1500,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "60px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
      }}
      repeat={Infinity}
    />
  );
};
