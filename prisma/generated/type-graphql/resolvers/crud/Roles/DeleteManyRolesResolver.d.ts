import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRolesArgs } from "./args/DeleteManyRolesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRolesResolver {
    deleteManyRoles(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRolesArgs): Promise<AffectedRowsOutput>;
}
