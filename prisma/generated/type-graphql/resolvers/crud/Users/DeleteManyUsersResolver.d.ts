import { GraphQLResolveInfo } from "graphql";
import { DeleteManyUsersArgs } from "./args/DeleteManyUsersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyUsersResolver {
    deleteManyUsers(ctx: any, info: GraphQLResolveInfo, args: DeleteManyUsersArgs): Promise<AffectedRowsOutput>;
}
