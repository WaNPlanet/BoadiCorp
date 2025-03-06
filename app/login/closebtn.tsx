"use client"; // Ensure it's a client component

import { useRouter } from "next/navigation";

const CloseButton = () => {
  const router = useRouter();

  return (
    <button
      className="btn btn-sm btn-circle btn-ghost absolute left-4 top-10"
      onClick={() => router.push("/")} // Navigate to home page
    >
      ✕
    </button>
  );
};

export default CloseButton;
