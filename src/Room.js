import React, { useState } from 'react';
import './Room.css';

const Room = () => {
  let [isLit, setLit] = useState("OFF")
  let [temp, setTemp] = useState(22)
  return (
    <div className={`room ${isLit}`}>
      <p>Lights are {isLit} !!! </p>
      <button className="on" onClick={() => { setLit(isLit = "ON") }}>
        Turn ON
      </button>
      <button className="off" onClick={() => { setLit(isLit = "OFF") }}>
        Turn OFF
      </button>

      <br />
      <butoon className="red" onClick={() => {
        if (isLit === "ON" || isLit === "RED" || isLit === "GREEN" || isLit === "BLUE") {
          setLit(isLit = "RED")
        } else {
          alert("please switch the lights on first")
        }
      }
      }> Red Light </butoon>

      <butoon className="green" onClick={() => {
        if (isLit === "ON" || isLit === "RED" || isLit === "GREEN" || isLit === "BLUE") {
          setLit(isLit = "GREEN")
        } else {
          alert("please switch the lights on first")
        }
      }
      }> Green Light </butoon>

      <butoon className="blue" onClick={() => {
        if (isLit === "ON" || isLit === "RED" || isLit === "GREEN" || isLit === "BLUE") {
          setLit(isLit = "BLUE")
        } else {
          alert("please switch the lights on first")
        }
      }
      }> Blue Light </butoon>

      <br />
      <br />
      <h2>{`Current Temperature is: ${temp} Celsius`}</h2>
      <br />
      <buttoon className="plus" onClick={() => {
        return (
          setTemp(temp = ++temp)
        );
      }}>Increase Temperature</buttoon>
      <buttoon className="minus" onClick={() => {
        return (
          setTemp(temp = --temp)
        );
      }}>Decrease Temperature</buttoon>

    </div>
  );
}

export default Room;
