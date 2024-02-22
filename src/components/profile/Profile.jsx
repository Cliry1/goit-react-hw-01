import css from "./Profile.module.css"

export default function Profile({name,tag,location,image,stats}) {


  return (
    <div className={css.profile}>
      <div className={css.profileInfo}>
        <img className={css.profileImg}
          src={image}
          alt="User avatar"
        />
        <p className={css.profileInfoName}>{name}</p>
        <p className={css.profileInfoText}>@{tag}</p>
        <p className={css.profileInfoText}>{location}</p>
      </div>

      <ul className={css.profileStatList}>
        <li className={css.profileStatListElem}>
          <span>Followers</span>
          <span className={css.profileStatListElemValue}>{stats.followers}</span>
        </li>
        <li className={css.profileStatListElem}>
          <span>Views</span>
          <span className={css.profileStatListElemValue}> {stats.views}</span>
        </li>
        <li className={css.profileStatListElem}>
          <span>Likes</span>
          <span className={css.profileStatListElemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

