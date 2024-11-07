import React, { useEffect, useState } from 'react';

export const useSample = () => {
  
    const [isReady, setIsReady] = useState<boolean>(false);
  
    useEffect(() => {
        setIsReady(true);
    }, []);
  
    return isReady;
  }
  