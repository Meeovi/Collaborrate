import { GraphQLResolveInfo } from "graphql";
import { UpsertThemesArgs } from "./args/UpsertThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class UpsertThemesResolver {
    upsertThemes(ctx: any, info: GraphQLResolveInfo, args: UpsertThemesArgs): Promise<Themes>;
}
