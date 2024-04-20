import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoutes({element}) {
    const [_element, _setElement] = useState(<></>);
    useEffect(() => {
        if(localStorage.getItem('user')){
            _setElement(element);
        }else {
            _setElement(<Navigate to='/login' />)
        }
    }, [])

  return _element;
}

export default PrivateRoutes