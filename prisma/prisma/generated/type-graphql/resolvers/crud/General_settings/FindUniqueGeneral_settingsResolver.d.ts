import { GraphQLResolveInfo } from "graphql";
import { FindUniqueGeneral_settingsArgs } from "./args/FindUniqueGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class FindUniqueGeneral_settingsResolver {
    findUniqueGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: FindUniqueGeneral_settingsArgs): Promise<General_settings | null>;
}
