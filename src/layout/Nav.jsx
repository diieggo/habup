import { Link } from "react-router-dom";
import {
  IconHome,
  IconPlus,
  IconSun,
  IconTrack,
  IconUser,
} from "../assets/icons";
import React from "react";

export function Nav({ active }) {
  return (
    <>
      <nav className="fixed bottom-2 left-4 right-4 border bg-white border-gray-100 p-2 rounded-full md:hidden">
        <ul className="flex justify-around items-center">
          <li>
            <Link to={"/"}>
              <button
                className={`${
                  active == "home" ? "text-primary" : "text-gray-400 "
                }`}
              >
                <IconHome width={20} height={20} />
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/track"}>
              <button
                className={`${
                  active == "track" ? "text-primary" : "text-gray-400 "
                }`}
              >
                <IconTrack width={20} height={20} />
              </button>
            </Link>
          </li>
          <li>
            <button className="bg-gradient-to-br from-blue-500 to-blue-900 p-2 text-white rounded-full">
              <IconPlus width={20} height={20} />
            </button>
          </li>
          <li>
            <button className="text-gray-400 ">
              <IconSun width={20} height={20} />
            </button>
          </li>
          <li>
            <Link to={"/user"}>
              <button
                className={`${
                  active == "user" ? "text-primary" : "text-gray-400 "
                }`}
              >
                <IconUser width={20} height={20} />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
