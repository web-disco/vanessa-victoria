import { Image } from "./Image";
import { PortableTextProps } from "./PortableTextProps";

export interface TextBlockWithImageProps {
    title: string;
    description: PortableTextProps;
    image: Image;
    link?: string;
    linkText?: string;
    imgPosition: string | "left" | "right";
    id?: string;
}