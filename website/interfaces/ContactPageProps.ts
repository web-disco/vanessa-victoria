import { Image } from "./Image";
import { PortableTextProps } from "./PortableTextProps";

interface Page {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  image: Image;
  blurb: PortableTextProps;
}
export interface ContactPageProps {
  page: Page;
}
