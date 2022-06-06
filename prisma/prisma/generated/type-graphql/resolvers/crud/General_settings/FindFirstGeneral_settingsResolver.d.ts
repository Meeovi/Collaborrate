import { GraphQLResolveInfo } from "graphql";
import { FindFirstGeneral_settingsArgs } from "./args/FindFirstGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class FindFirstGeneral_settingsResolver {
    findFirstGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: FindFirstGeneral_settingsArgs): Promise<General_settings | null>;
}
