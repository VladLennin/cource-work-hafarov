import React, {FC, useState} from 'react';
import css from "./ImageComponent.module.css"
import Skeleton from "../Skeleton/Skeleton";

interface ImageProps extends React.HTMLProps<HTMLElement> {
}

const ImageComponent: FC<ImageProps> = ({src, className}) => {
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setTimeout(() => {
            setIsLoading(false);

        }, 3000)
    };

    const handleImageError = () => {
        setIsLoading(false);
    };

    return (
        <>
            <div className={className}>
                {isLoading && <Skeleton/>}
                <img key={`image_${src}`}
                     style={{display: isLoading ? 'none' : 'block'}}
                     onLoad={handleImageLoad}
                     onError={handleImageError}
                     className={`${className} ${css.img}`}
                     src={src}
                     alt=""/>
            </div>
        </>
    )
};

export default ImageComponent;