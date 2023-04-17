/*eslint-disable*/
import React, { useEffect } from 'react'

import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useRouter } from 'next/router';

const withAuth = (Component) => {
    return (props) => {
   
  
    const router = useRouter();

    const cookies = parseCookies();

    useEffect(() => {
        const getUserCookiesData = cookies.loginUserData;
        const userCookiesData = eval(getUserCookiesData);

        // If there is no access token we redirect to "/" page.
        if (!userCookiesData) {
            router.replace('/');
        }
         
      },[router])


      return (
        <Component {...props} />
      )
    }
}

export default withAuth
