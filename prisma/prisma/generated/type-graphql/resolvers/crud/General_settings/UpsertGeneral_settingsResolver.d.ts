import { GraphQLResolveInfo } from "graphql";
import { UpsertGeneral_settingsArgs } from "./args/UpsertGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class UpsertGeneral_settingsResolver {
    upsertGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: UpsertGeneral_settingsArgs): Promise<General_settings>;
}
