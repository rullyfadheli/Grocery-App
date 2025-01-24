

import React from "react";

const ProfileHeader = ({ name, email, profilePic }) => {
  return (
    <div className="bg-primary text-white text-center p-6 rounded-b-3xl">
      <h1 className="text-lg font-semibold">My Profile</h1>
      <div className="mt-4 flex flex-col items-center">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
        <div className="mt-2">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
