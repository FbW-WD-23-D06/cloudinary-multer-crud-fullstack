import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
  });

  // dynamic handle change for files and text
  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  // handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      console.log(formData);
      const res = await fetch(`http://localhost:8888/users`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        console.log("success");
        setData({ image: "", name: "" });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddUser;
