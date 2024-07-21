import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.wrapperProfile}>
      <div className={css.wrapperMainInfo}>
        <img
          className={css.avatarProfile}
          src={image}
          alt="User avatar"
          width={240}
          height={240}
        />
        <p className={css.titleProfile}>{name}</p>
        <p className={css.mainInfoProfile}>@{tag}</p>
        <p className={css.mainInfoProfile}>{location}</p>
      </div>

      <ul className={css.infoListProfile}>
        <li className={css.infoItemProfile}>
          <span>Followers</span>
          <span className={css.acceptFontWeight600}>{stats.followers}</span>
        </li>
        <li className={css.infoItemProfile}>
          <span>Views</span>
          <span className={css.acceptFontWeight600}>{stats.views}</span>
        </li>
        <li className={css.infoItemProfile}>
          <span>Likes</span>
          <span className={css.acceptFontWeight600}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
