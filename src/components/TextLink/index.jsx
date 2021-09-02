import React, { useEffect, useState } from 'react';
import './styles.scss';

function TextLink(props) {
    const [elemts, setElemts] = useState();
    const space = <div>&nbsp;</div>
    useEffect(() => {
        setElemts(props.text.split('').map((item, index) => {
            return <div className="ani" style={{ animationDelay: index / 20 + `s` }}>
                {item === ' ' ? space : item}
            </div>
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
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