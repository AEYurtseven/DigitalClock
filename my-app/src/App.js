import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [clock,setClock] = useState("");
  const [date, setDate] = useState("");
  const [isMilitaryTime, setMilitaryTime] = useState(false);

  useEffect(() => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var timePeriod = hour > 12 ? "PM" : "AM";

    var resultHour = isMilitaryTime === false ? hour + ":" + minute + ":" + second + " " + timePeriod : hour+""+minute+""+second;
    setClock(resultHour);

    var day = date.getDay();
    var month = date.getMonth();
    var year = date.getFullYear();
    var date = date.getDate();

    var resultDay = getDayToString(day) + "," + getMonthToString(month) + " " + date + "th " + year;

    setDate(resultDay);
  },[isMilitaryTime]);

  const getDayToString = (day) => {
    if(day === 1) return "Monday";
    if(day === 2) return "Tuesday";
    if(day === 3) return "Wednesday";
    if(day === 4) return "Thursday";
    if(day === 5) return "Friday";
    if(day === 6) return "Saturday";
    if(day === 7) return "Friday";
  }

  const getMonthToString = (month) => {
    if(month === 1) return "January";
    if(month === 2) return "February";
    if(month === 3) return "March";
    if(month === 4) return "April";
    if(month === 5) return "May";
    if(month === 6) return "June";
    if(month === 7) return "July";
    if(month === 8) return "August";
    if(month === 9) return "September";
    if(month === 10) return "October";
    if(month === 11) return "November";
    if(month === 12) return "December";
  }

  const buttonClick = () => {
    if(isMilitaryTime == true){
      setMilitaryTime(false);
    }else{
      setMilitaryTime(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
           <div className = "headerTop">A Simple Digital Clock</div>
           <div className = "clock">{clock}</div>
           <div className = "date">{date}</div>
           <button className = "militaryTime" onClick = {() => buttonClick()}>Switch to military time</button>
      </header>
    </div>
  );
}

export default App;
