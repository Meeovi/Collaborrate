import { GraphQLResolveInfo } from "graphql";
import { DeleteGeneral_settingsArgs } from "./args/DeleteGeneral_settingsArgs";
import { General_settings } from "../../../models/General_settings";
export declare class DeleteGeneral_settingsResolver {
    deleteGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteGeneral_settingsArgs): Promise<General_settings | null>;
}
