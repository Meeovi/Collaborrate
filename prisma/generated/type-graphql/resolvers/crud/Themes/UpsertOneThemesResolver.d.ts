import { GraphQLResolveInfo } from "graphql";
import { UpsertOneThemesArgs } from "./args/UpsertOneThemesArgs";
import { Themes } from "../../../models/Themes";
export declare class UpsertOneThemesResolver {
    upsertOneThemes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneThemesArgs): Promise<Themes>;
}
