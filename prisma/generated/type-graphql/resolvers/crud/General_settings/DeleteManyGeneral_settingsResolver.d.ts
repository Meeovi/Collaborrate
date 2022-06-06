import { GraphQLResolveInfo } from "graphql";
import { DeleteManyGeneral_settingsArgs } from "./args/DeleteManyGeneral_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyGeneral_settingsResolver {
    deleteManyGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGeneral_settingsArgs): Promise<AffectedRowsOutput>;
}
