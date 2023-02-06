import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPermissionsArgs } from "./args/DeleteManyPermissionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPermissionsResolver {
    deleteManyPermissions(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPermissionsArgs): Promise<AffectedRowsOutput>;
}
