import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { Navbar } from "reactstrap";
import { useRouter } from "next/router";

const Navbars = () => {

  const router = useRouter();

  // For Logout remove data from the Local Storage
  const handleLogout = () => {
      destroyCookie(null, 'loginUserData');
      router.push('/');
  }

  return (
    <div className="px-5 py-1 navbar-style">
      <Navbar>
        <Link href='/products' className="text-white text-decoration-none h4" >
            My Online Shopping Site
        </Link>

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
