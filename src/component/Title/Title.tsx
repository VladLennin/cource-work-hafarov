import React, {FC} from 'react';
import css from "./Title.module.css"
interface TitleProps {
    value: string;
}

const Title:FC<TitleProps> = ({value}) => {
    return (
        <div className={css.title}>
            {value}
        </div>
    );
};

export default Title;