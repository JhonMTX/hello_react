"use client";
import { CDN_ICONS_URL } from "@/utils/constants";
import { Icon } from "@sanservices/brands-ui";
import { AccountLogin } from "./auth/accounts-login";
import SignInForm from "./auth/signin-form";
import { useState, useRef, useEffect } from "react";
import { Profile } from "./auth/profile";
import axios from "axios";

export function Header() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const ignoreClickOnMeElementRef = useRef<boolean>(false);
  const [clicked, setClicked] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    member: "",
    points: 0,
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => {
      if (showLogin === false) {
        setShowLogin(true);

        setClicked(true);
      }
      setShowLogin(false);
      return !prevClicked;
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setClicked(true);
      } else if (ignoreClickOnMeElementRef.current) {
        ignoreClickOnMeElementRef.current = false;
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = async () => {
    setIsLoggedOut(true);
    try {
      const logOut = await axios.get(
        "https://tstaccountscms.sandals.com/api/auth/sign-out",
        {
          withCredentials: true,
        }
      );
      setClicked(true);
      setShowLogin(true);
      setIsLoggedIn(false);
      setUser({
        firstName: "",
        lastName: "",
        member: "",
        points: 0,
      });
      setIsLoggingIn(false);
      setIsLoggedOut(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className=" pt-[2.4rem] pb-[2.6rem] bg-header-black relative">
        <div className="flex justify-center">
          <div className="h-full w-full max-w-screen-lg">
            <div className="logo-section flex justify-between items-center pl-4 pr-4 text-white sm:pl-8 sm:pr-8 pb-[1.5rem]">
              <a
                className="logo flex flex-col items-center justify-center"
                href="https://www.sandals.com/"
              >
                <Icon
                  src={CDN_ICONS_URL + "sandals.svg"}
                  className="w-32 h-12 sm:w-[15.5rem] sm:h-[4.5rem] bg-white hover:bg-dark-blue"
                />
              </a>
              {isLoggedIn && user.firstName && user.lastName ? (
                <Profile user={user} onButtonClick={handleSignOut} />
              ) : !isLoggingIn ? (
                <div className="bg-black">
                  <AccountLogin onButtonClick={handleClick} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div ref={wrapperRef}>
          <div className={clicked ? "hidden" : ""}>
            <SignInForm
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              onClose={() => setClicked(true)}
              setUser={setUser}
              setIsLoggingIn={setIsLoggingIn}
            />
          </div>
        </div>
      </header>
    </>
  );
}
