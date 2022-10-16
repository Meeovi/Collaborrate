import { GraphQLResolveInfo } from "graphql";
import { FindManyThemesArgs } from "./args/FindManyThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class FindManyThemesResolver {
    findManyThemes(ctx: any, info: GraphQLResolveInfo, args: FindManyThemesArgs): Promise<Themes[]>;
}
