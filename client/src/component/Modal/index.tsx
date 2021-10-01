import React from 'react';
import { Pop } from './style'

interface Iprops {
    handleClose: () => void
}

const Modal: React.FC<Iprops> = ({children, handleClose }) => {
    return (
        <Pop onClick={handleClose}>
            {children}
        </Pop>
    )
}

export default Modal
