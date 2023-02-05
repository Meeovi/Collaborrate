import { GraphQLResolveInfo } from "graphql";
import { UpdateOneSettingsArgs } from "./args/UpdateOneSettingsArgs";
import { Settings } from "../../../models/Settings";
export declare class UpdateOneSettingsResolver {
    updateOneSettings(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSettingsArgs): Promise<Settings | null>;
}
