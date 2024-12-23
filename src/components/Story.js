import React from "react";

export default function Story({ isNew, profile, id }) {
  return (
    <div className="user new">
      <div className="user_thumb_img">
        <img src="/assets/images/thumb.png" alt="프로필 썸네일 사진" />
      </div>
      <div className="user_id s_text">fine</div>
    </div>
  );
}
