import { Bars3CenterLeftIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useCustomer } from "~/hooks/useCustomer";

// TODO: receive menu items via props
// get customer information
export const Navbar = () => {
  const customer = useCustomer();

  return (
    <div className="navbar h-[4] bg-base-200 lg:px-8 py-0">
      <div className="navbar-start">
        <div className="dropdown">
          <button className="btn btn-ghost mr-2 lg:hidden">
            <Bars3CenterLeftIcon stroke="currentColor" className="h-5 w-5" />
          </button>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <div>Balance</div>
            </li>
            <li>
              <div>Exchange</div>
            </li>
            <li>
              <div>Earn</div>
            </li>
          </ul>
        </div>
        <p className="text-xl">Customer Rewards</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div>Balance</div>
          </li>
          <li>
            <div>Exchange</div>
          </li>
          <li>
            <div>Earn</div>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {customer ? (
          <p className="mr-4 hidden lg:block md:block">
            {`${customer.first_name ?? ""} ${customer.last_name ?? ""}`}
          </p>
        ) : (
          <div className="skeleton h-4 w-40 mr-4" />
        )}
        <UserCircleIcon stroke="currentColor" className="h-5 w-5" />
      </div>
    </div>
  );
};
