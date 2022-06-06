import { GraphQLResolveInfo } from "graphql";
import { FindUniqueThemesArgs } from "./args/FindUniqueThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class FindUniqueThemesResolver {
    findUniqueThemes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueThemesArgs): Promise<Themes | null>;
}
