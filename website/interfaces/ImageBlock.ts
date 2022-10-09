import { Image } from "./Image";


export interface ImageBlock {
    _key: string;
    _type: string;
    image1?: Image;
    image2?: Image;
    image3?: Image;
    image4?: Image;
    option: string;
}
