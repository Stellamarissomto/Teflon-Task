import React from 'react';
import { Card } from './style'

const Contain: React.FC = ({children}) => {
    return (
        <Card>
            {children}
        </Card>
    )
}

export default Contain 
