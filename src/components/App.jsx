import './App.css'
import Profile from './profile/Profile';
import userData from "../userData.json";
export default function App() {


  return (
    <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  )
}