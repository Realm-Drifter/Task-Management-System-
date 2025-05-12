import React from "react";

function AvatarGroup({ avatars, maxVisible = 3 }) {
  return (
    <div className="flex items-center">
      {avatars.slice(0, maxVisible).map((avatar, index) => (
        <img
          key={index}
          src={avatar || null}
          alt={`avatar ${index}`}
          className="w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0"
        />
      ))}
      {avatars.length > maxVisible && (
        <div className="w-9 h-9 bg-blue-50 text-sm font-medium rounded-full border-2 border-white flex items-center justify-center -ml-3">
          +{avatars.length - maxVisible}
        </div>
      )}
    </div>
  );
}

export default AvatarGroup;
