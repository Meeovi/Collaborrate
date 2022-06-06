import { GraphQLResolveInfo } from "graphql";
import { UpdateGeneral_settingsArgs } from "./args/UpdateGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class UpdateGeneral_settingsResolver {
    updateGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateGeneral_settingsArgs): Promise<General_settings | null>;
}
