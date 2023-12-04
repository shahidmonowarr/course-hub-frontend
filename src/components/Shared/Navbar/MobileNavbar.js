// import Search from "@/components/UI/Search";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SideBarMenu from "../SidebarMenu/SidebarMenu";

function MobileNavbar() {
  const router = useRouter();
  const [showSideBar, setShowBar] = useState(false);

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-30 block px-6 py-4 text-gray-900 transition-all bg-white glassmorphism md:hidden">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center space-x-4">
            <div>
              <Bars3Icon
                className="w-8 cursor-pointer"
                onClick={() => setShowBar(true)}
              />
            </div>
            <Link href={"/"} className="flex items-center font-bold">
              Course Hub
            </Link>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/add-to-cart")}
          >
            {/* <ComputerDesktopIcon className="xl:w-10 w-9 link" /> */}
            <i class="material-icons">Cart</i>
          </div>
        </div>
        <div>{/* <Search /> */}</div>
      </header>
      <div
        className={`z-40 fixed inset-y-0 left-0 overflow-hidden transition-all duration-300  shadow-2xl  ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        }
          `}
      >
        <SideBarMenu closeSideBar={() => setShowBar(false)} />
      </div>
    </>
  );
}

export default MobileNavbar;
