"use client"; // Ensure it's a client component

import { useRouter } from "next/navigation";

const CloseButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")} // Navigate to home page
    >
      ✕
    </button>
  );
};

export default CloseButton;
