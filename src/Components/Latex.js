import { render } from '@testing-library/react';
import React, { useEffect, useRef } from 'react'
import katex from 'katex';

const Latex = ({latex_code}) => {
    const nodeRef = useRef();

    useEffect(() => {
        katex.render(latex_code, nodeRef.current);
    }, [latex_code]);

    return <div className='btn btn-primary 'ref={nodeRef}/>
}


export default Latex;