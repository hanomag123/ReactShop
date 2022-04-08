import React from 'react';

import { urlLogo } from '../../constants';

export const Footer = () => {
    return(
        <footer>
            <img src={urlLogo} />
            <div>
                <div>59, Street</div>
                <div>+123 456 789</div>
                <div>info@example.con</div>
            </div>
        </footer>
    )
}