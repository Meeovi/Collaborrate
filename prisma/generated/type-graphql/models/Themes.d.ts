import { Websites } from "../models/Websites";
export declare class Themes {
    id: number;
    title?: string | null;
    parent_theme?: string | null;
    theme_path?: string | null;
    action?: string | null;
    website_id: bigint;
    websites?: Websites;
}
