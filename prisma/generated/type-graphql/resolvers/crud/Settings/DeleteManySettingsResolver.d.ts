import { GraphQLResolveInfo } from "graphql";
import { DeleteManySettingsArgs } from "./args/DeleteManySettingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySettingsResolver {
    deleteManySettings(ctx: any, info: GraphQLResolveInfo, args: DeleteManySettingsArgs): Promise<AffectedRowsOutput>;
}
