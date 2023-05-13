// import { useState, useEffect } from 'react';

import Card from './Card';

// custom hooks
import useCounter from '../custom-hooks/useCounter';

const ForwardCounter = () => {
  const counter = useCounter();
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
