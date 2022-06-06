import { GraphQLResolveInfo } from "graphql";
import { UpdateManyGeneral_settingsArgs } from "./args/UpdateManyGeneral_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyGeneral_settingsResolver {
    updateManyGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGeneral_settingsArgs): Promise<AffectedRowsOutput>;
}
