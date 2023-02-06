import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSettingsOrThrowArgs } from "./args/FindUniqueSettingsOrThrowArgs";
import { Settings } from "../../../models/Settings";
export declare class FindUniqueSettingsOrThrowResolver {
    findUniqueSettingsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSettingsOrThrowArgs): Promise<Settings | null>;
}
