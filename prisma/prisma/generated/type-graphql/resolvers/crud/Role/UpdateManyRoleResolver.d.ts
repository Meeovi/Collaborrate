import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRoleArgs } from "./args/UpdateManyRoleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRoleResolver {
    updateManyRole(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRoleArgs): Promise<AffectedRowsOutput>;
}
