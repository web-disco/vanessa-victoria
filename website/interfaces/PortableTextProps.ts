import { Child } from "./Child";
import { MarkDef } from "./MarkDef";

export interface PortableTextProps {
    _key: string;
    _type: string;
    children: Child[];
    level: number;
    listItem: string;
    markDefs: MarkDef[];
    style: string;
  }