"use client";

import Link from "next/link";

interface propss {
  text: string;
  href: string;
}
const ButtonNavigation: React.FC<propss> = (props) => {
  return (
    <>
      <Link className="bg-white text-black p-3 rounded-xl" href={props.href}>
        {props.text}
      </Link>
    </>
  );
};

export default ButtonNavigation;
