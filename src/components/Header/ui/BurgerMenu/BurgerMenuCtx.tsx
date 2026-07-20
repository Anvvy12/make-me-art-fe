import {createContext, type Dispatch, type SetStateAction} from "react";

type TBurgerMenuCtx = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export const BurgerMenuCtx = createContext<TBurgerMenuCtx>(
    {} as TBurgerMenuCtx
);
