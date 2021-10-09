import React from "react";

export const Navbar = () => {
  const user = null;
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          <h2>{user ? `Hello ${user.name}` : "Heroes App"}</h2>
        </span>
        {user ? (
          <button className="btn btn-primary">Log out</button>
        ) : (
          <button className="btn btn-primary">Log in</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
