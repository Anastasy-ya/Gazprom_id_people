import image from "../../shared/assets/structure_zone.png";
import { useRef, useEffect } from "react";
import Panzoom from "panzoom";

const PanzoomComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const panzoom = Panzoom(ref.current);

      return () => panzoom.dispose();
    }
  }, []);

  return (
    <div ref={ref} style={{ overflow: "hidden", width: "100%", height: "100%" }}>
      <img src={image} alt="Panzoom" />
    </div>
  );
};

export default PanzoomComponent;

