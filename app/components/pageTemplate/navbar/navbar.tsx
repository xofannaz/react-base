import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
  HashlinkMenu,
  HashlinkMenuVariants,
  type HashlinkMenuItem,
} from "~/components";
import { useCustomer } from "~/hooks/useCustomer";

export interface NavbarProps {
  menuItems: HashlinkMenuItem[];
}

export const Navbar = ({ menuItems }: NavbarProps) => {
  const customer = useCustomer();

  return (
    <div className="navbar h-[4] bg-base-200 lg:px-8 py-0">
      <div className="navbar-start">
        <ShoppingBagIcon
          stroke="currentColor"
          className="hidden lg:block h-5 w-5 mr-4"
        />
        <div className="lg:hidden">
          <HashlinkMenu
            variant={HashlinkMenuVariants.Dropdown}
            items={menuItems}
          />
        </div>
        <p className="text-xl">Customer Rewards</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <HashlinkMenu
          variant={HashlinkMenuVariants.Horizontal}
          items={menuItems}
        />
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
