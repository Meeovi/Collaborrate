import { GraphQLResolveInfo } from "graphql";
import { UpsertOneSettingsArgs } from "./args/UpsertOneSettingsArgs";
import { Settings } from "../../../models/Settings";
export declare class UpsertOneSettingsResolver {
    upsertOneSettings(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSettingsArgs): Promise<Settings>;
}
