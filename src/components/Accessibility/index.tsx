import "./styles.css";
import { MdAccessibility } from "react-icons/md";
import { useState } from "react";
import { Options } from "./Options";

export const Accessibility = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="accessibility">
        <div className="circle" onClick={() => setOpen(!open)}>
          <MdAccessibility color="#fff" size={26} />
        </div>
      </div>
      <div>{open && <Options />}</div>
    </>
  );
};
