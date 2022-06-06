import { Themes } from "../models/Themes";
import { WebsitesCount } from "../resolvers/outputs/WebsitesCount";
export declare class Websites {
    id: bigint;
    created_at?: Date | null;
    name?: string | null;
    url?: string | null;
    shop?: string | null;
    store?: string | null;
    themes?: Themes[];
    _count?: WebsitesCount | null;
}
