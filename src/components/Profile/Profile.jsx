import React from "react";
import ProfilePage from "../../colibriprofile.jpg";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.profilepageDiv}>
      <img src={ProfilePage} className={s.profilepage} />
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
