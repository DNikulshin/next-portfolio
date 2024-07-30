"use client";
import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className={cn("w-full h-[50px] text-white", className)}>
      <Container>
        <nav className=" bg-[#035071] border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              /> */}
              <div className="flex flex-wrap">
                <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Nikulshin Dmitriy -&nbsp;
                </h1>
                <h2 className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                  Portfolio Web Developer
                </h2>
              </div>
            </Link>{" "}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={cn(
                !isMenuOpen ? "hidden" : "",
                "w-screen md:block md:w-auto z-50 shadow",
              )}
              id="navbar-default"
            >
              <ul
                className="font-medium text-white flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#035071] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#035071] md:text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                <li>
                  <Link
                    href="/"
                    className={cn(
                      "text-white block py-2 px-3 text-white rounded md:bg-transparent  md:p-0 dark:text-white md:dark:text-blue-500",
                      pathname === "/" ? "text-red-700" : "text-white",
                    )}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/myworks"
                    className={cn(
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                      pathname === "/myworks" ? "text-red-700" : "text-white",
                    )}
                  >
                    My Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={cn(
                      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                      pathname === "/about" ? "text-red-700" : "text-white",
                    )}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-red-500 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                      pathname === "/contact" ? "text-red-700" : "text-white",
                    )}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
