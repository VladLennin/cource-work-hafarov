import {FC, useEffect} from "react";

import css from "./Dialog.module.css"

interface DeleteProps {
    onDelete: (any: any) => void;
    onCancel: () => void;
}


const Dialog: FC<DeleteProps> = ({onDelete, onCancel}) => {

    useEffect(() => {
        // @ts-ignore
        document.body.style.overflow = "hidden"
        return(()=>{
            // @ts-ignore
            document.body.style.overflow = "visible"
        })
    }, []);

    return (
        <div className={css.container}>
            <div className={css.dialog}>
                <p>Ви впевнені що хочете видалити новину?</p>
                <button onClick={onDelete}>Так</button>
                <button onClick={onCancel}>Ні</button>
            </div>
        </div>
    );
};

export default Dialog;