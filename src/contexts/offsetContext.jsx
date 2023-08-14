import { createContext, useState } from "react";

const OffsetContext = createContext();

export function OffsetProvider({ children }) {

  const [offset, setOffset] = useState(0);

  const resetOffset = () => {
    setOffset(0);
  }

  const updateOffset = () => {
    setOffset(offset + 1);
  }

  const validateOffset = (data, counter) => {
    return data.length < counter;
  }

  return (
    <OffsetContext.Provider value={{ offset, resetOffset, updateOffset, validateOffset }}>
      {children}
    </OffsetContext.Provider>
  );
}

export default OffsetContext;