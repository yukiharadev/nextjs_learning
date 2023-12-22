"use client";

import { useRouter } from "next/navigation";

const Tiktok = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Tiktok
      <div>
        <button onClick={() => handleBtn()}>BackHome</button>
      </div>
    </div>
  );
};

export default Tiktok;
