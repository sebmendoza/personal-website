import Link from "next/link";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

function BackButton() {
  return (
    <Link href="/" className="flex w-fit items-center gap-4">
      <FaLongArrowAltLeft className="h-10" />
      <span className="hover:underline ">leave library</span>
    </Link>
  );
}

export default BackButton;
