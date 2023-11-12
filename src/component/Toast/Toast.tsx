import {FC, useEffect, useState} from "react";
import css from "./Toast.module.css"
interface ToastProps {
    message: string;
    showToast: boolean;
    handleClose: () => void;
}

const Toast: FC<ToastProps> = ({message, showToast, handleClose}) => {
    const [visible, setVisible] = useState(showToast);

    useEffect(() => {
        setVisible(showToast);
    }, [showToast]);

    const handleCloseClick = () => {
        setVisible(false);
        handleClose();
    };

    return (
        <div className={`${css.toast} ${visible ? `${css.show}` : `${css.hide}`}`}>
            <p>{message}</p>
        </div>
    );
};

export default Toast;