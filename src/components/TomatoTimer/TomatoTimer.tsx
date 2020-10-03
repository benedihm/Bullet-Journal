import React, { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import "./TomatoTimer.sass";

const TomatoTimer = () => {
  const [timer, setTimer] = useState<number>(1500);
  const [minutes, setMinutes] = useState<number>(25);
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        console.log();
        setTimer(remainingTime => remainingTime - 1);
        setMinutes(Math.floor(timer / 60));
        setSeconds(timer % 60);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive, timer]);

  const setBreak = () => {
    setIsActive(false);
    setTimer(300);
    setMinutes(5);
    setSeconds(0);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimer(1500);
    setMinutes(25);
    setSeconds(0);
  };

  const format = (timer: number) => {
    const formattedTimer = timer.toString();
    if (formattedTimer.length === 1) {
      return "0".concat(formattedTimer);
    }
    return formattedTimer;
  };

  return (
    <div className="tomato-timer">
      <h2>Tomato Timer</h2>
      <p className="timer">
        {format(minutes)}:{format(seconds)}
      </p>
      <div className="timer-buttons">
        <Button
          className="tomato-timer-button"
          handleClick={() => setIsActive(!isActive)}
          buttonName={isActive ? "Stop" : "Start"}
        />
        <Button
          className="tomato-timer-button"
          handleClick={setBreak}
          buttonName="Break"
        />
        <Button
          className="tomato-timer-button"
          handleClick={resetTimer}
          buttonName="Reset"
        />
      </div>
    </div>
  );
};

export default TomatoTimer;
