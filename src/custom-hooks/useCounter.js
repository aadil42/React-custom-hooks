import {useEffect, useState} from 'react';

const useCounter = (increament = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      let interval;
      if(increament) {
         interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
          }, 1000);
      }  else {
        interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
          }, 1000);
      }
      return () => clearInterval(interval);
    }, [increament]);

    return counter;
}

export default useCounter;