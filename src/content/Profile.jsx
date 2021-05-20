import React from "react";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__img">
        <img src="https://www.istockphoto.com/resources/images/HomePage/Hero/1204187820.jpg" alt='background'/>
      </div>
      <div className="profile__information">
              <div className="profile__information--photo">
                  <img src='https://i0.wp.com/evelurie.com/wp-content/uploads/Screen-Shot-2018-02-02-at-11.08.39-AM.png?resize=183%2C151&ssl=1' alt='user'/>
        </div>
        <div className="profile__information--info">
          <ul>
            <li>
              <span>Name User:</span>
            </li>
            <li>
              <span>date of Birth:</span>
            </li>
            <li>
              <span>City:</span>
            </li>
            <li>
              <span>Education:</span>
            </li>
            <li>
              <span>Web Site:</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile__posts">
        <h2>My Posts</h2>
        <label htmlFor="">
          <textarea className="textarea" name="" placeholder="your news..."></textarea>
        </label>
      </div>
    </div>
  );
};

export default Profile;
