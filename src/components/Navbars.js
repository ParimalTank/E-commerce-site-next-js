import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

import { Navbar } from "reactstrap";

const Navbars = () => {
  // For Logout remove data from the Local Storage
  const handleLogout = () => {
     localStorage.removeItem('LoginUserData');
     document.location.reload();
  }

  return (
    <div className="px-5 py-1 navbar-style">
      <Navbar>
        <a href="/products" className="text-white text-decoration-none h4">
          My Online Shopping Site
        </a>
        <div>
          <Link
            legacyBehavior
            to="/dashboard/editprofile"
            href="/edituserprofile"
            className="text-decoration-none text-white"
          >
            <Button
              className="nav-button"
              id="edit-user-profile"
              variant="contained"
              outline
            >
              Edit Profile
            </Button>
          </Link>

          <Button className="mx-2 nav-logout-btn" variant="outlined" onClick={handleLogout} outline>
            Logout
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Navbars;
