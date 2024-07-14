import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, logoutAction } from '../redux/actions';

export default function Home() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const handleClick = () => {
        dispatch(logoutAction())
    }
    useEffect(() => {
        dispatch(getDataAction())
    },[])
    return (
        <>
            Welcome in my home
            <p>Phone:{ auth.phone}</p>
            <p>Title:{ auth?.data?.title}</p>
            <p>id:{auth?.data?.id}</p>
            <button onClick={handleClick}>Logout</button>
        </>
    );
}
