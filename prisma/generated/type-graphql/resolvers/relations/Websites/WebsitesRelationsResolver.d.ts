import { Themes } from "../../../models/Themes";
import { Websites } from "../../../models/Websites";
import { WebsitesThemesArgs } from "./args/WebsitesThemesArgs";
export declare class WebsitesRelationsResolver {
    themes(websites: Websites, ctx: any, args: WebsitesThemesArgs): Promise<Themes[]>;
}
