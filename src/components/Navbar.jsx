import { Fragment, useState, useContext } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import bikebg from "../Assest2/Air/DSC09570.jpg";
import { Link } from "react-router-dom";
import { ChevronDownIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Logo from "../Assest2/Vikaslogo.png";
import { ShopContext } from "../context/shop-context";
import air from "../werev/airPump.jpg";
import bag from "../werev/bag.jpg";
import helmet from "../werev/helmet.jpg";
import helmet1 from "../werev/helmet2.jpg";
import pump from "../werev/pump.jpg";

const products = [
  {
    name: "Earth",
    description: "Get a better understanding of your traffic",
    href: "product/1",
    icon: bikebg,
  },
  {
    name: "Air",
    description: "Speak directly to your customers",
    href: "product/2",
    icon: bikebg,
  },
  {
    name: "Fire",
    description: "Your customers’ data will be safe and secure",
    href: "product/3",
    icon: bikebg,
  },
  {
    name: "Ether",
    description: "Connect with third-party tools",
    href: "product/4",
    icon: bikebg,
  },
  {
    name: "AirOne",
    description: "Build strategic funnels that will convert",
    href: "product/5",
    icon: bikebg,
  },
];

const Accessories = [
  {
    name: "Lock",
    description: "Get a better understanding of your traffic",
    href: "/Accessorie",
    icon: air,
  },
  {
    name: "Bag (Waterproof)",
    description: "Speak directly to your customers",
    href: "/Accessorie",
    icon: bag,
  },
  {
    name: "Helmet (Safety)",
    description: "Your customers’ data will be safe and secure",
    href: "/Accessorie",
    icon: helmet,
  },
  {
    name: "Air Pump",
    description: "Connect with third-party tools",
    href: "/Accessorie",
    icon: helmet1,
  },
  {
    name: "Mobile Holder",
    description: "Build strategic funnels that will convert",
    href: "/Accessorie",
    icon: pump,
  },
];

const callsToAction = [
  { name: "See All Product", href: "/Allproduct", icon: PlayCircleIcon },
];
const callsToAction1 = [
  { name: "See All Product", href: "/Accessorie", icon: PlayCircleIcon },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const { sum } = useContext(ShopContext);

  return (
    <header style={{ background: "#DBDBDB" }}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        style={{ background: "#DBDBDB" }}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-36" src={Logo} alt="..." />
            <p className="font-bold text-xs">WEREV PRIVATE LIMITED</p>
          </Link>
        </div>
        <div className="flex lg:hidden gap-2">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex lg:flex-2">
            {/* <Link to="/Cart" className="-m-1.5 p-1.5">
              <Link
                to="/Cart"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
            </Link> */}
          </div>
          {/* <div
            style={{
              width: "19px",
              background: "red",
              color: "white",
              textAlign: "center",
              fontSize: "15px",
              borderRadius: "50%",
            }}
          >
            <p>{sum}</p>
          </div> */}
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Bikes
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4" style={{ background: "#DBDBDB" }}>
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#A9A9A9]"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {/* <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        /> */}
                        <img
                          src={item.icon}
                          className="h-10 w-10 text-gray-600 group-hover:text-indigo-600"
                          alt=""
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="grid divide-x divide-gray-900/5 bg-gray-50"
                  style={{ background: "#DBDBDB" }}
                >
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-[#A9A9A9]"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Accessories
          </a> */}

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Accessories
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4" style={{ background: "#DBDBDB" }}>
                  {Accessories.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#A9A9A9]"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {/* <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        /> */}
                        <img
                          src={item.icon}
                          className="h-10 w-10 text-gray-600 group-hover:text-indigo-600"
                          alt=""
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                          onClick={closeMobileMenu}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="grid divide-x divide-gray-900/5 bg-gray-50"
                  style={{ background: "#DBDBDB" }}
                >
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to="/Accessorie"
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-[#A9A9A9]"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            to="/Contact"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </Popover.Group>
        {/* <div className="relative"> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/Cart"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </Link>
          <div
            style={{
              width: "19px",
              background: "red",
              color: "white",
              textAlign: "center",
              fontSize: "15px",
              borderRadius: "50%",
            }}
          >
            <p>{sum}</p>
          </div>
        </div>

        {/* </div> */}
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          style={{ background: "#DBDBDB" }}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={Logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#A9A9A9]"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#A9A9A9]">
                        Bikes
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Link to={item.href} onClick={closeMobileMenu}>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#A9A9A9]"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Accessories
                </a> */}

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#A9A9A9]">
                        Accessories
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...Accessories, ...callsToAction1].map((item) => (
                          <Link to={item.href} onClick={closeMobileMenu}>
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#A9A9A9]"
                            >
                              {item.name}
                            </Disclosure.Button>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/Contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#A9A9A9]"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
