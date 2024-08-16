import { KeyComponentProps } from "@/types/types";

const Key: React.FC<KeyComponentProps> = ({
  label,
  type,
  value,
  color,
  beingPressed,
}) => {
  enum Key {
    letter,
    number,
    symbol,
    fn,
    esc,
    cntrl,
    shift,
    alt,
    super,
    space,
    backspace,
    enter,
    tab,
    capslock,
    arrow,
  }

  enum Color {
    green,
    blue,
    red,
    yellow,
  }

  return (
    <div
      className={`inline-block px-3 py-3 border border-gray-400 rounded shadow text-sm fonto-mono text-gray-800 ${beingPressed ? "bg-gray-400" : "bg-gray-200"}`}
    >
      {" "}
      {label}{" "}
    </div>
  );
};

export default Key;
