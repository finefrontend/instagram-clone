import React from "react";

export default function Feed({ nickname, country, imageSrc, likeCount, text }) {
  return (
    <article className="contents">
      <div className="feed_user_info">
        <div className="user_container">
          <div className="user_profile_img">
            <img src="/assets/images/thumb.png" alt="프로필이미지" />
          </div>
          <div className="user_name">
            <div className="nick_name m_text">{nickname}</div>
            <div className="country s_text">{country}</div>
          </div>
        </div>

        <a href="#" className="feed_icon_more">
          <img src="/assets/images/icons/more.png" alt="more icon" />
        </a>
      </div>

      <div className="feed_img">
        <img src={imageSrc} alt="피드 이미지" />
      </div>
      <div className="feed_details">
        <div className="feed_icons">
          <a href="#" className="icon">
            <img src="/assets/images/icons/like.png" alt="like Icon" />
          </a>
          <a href="#" className="icon">
            <img src="/assets/images/icons/comment.png" alt="comment Icon" />
          </a>
          <a href="#" className="icon">
            <img src="/assets/images/icons/msg.png" alt="share Icon" />
          </a>
          <a href="#" className="icon bookmark">
            <img src="/assets/images/icons/bookmark.png" alt="bookmark Icon" />
          </a>
        </div>

        <div className="feed_likes">
          <div className="likes_profile_img">
            <img src="/assets/images/thumb.png" alt="프로필이미지" />
          </div>
          <div className="likes m_text">
            좋아요
            <span id="like-count-39"> {likeCount}</span>
            <span id="bookmark-count-39"></span>개
          </div>
        </div>

        <div className="feed_text">
          <div className="user_name m_text">{nickname}</div>
          <div className="s_text">{text}</div>
        </div>
      </div>
    </article>
  );
}
