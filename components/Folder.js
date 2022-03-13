import React from "react";
import Link from "next/link";

const Folder = ({ title }) => {
   return (
      <>
         <Link href={`/${encodeURIComponent(title)}`}>
            <div>{title}</div>
         </Link>
      </>
   );
};

export default Folder;
