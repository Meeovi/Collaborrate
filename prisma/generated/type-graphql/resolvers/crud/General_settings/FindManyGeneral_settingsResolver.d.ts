import { GraphQLResolveInfo } from "graphql";
import { FindManyGeneral_settingsArgs } from "./args/FindManyGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class FindManyGeneral_settingsResolver {
    findManyGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: FindManyGeneral_settingsArgs): Promise<General_settings[]>;
}
