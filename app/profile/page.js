"use client";
import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import ProfileMenuItem from "../components/ProfileMenuItem";

export default function ProfilePage() {
  const menuItems = [
    { label: "Edit Profile", icon: "", action: () => alert("Edit Profile") },
    { label: "Change Password", icon: "", action: () => alert("Change Password") },
    { label: "Payment Method", icon: "", action: () => alert("Payment Method") },
    { label: "My Orders", icon: "", action: () => alert("My Orders") },
    { label: "Privacy Policy", icon: "", action: () => alert("Privacy Policy") },
    { label: "Terms & Conditions", icon: "", action: () => alert("Terms & Conditions") },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader
        name="Smith Mate"
        email="smithmate@example.com"
        profilePic="https://via.placeholder.com/100"
      />
      <div className="mt-6">
        {menuItems.map((item, index) => (
          <ProfileMenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={item.action}
          />
        ))}
      </div>
      <div className="px-4 py-3">
        <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary">
          Logout
        </button>
      </div>
    </div>
  );
}
