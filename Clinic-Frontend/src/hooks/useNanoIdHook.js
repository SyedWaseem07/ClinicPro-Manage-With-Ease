import { useRef } from 'react';
import { nanoid } from 'nanoid';

const useUID = () => {
  const idRef = useRef(null);

  if (idRef.current === null) {
    idRef.current = nanoid();
  }

  return idRef.current;
};

export default useUID;