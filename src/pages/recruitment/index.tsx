import React from 'react';
import { useSession } from "@clerk/clerk-react";

const Recruitment = () => {
  const { session } = useSession();
  return <div className="">Recruitment works!</div>;
};

export default Recruitment;
