import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSettingsArgs } from "./args/FindUniqueSettingsArgs";
import { Settings } from "../../../models/Settings";
export declare class FindUniqueSettingsResolver {
    findUniqueSettings(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingsArgs): Promise<Settings | null>;
}
