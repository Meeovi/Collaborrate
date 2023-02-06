import { GraphQLResolveInfo } from "graphql";
import { FindManySettingsArgs } from "./args/FindManySettingsArgs";
import { Settings } from "../../../models/Settings";
export declare class FindManySettingsResolver {
    findManySettings(ctx: any, info: GraphQLResolveInfo, args: FindManySettingsArgs): Promise<Settings[]>;
}
