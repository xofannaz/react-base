import { atom } from "jotai";

export const CustomerAtom = atom<Customer | undefined>();
export const IsFetchingCustomerAtom = atom<boolean>(false);
