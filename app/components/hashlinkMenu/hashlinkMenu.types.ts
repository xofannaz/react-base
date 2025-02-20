export enum HashlinkMenuVariants {
  Horizontal = "HORIZONTAL",
  Dropdown = "DROPDOWN",
}

export interface HashlinkMenuItem {
  label: string;
  href: string;
}

export interface HashlinkMenuProps {
  items: HashlinkMenuItem[];
  variant: HashlinkMenuVariants;
}
