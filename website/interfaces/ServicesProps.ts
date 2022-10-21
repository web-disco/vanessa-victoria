import { Image } from "./Image";
import { PortableTextProps } from "./PortableTextProps";
import { Slug } from "./Slug";

interface ServiceProps {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    serviceDescription: PortableTextProps;
    serviceImage: Image;
    serviceTitle: string;
    slug: Slug
}

export interface ServicesProps {
    services: ServiceProps[];
}