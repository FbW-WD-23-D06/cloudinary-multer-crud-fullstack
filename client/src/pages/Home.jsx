import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("http://localhost:8888/users");
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);
  console.log(users);
  return (
    <div className="row">
      {users?.map((user) => {
        return (
          <div className="col-md-3 card me-3 mt-2 p-0">
            <img
              src={user.avatar}
              alt={user.name}
              width={"100%"}
              height={200}
            />
            <div className="p-2">
              <h3>{user.name}</h3>
              <div className="d-flex justify-content-between align-items-center">
                <Link to={`/edit/${user._id}`}>Edit</Link>
                <button className="btn btn-danger btn-sm">X</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
