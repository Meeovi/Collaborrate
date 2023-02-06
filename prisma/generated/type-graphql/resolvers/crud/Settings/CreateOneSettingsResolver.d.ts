import { GraphQLResolveInfo } from "graphql";
import { CreateOneSettingsArgs } from "./args/CreateOneSettingsArgs";
import { Settings } from "../../../models/Settings";
export declare class CreateOneSettingsResolver {
    createOneSettings(ctx: any, info: GraphQLResolveInfo, args: CreateOneSettingsArgs): Promise<Settings>;
}
