"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TbPokeball } from "react-icons/tb";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full dark:text-white backdrop-blur-md px-5 border-b-1 border-white fixed top-0 left-0 z-[9999]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/" className="flex items-center">
                <TbPokeball className="mr-3 w-auto h-7" />
                <h2 className="text-2xl font-bold">Pokedex</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md border-2 border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end md:items-center">
            <div
              className={`w-32 rounded-lg absolute bg-white md:bg-transparent lg:bg-transparent lg:p-0 md:dark:text-white text-black border-2 border-gray-400 px-5 py-5 mt-3 md:mt-0 md:block lg:pb-0 lg:mt-0 md:border-0 md:w-auto lg:w-auto ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center md:flex md:space-y-0 md:space-x-3 space-y-3">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/moves">Moves</Link>
                </li>
                <li>
                  <Link href="/items">Items</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
