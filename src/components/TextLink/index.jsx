import React, { useEffect, useState } from 'react';
import './styles.scss';

function TextLink({ text }) {
    const [elemts, setElemts] = useState();
    const space = <div>&nbsp;</div>
    useEffect(() => {
        const temp = text.split('').map((item, index) => {
            return <div className="ani" style={{ animationDelay: index / 20 + `s` }}>
                {item == ' ' ? space : item}
            </div>
        });
        setElemts(temp);
    }, [])

    return (
        <div className="text-link-wrapper">
            <div className="text-link">
                {elemts}
            </div>
        </div>
    );
}

export default TextLink;