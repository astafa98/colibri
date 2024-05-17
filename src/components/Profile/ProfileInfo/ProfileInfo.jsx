import React from "react";
import standartUsericon from "../../../standartUserIcon.png";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfoDiv}>
      <div>
        <img src={standartUsericon} className={s.standartUsericon} />
      </div>
      <div className={s.description}>Masha Fedorova</div>
    </div>
  );
};

export default ProfileInfo;
