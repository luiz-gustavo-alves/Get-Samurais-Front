import { useContext } from "react";
import OffsetContext from "../contexts/offsetContext";

const useOffset = () => useContext(OffsetContext);

export default useOffset;