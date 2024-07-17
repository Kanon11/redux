import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginAction } from '../redux/actions';

export default function AuthComponent() {
    const [phone, setPhone] = useState("");
    const handleClick = () => {
        dispatch(loginAction(phone));
    }
    const dispatch = useDispatch();
  return (
      <>
          <h3>Please login</h3>
          <hr />
          <input type="text" name="phone" id=""
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
          />
          <button onClick={handleClick} >Login</button>
      </>
  )
}
