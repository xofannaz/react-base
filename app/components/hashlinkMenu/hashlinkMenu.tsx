import { DropdownMenu } from "./dropdownMenu";
import {
  HashlinkMenuVariants,
  type HashlinkMenuProps,
} from "./hashlinkMenu.types";
import { HorizontalMenu } from "./horizontalMenu";

export const HashlinkMenu = ({ items, variant }: HashlinkMenuProps) => {
  const MenuComponent = {
    [HashlinkMenuVariants.Horizontal]: HorizontalMenu,
    [HashlinkMenuVariants.Dropdown]: DropdownMenu,
  }[variant];

  return (
    <MenuComponent>
      {items.map((item) => (
        <li key={item.label}>
          <a className="link link-hover" href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </MenuComponent>
  );
};
