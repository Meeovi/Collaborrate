import { Themes } from "../../../models/Themes";
import { Websites } from "../../../models/Websites";
export declare class ThemesRelationsResolver {
    websites(themes: Themes, ctx: any): Promise<Websites>;
}
