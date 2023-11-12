import {FC} from "react";

import css from "./Dialog.module.css"

interface DeleteProps {
    onDelete: (any:any) => void;
    onCancel: () => void;
}


const Dialog: FC<DeleteProps> = ({onDelete, onCancel}) => {
    return (
        <div className={css.dialog}>
            <p>Ви впевнені що хочете видалити новину?</p>
            <button onClick={onDelete}>Так</button>
            <button onClick={onCancel}>Ні</button>
        </div>
    );
};

export default Dialog;