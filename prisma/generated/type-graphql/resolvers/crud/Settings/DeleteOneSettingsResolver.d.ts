import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSettingsArgs } from "./args/DeleteOneSettingsArgs";
import { Settings } from "../../../models/Settings";
export declare class DeleteOneSettingsResolver {
    deleteOneSettings(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSettingsArgs): Promise<Settings | null>;
}
