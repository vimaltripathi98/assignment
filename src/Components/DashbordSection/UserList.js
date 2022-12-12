import React, { useState, useEffect } from "react";
import invitations from "../json/invitations.json";
import { useNavigate } from "react-router-dom";
import invitations_update from "../json/invitations_update.json";
import "./UserList.css";

const UserList = () => {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [constructorHasRun, setConstructorHasRun] = useState(false);

  const navigate = useNavigate();
  const loggedOut = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("datakey"));
    if (items) {
      setItems(items);
    }
    let showData = invitations.invites.filter((ele, index) => {
      if (ele.user_id == items.user_id) {
        return true;
      }
    });
    setData(showData);
  }, []);

  const constructor = () => {
    if (constructorHasRun) return;
    const items = JSON.parse(localStorage.getItem("datakey"));
    let appendDataCount = 0;
    var intervalFunction = setInterval(() => {
      setData((prev) => {
        let updateData = invitations_update.invites.filter((ele, index) => {
          if (ele.user_id == items.user_id) {
            return true;
          }
        });
        let data = prev;
        if (updateData.length) {
          data = [...prev, updateData[appendDataCount]];
          if (appendDataCount == updateData.length - 1) {
            clearInterval(intervalFunction);
          } else {
            appendDataCount = appendDataCount + 1;
          }
        } else {
          clearInterval(intervalFunction);
        }
        return data;
      });
    }, 5000);

    setConstructorHasRun(true);
  };

  constructor();

  return (
    <div>
      <div className="headerSection">
        <h1>
          {items.first_name} <span>{items.last_name}</span>
        </h1>
        <button onClick={loggedOut} className="logOutBtn">
          LogOut
        </button>
      </div>
      <table className="mainTable">
        <thead>
          <tr>
            <th className="headBody">invite_id</th>
            <th className="headBody">sender_id</th>
            <th className="headBody">sig_id</th>
            <th className="headBody">invite</th>
            <th className="headBody">vector</th>
            <th className="headBody">user_id</th>
            <th className="headBody">status</th>
            <th className="headBody">invite_time</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((ele, index) => {
                let date = new Date(ele.invite_time).toLocaleString();

                return (
                  <tr
                    className="rowBorder"
                    style={{
                      background:
                        ele.status == "read"
                          ? "rgb(168, 226, 226)"
                          : "rgb(228, 222, 222)",
                    }}
                    key={index}
                  >
                    <td className="headBody">{ele.invite_id}</td>
                    <td className="headBody">{ele.sender_id}</td>
                    <td className="headBody">{ele.sig_id}</td>
                    <td className="headBody">{ele.invite}</td>
                    <td className="headBody">{ele.vector}</td>
                    <td className="headBody">{ele.user_id}</td>
                    <td className="headBody">{ele.status}</td>
                    <td className="headBody">{date}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
