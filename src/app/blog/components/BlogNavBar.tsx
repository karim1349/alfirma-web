"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BlogNavBar = () => {
  const pathname = usePathname();
  const isBlogHome = pathname === "/blog" || pathname === "/blog/";
  const isArticle = pathname.startsWith("/blog/") && !isBlogHome;

  return (
    <div className="flex z-50 bg-gray-50/90 backdrop-blur-sm p-2.5 rounded-full w-auto max-w-md fixed top-14 left-1/2 transform -translate-x-1/2 shadow-lg">
      <Link
        href="/"
        className="group flex-1 rounded-full py-2 px-4 flex justify-center cursor-pointer hover:bg-white items-center"
      >
        <p className="text-xs md:text-sm font-medium text-gray-500 group-hover:text-black whitespace-nowrap">
          Accueil
        </p>
      </Link>
      <Link
        href="/blog/"
        className={`group flex-1 rounded-full py-2 px-4 flex justify-center cursor-pointer hover:bg-white items-center ${
          isBlogHome ? "bg-white" : ""
        }`}
      >
        <p
          className={`text-xs md:text-sm font-medium ${
            isBlogHome ? "text-black" : "text-gray-500"
          } group-hover:text-black whitespace-nowrap`}
        >
          Blog
        </p>
      </Link>
      {isArticle && (
        <div className="group flex-1 rounded-full py-2 px-4 flex justify-center items-center bg-white">
          <p className="text-xs md:text-sm font-medium text-black whitespace-nowrap">
            Article
          </p>
        </div>
      )}
      <Link
        href="/#SECTION_CONTACT"
        className="group flex-1 rounded-full py-2 px-4 flex justify-center cursor-pointer hover:bg-white items-center"
      >
        <p className="text-xs md:text-sm font-medium text-gray-500 group-hover:text-black whitespace-nowrap">
          Contact
        </p>
      </Link>
    </div>
  );
};

export default BlogNavBar;
