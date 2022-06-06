import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRoleArgs } from "./args/DeleteManyRoleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRoleResolver {
    deleteManyRole(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRoleArgs): Promise<AffectedRowsOutput>;
}
