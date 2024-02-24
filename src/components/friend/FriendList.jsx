import css from "./FriendList.module.css"
import clsx from "clsx";
export default function FriendList({friends}) {


  return (
    <ul className={css.friendList}>
      {
        friends.map(friend =>{
          return (
          <li className={css.friendListItem} key={friend.id}>
            <div>
              <img src={friend.avatar} alt="Avatar" width="48" />
              <p className={css.friendListItemName}>{friend.name}</p>
              {
                friend.isOnline ? <p className={clsx(css.friendListItemOnline, css.friendListItemStatus)}>Online</p > : <p className={clsx(css.friendListItemOffline, css.friendListItemStatus)}>Offline</p>
              }
              
            </div>
          </li>
          )})
      }
    </ul>
  )
}

