import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
          <img src={logo} alt="" />
            <p className='text-accent my-3'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;