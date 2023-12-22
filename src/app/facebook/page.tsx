"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      Facebook
      <div>
        <Button variant="success"> Hỏi Dân IT </Button>
        <button onClick={() => handleBtn()}>BackHome</button>
      </div>
    </div>
  );
};

export default Facebook;
