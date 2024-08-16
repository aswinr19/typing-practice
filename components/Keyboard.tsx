import Key from "@/components/Key";
import { KeyType } from "@/types/types";

const Keyboard: React.FC<KeyType[]> = ({ layout }) => {
  console.log("hai");
  console.log(layout);
  return (
    <div className="border-8 max-w-5xl">
      {layout.map((kee: KeyType) => (
        <Key
          key={kee.id}
          label={kee.label}
          value={kee.value}
          type={kee.type}
          color=""
          beingPressed={kee.beingPressed}
        />
      ))}
    </div>
  );
};

export default Keyboard;
