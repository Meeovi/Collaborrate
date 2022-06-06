import { GraphQLResolveInfo } from "graphql";
import { CreateGeneral_settingsArgs } from "./args/CreateGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class CreateGeneral_settingsResolver {
    createGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: CreateGeneral_settingsArgs): Promise<General_settings>;
}
