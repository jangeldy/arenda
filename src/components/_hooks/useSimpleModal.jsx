import { useState } from 'react';

function useSimpleModal() {
  const [data, setData] = useState(null);
  return {
    data,
    isOpen: !!data,
    open: setData,
    close: () => setData(null)
  };
}

export default useSimpleModal;
