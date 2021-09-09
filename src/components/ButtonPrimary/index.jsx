import React from 'react';
import './styles.scss';

function ButtonPrimary() {
    return (
        <div className="button-primary">
            <div className="button-primary__background">
                <div class="button-primary__background--left"></div>
                <div class="button-primary__background--center"></div>
                <div class="button-primary__background--right"></div>
            </div>
            <div className="button-primary__content">
                Contact me
            </div>
        </div>
    );
}

export default ButtonPrimary;