import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="bg-orange-400 text-white rounded-md p-2 m-2 flex text-center justify-center">
        please login
      </div>
    );

  return (
    <div className="bg-red-400 text-3xl text-black text-center p-2 m-2">
      Welcome {user.username}
    </div>
  );
}

export default Profile;
