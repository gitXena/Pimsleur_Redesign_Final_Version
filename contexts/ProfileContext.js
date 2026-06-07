
//ProfileContext.js
import React, {
  createContext,
  useState,
} from "react";

export const ProfileContext =
  createContext();

export const ProfileProvider = ({
  children,
}) => {
  const [email, setEmail] =
  useState("user@example.com");

  const [username, setUsername] =
    useState("User");

  const [avatar, setAvatar] =
    useState(
      require("../assets/avatars/avatar1.png")
    );

  const [streak, setStreak] =
    useState(0);

  const [reminderSettings,
    setReminderSettings] =
    useState({
      hour: 8,
      period: "PM",
      days: [],
    });

  return (
    <ProfileContext.Provider
      value={{
        email,
        setEmail,

        username,
        setUsername,

        avatar,
        setAvatar,

        streak,
        setStreak,

        reminderSettings,
        setReminderSettings,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};