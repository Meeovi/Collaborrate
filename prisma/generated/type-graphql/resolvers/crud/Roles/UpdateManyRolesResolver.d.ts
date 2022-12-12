import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRolesArgs } from "./args/UpdateManyRolesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRolesResolver {
    updateManyRoles(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRolesArgs): Promise<AffectedRowsOutput>;
}
