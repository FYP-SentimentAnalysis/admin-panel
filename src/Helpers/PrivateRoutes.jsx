import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoutes({element}) {
    const [finalElement, setFinalElement] = useState(<></>);
    useEffect(() => {
        if(localStorage.getItem('user')){
            setFinalElement(element);
        }else {
            setFinalElement(<Navigate to='/login' />)
        }
    }, [])

  return finalElement;
}

export default PrivateRoutes