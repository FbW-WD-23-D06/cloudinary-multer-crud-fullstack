import React from "react";

function AddUser() {
  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter name"
          type="text"
          name="name"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default AddUser;
