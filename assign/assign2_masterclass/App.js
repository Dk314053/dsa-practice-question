import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const timeis = new Date().toLocaleTimeString();
  const dateis = new Date().toLocaleDateString();
  const timeDate = dateis + " " + timeis;

  const [message, setMessage] = useState([]);
  const handleOver = (tag) => {
    if (tag === "h1") {
      setMessage([
        ...message,
        {
          Element_Name: tag,
          Event_Name: "onMouseOver",
          Time_and_Date: timeDate
        }
      ]);
    } else if (tag === "h2") {
      setMessage([
        ...message,
        {
          Element_Name: tag,
          Event_Name: "onMouseOver",
          Time_and_Date: timeDate
        }
      ]);
    } else {
      setMessage([
        ...message,
        {
          Element_Name: tag,
          Event_Name: "onMouseOver",
          Time_and_Date: timeDate
        }
      ]);
    }
  };

  const handleOut = (tag) => {
    if (tag === "h1") {
      setMessage([
        ...message,
        { Element_Name: tag, Event_Name: "onMouseOut", Time_and_Date: timeDate }
      ]);
    } else if (tag === "h2") {
      setMessage([
        ...message,
        { Element_Name: tag, Event_Name: "onMouseOut", Time_and_Date: timeDate }
      ]);
    } else {
      setMessage([
        ...message,
        { Element_Name: tag, Event_Name: "onMouseOut", Time_and_Date: timeDate }
      ]);
    }
  };

  return (
    <>
      <div className="header">
        <h1
          className="head1"
          onMouseOver={() => handleOver("h1")}
          onMouseOut={() => handleOut("h1")}
        >
          This is head 1
        </h1>
        <h2
          className="head2"
          onMouseOver={() => handleOver("h2")}
          onMouseOut={() => handleOut("h2")}
        >
          This is head 2
        </h2>
        <div
          className="head3"
          onMouseOver={() => handleOver("div")}
          onMouseOut={() => handleOut("div")}
        >
          This is div
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th> Element Name</th>
            <th>Event Name</th>
            <th> time </th>
          </tr>
        </thead>
        <tbody>
          {message.map((ele) => {
            return (
              <tr>
                <td>{ele.Element_Name}</td>
                <td>{ele.Event_Name}</td>
                <td>{ele.Time_and_Date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// [
//   "create a h1",
//   "create a h2",
//   "create a div",
//   "manage state to track that when user mouse overed on the
//    h1 and when mouse out with date and time",
//   "create a html table to show the logs.",
//   [
//     { "time": "", "eventName": "out or in" },
//     { "time": "", "eventName": "out or in" }
//   ]
// ],
