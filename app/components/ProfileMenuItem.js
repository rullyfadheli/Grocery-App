import React from "react";

const ProfileMenuItem = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full px-4 py-3 bg-white border-b hover:bg-gray-100"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium text-gray-800">{label}</span>
      </div>
      <span className="text-gray-400">{">"}</span>
    </button>
  );
};

export default ProfileMenuItem;
