import React from 'react';
import { useSession } from "@clerk/clerk-react";

const User = () => {
  const { session } = useSession();
  console.log({session})
  if (!session?.user) {
    return <div className=""></div>;
  }
  return <div className="">User works!</div>;
};

export default User;
