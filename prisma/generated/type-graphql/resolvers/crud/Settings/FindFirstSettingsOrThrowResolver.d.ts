import { GraphQLResolveInfo } from "graphql";
import { FindFirstSettingsOrThrowArgs } from "./args/FindFirstSettingsOrThrowArgs";
import { Settings } from "../../../models/Settings";
export declare class FindFirstSettingsOrThrowResolver {
    findFirstSettingsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSettingsOrThrowArgs): Promise<Settings | null>;
}
