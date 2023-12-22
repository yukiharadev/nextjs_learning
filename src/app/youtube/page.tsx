"use client";

import { useRouter } from "next/navigation";

const Youtube = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Youtube
      <div>
        <button onClick={() => handleBtn()}>BackHome</button>
      </div>
    </div>
  );
};

export default Youtube;
