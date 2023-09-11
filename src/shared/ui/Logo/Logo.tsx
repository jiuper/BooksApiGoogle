import type {ILogoType} from "./Logo.type";

export const Logo = ({src, alt}:ILogoType) => {
    return (
        <img src={src} alt={alt}/>
    );
};