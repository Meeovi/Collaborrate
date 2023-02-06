import { GraphQLResolveInfo } from "graphql";
import { FindFirstThemesArgs } from "./args/FindFirstThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class FindFirstThemesResolver {
    findFirstThemes(ctx: any, info: GraphQLResolveInfo, args: FindFirstThemesArgs): Promise<Themes | null>;
}
