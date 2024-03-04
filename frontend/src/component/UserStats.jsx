import { useState } from "react"; // Importing the useState hook from React
import "../styles/UserStats.css"; // Importing the CSS file for styling

function UserStats() {
  // State variables to manage user stats
  const [level, setLevel] = useState(1); // State for the user's level, initialized to 1
  const [xp, setXp] = useState(0); // State for the user's XP (experience points), initialized to 0
  const [maxXp, setMaxXp] = useState(100); // State for the maximum XP required for leveling up, initialized to 100
  const [health] = useState(100); // State for the user's health, initialized to 100 (constant throughout the component's lifecycle)
  const [maxHealth] = useState(100); // State for the maximum health, initialized to 100 (constant throughout the component's lifecycle)

  // Function to add XP
  const addXp = (amount) => {
    const newXP = xp + amount; // Calculate new XP by adding the given amount to the current XP
    if (newXP >= maxXp) {
      // If new XP exceeds or equals the maximum XP
      const remainingXP = newXP - maxXp; // Calculate remaining XP after leveling up
      setLevel((prevLevel) => prevLevel + 1); // Increment the level by 1
      setXp(remainingXP); // Set XP with remaining XP after leveling up
      setMaxXp((prevMaxXp) => prevMaxXp * 2); // Double the maximum XP for the next level
    } else {
      setXp(newXP); // Update XP with the new value
    }
  };

  // Rendering UI elements
  return (
    <div className="User-Container">
      <div className="stats">
        {/* Displaying user profile picture */}
        <img
          src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/capybara-square-1.jpg.optimal.jpg"
          alt="Profile"
          className="profile-pic"
        />
        {/* Displaying user stats */}
        <div className="column">
          <div className="stat">
            {/* Displaying user's health */}
            <span className="Info">
              Health: {health}/{maxHealth}
            </span>
            {/* Displaying health bar */}
            <div className="bar">
              <div
                className="health-bar"
                style={{ width: `${(health / maxHealth) * 100}%` }} // Setting the width of health bar dynamically based on health percentage
              ></div>
            </div>
          </div>
          <div className="stat">
            {/* Displaying user's XP */}
            <span className="Info">XP: {xp}/{maxXp}</span>
            {/* Displaying XP bar */}
            <div className="bar">
              <div
                className="xp-bar"
                style={{ width: `${(xp / maxXp) * 100}%` }} // Setting the width of XP bar dynamically based on XP percentage
              ></div>
            </div>
          </div>
          <div className="stat">
            {/* Displaying user's level */}
            <div className="level-bar">
              Level: <span className="value">{level}</span>
            </div>
            {/* Button to add XP */}
            <button className="xp-button" onClick={() => addXp(10)}> {/* Adding 10 XP when the button is clicked */}
              Complete Task (+10 XP)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStats; // Exporting the UserStats component as default