"use client";

import { CDN_ICONS_URL } from "@/utils/constants";
import { Icon } from "@sanservices/brands-ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import axios from "axios";
import Loader from "@/components/loader";
import { useState } from "react";
interface SignInFormProps {
  className?: string;
}

const schema = zod.object({
  username: zod.string().nonempty({ message: "Username is required" }),
  password: zod.string().min(1, { message: "Password is required" }),
  staySignedIn: zod.boolean().optional(),
});

type FormData = zod.infer<typeof schema>;

export default function SignInForm({
  className = "",
  isLoggedIn,
  setUser,
  onClose,
  setIsLoggedIn,
  setIsLoggingIn,
}: SignInFormProps & {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  onClose: () => void;
  setUser: (user: {
    firstName: string;
    lastName: string;
    member: string;
    points: number;
  }) => void;
  setIsLoggingIn: (isLoggingIn: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [inputType, setInputType] = useState("password");
  const [staySignedIn, setStaySignedIn] = useState(false);

  const signIn = async (data: FormData) => {
    try {
      setIsLoading(true);
      setErrorMsg("");

      const userRegx = /^[-.@_a-zA-Z0-9]+$/gi;
      const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{4,256}$/gi;

      const isValidUser =
        userRegx.test(data.username) || emailRegx.test(data.username);
      const isValidPassword = data.password.length > 0;

      const response = await axios.post(
        "https://tstaccountscms.sandals.com/api/auth/sign-in",
        {
          username: isValidUser ? data.username : "",
          password: isValidPassword ? data.password : "",
          staySignedIn: staySignedIn,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //setIsLoggingIn(true); <--- this gives some time for the loader to show up
      setIsLoggedIn(true);

      const getProfile = await axios.get(
        "https://tstaccountscms.sandals.com/api/loyalty/profiles",
        {
          withCredentials: true,
        }
      );

      const getPoints = await axios.get(
        "https://tstaccountscms.sandals.com/api/loyalty/points",
        {
          withCredentials: true,
        }
      );

      setUser({
        firstName: getProfile.data.content.primary_member.first_name,
        lastName: getProfile.data.content.primary_member.last_name,
        member: getProfile.data.content.member_level,
        points: getPoints.data.content.points_available,
      });

      setIsLoggingIn(true); // <--- this is faster
      onClose();
    } catch (error) {
      setIsLoggingIn(false);

      let errorMsg = "";
      if (error) {
        const status = error;
        switch (status) {
          case 400:
            errorMsg =
              "The requested resource is not available at this time. Please try again later.";
            break;
          case 401:
            errorMsg =
              "Invalid user credentials. The email or password you entered is incorrect.";
            break;
          case 403:
            errorMsg = "Account needs to be enabled.";
            break;
          case 503:
            errorMsg =
              "We are currently experiencing problems loading your account, please try again later.";
            break;
          case 498:
            errorMsg = "Your session has been terminated. Please log in again.";
            break;
          case 500:
            errorMsg =
              "The requested resource is not available at this time. Please try again later.";
            break;
          default:
            errorMsg =
              "Invalid user credentials. The email or password you entered is incorrect.";
            break;
        }
      }
      setErrorMsg(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className={`absolute flex justify-center bg-black text-white pt-24 pb-24 w-full z-20 ${className}`}
        onSubmit={handleSubmit(signIn)}
      >
        <div className="flex-auto max-w-[130rem] pr-14 pl-14 ">
          <div className="sm:grid sm:grid-rows-1 ">
            <div className="sm:grid sm:grid-cols-2 ">
              <div className="sm:mr-[6rem] md:ml-[6rem] lg:ml-[24rem] lg:mr-[10rem] ">
                <div className="">
                  <h4 className="uppercase text-4xl mb-6">Sign In</h4>
                </div>
                <div className="mb-6">
                  <input
                    className="w-full px-[1.45rem] h-[4.5rem] text-black text-[1.4rem]"
                    type="text"
                    placeholder="username"
                    {...register("username", { required: true })}
                  />
                </div>
                <div className="mb-6 row relative">
                  <input
                    className="w-full px-[1.45rem] h-[4.5rem] text-black text-[1.4rem] pl-8"
                    type={inputType}
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <div
                    onClick={(event: React.MouseEvent) =>
                      setInputType(
                        inputType === "password" ? "text" : "password"
                      )
                    }
                  >
                    <Icon
                      className="w-5 h-5 bg-black absolute left-[27.5rem] sm:left-[26rem] md:left-[33rem] lg:left-[25rem] top-1/2 transform -translate-y-1/2 cursor-pointer"
                      src={CDN_ICONS_URL + "user.svg"}
                    />
                  </div>
                </div>
                <div
                  className={`w-full ${errorMsg ? "mb-[1rem]" : "mb-[1.4rem]"}`}
                >
                  <label className="relative">
                    <input
                      className="mr-2 w-[1.2rem] h-[1.3rem] absolute top-[0.22rem]"
                      type="checkbox"
                      {...register("staySignedIn")}
                      checked={staySignedIn} // Controlled by the React state
                      onChange={(e) => setStaySignedIn(e.target.checked)} // Update state on change
                    />
                    <div className="ml-[2rem]">
                      <span className="text-[1.2rem]">Stay signed in</span>
                    </div>
                  </label>
                </div>
                <div className="w-full pb-[1rem]">
                  <span className="text-[1.2rem] text-red10">{errorMsg}</span>
                </div>{" "}
                <div className="mb-8 md:mb-[1rem]">
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <button className="bg-blue10 w-full h-[4.5rem] text-white text-[1.4rem] uppercase">
                      Sign In To Account
                    </button>
                  )}
                </div>
                <div className="mb-1">
                  <span className="text-[1.2rem] font-medium">
                    Recover{" "}
                    <a
                      href="https://tstaccounts.sandals.com/my-account//forgot-username?_gl=1*1sgm49u*_ga*MTMwNTc4MTY3Ny4xNjg4MTU5MTc2*_ga_GD2K1C7KZT*MTY5OTkwODc0OC4yNTcuMS4xNjk5OTA4NzU3LjUxLjAuMA..&_ga=2.52960680.1688989193.1699882375-1305781677.1688159176"
                      target="_blank"
                      className="font-semibold"
                    >
                      Username
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://tstaccounts.sandals.com/my-account//forgot-password"
                      target="_blank"
                      className="font-semibold"
                    >
                      Password
                    </a>
                  </span>
                </div>
              </div>

              <div className="pl-3 border-t mt-[4.9rem] border-gray11  sm:border-l sm:border-t-0 sm:border-gray11 sm:mt-0 ">
                <div className="sm:ml-[5rem] mt-[4.9rem] sm:mt-[2rem] md:mr-[6rem] lg:ml-[8rem] lg:mr-[27rem] ">
                  <div className="sm:mt-[3rem]">
                    <h4 className="text-[2rem] font-normal uppercase">
                      Join Sandals
                    </h4>
                  </div>
                  <div className="mt-[1.3rem]">
                    <p className="text-gray9 text-[1.2rem] ">
                      Receive points & exclusive gifts with Sandals Select
                      Rewards! Modify your preferences, find your point rewards,
                      follow up with your trips and much more.
                    </p>
                  </div>
                  <div className="mt-[0.8rem]">
                    <a
                      href="https://tstaccounts.sandals.com/my-account//register"
                      target="_blank"
                    >
                      <span className="uppercase text-[1rem] tracking-[0.1rem] font-semibold">
                        create your sandals account
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
