import React from "react";

const Root = () => {
  return (
    <div>
      <div className="navbarContainer">
        <div className="navbar">
          <li>
            <a className="logo">Visual Basics</a>
          </li>
          <ul className="links">
            <li>
              <a href="#">Notifications</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='solid'></hr>
    </div>
  );
};

export default Root;

