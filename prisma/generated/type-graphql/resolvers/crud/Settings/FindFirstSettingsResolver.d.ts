import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingsArgs } from "./args/FindFirstSettingsArgs";
import { Settings } from "../../../models/Settings";
export declare class FindFirstSettingsResolver {
    findFirstSettings(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingsArgs): Promise<Settings | null>;
}
