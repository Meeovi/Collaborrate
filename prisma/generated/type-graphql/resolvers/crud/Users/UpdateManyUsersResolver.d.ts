import { GraphQLResolveInfo } from "graphql";
import { UpdateManyUsersArgs } from "./args/UpdateManyUsersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyUsersResolver {
    updateManyUsers(ctx: any, info: GraphQLResolveInfo, args: UpdateManyUsersArgs): Promise<AffectedRowsOutput>;
}
