// import React from "react";
// import MoreIcon from "../icons/MoreIcon";
// import { Menu } from "@headlessui/react";

// export const MoreButton = () => {
//   return (
//     <Menu>
//       <Menu.Button className="">
//         <div className=" text-gray-neutral">
//           <MoreIcon />
//         </div>
//       </Menu.Button>
//       <div className="absolute">
//         <Menu.Items>
//           <Menu.Item>
//             {({ active }) => (
//               <a
//                 className={`${active && "bg-blue-500"}`}
//                 href="/account-settings"
//               >
//                 Account settings
//               </a>
//             )}
//           </Menu.Item>
//           <Menu.Item>
//             {({ active }) => (
//               <a
//                 className={`${active && "bg-blue-500"}`}
//                 href="/account-settings"
//               >
//                 Documentation
//               </a>
//             )}
//           </Menu.Item>
//           <Menu.Item disabled>
//             <span className="opacity-75">Invite a friend (coming soon!)</span>
//           </Menu.Item>
//         </Menu.Items>
//       </div>
//     </Menu>
//   );
// };
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { CrudContext } from "../context/CrudContext";
import { DeleteActiveIcon, DeleteInactiveIcon } from "../icons/DeleteIcon";
import MoreIcon from "../icons/MoreIcon";
import { StartIcon } from "../icons/StartIcon";

export function MoreButton({ id }) {
  const { handleDelete } = useContext(CrudContext);
  return (
    <div className="text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center ">
            <div className=" text-gray-neutral ">
              <MoreIcon />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95 "
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <Menu.Item
                onClick={() => {
                  console.log("DELETE", id);
                  handleDelete(id);
                }}
              >
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-primary-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="w-5 h-5 mr-2  "
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 "
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>{" "}
            <div className="p-1">
              <Menu.Item disabled>
                <span className="opacity-50  group flex gap-2 rounded-md items-center w-full px-2 py-2 text-sm cursor-not-allowed ">
                  <StartIcon />
                  Add Favorite
                </span>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
