import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import API from "../Helpers/Apis";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const [items, setItems] = useState([]);
  const [currentuser, setCurrentuser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.allReviews, {
      method: 'POST'
    }).then((result) => {
      result.json().then((value) => {
        if (result.ok) {
          setItems(value);
        } else {
          alert(value.message);
        }
      }).catch((error) => {
        alert(error.message);
      });
    }).catch((error) => {
      alert(error.message);
    });

    setCurrentuser(JSON.parse(localStorage.getItem('user')) || {});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div className="adminpanel">
      <div className="adminpanel-top">
        <h1>Welcome {currentuser?.name || 'User'}!</h1>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
      <div className="container">
        {
          items.map((item) => <CommentItem key={item._id} item={item}/>)
        }
      </div>
    </div>
  );
}

export default AdminPanel;
