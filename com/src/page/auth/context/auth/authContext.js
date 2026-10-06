import { useContext } from "react";
import { createContext } from "react"

const Authcontext=createContext(null);

export const Auth=()=>useContext(Authcontext);


export  default Authcontext;