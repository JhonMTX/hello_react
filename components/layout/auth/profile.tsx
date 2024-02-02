"use client";
import { CDN_ICONS_URL } from "@/utils/constants";
import { Icon } from "@sanservices/brands-ui";
import { useState } from "react";
import axios from "axios";

interface UserProps {
  user: {
    firstName: string;
    lastName: string;
    member: string;
    points: number;
  };
  onButtonClick: () => void;
}

export function Profile({ user, onButtonClick }: UserProps) {
  return (
    <>
      <div className="xs-12">
        <div className="row">
          <div>
            <Icon
              src={CDN_ICONS_URL + "user.svg"}
              className="w-5 h-5 mr-2 bg-white mt-[0.1rem]"
            />
            <span>
              Hi, {user.firstName} {user.lastName} |{" "}
              <button onClick={onButtonClick}>Sign Out</button>{" "}
            </span>
          </div>
        </div>
        <div>
          <span>Available Points: {user.points}</span>
        </div>
        <div>
          <span>Level Member: {user.member}</span>
        </div>
      </div>
    </>
  );
}
