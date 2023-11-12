import React, {FC} from 'react';
import css from "./Skeleton.module.css"

interface SkeletonProps extends React.HTMLProps<HTMLElement> {

}

const Skeleton: FC<SkeletonProps> = ({className}) => {
    return (
        <div className={css.skeletonContainer}>
            <div className={css.narrowingCircle}/>
        </div>
    );
};

export default Skeleton;