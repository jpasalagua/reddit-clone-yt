import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar";
import AuthModal from "../Modal/Auth";

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
 // useAuth(); // will implement later at end of tutorial

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
