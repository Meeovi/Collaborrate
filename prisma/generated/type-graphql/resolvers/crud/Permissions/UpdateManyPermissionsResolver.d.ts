import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPermissionsArgs } from "./args/UpdateManyPermissionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPermissionsResolver {
    updateManyPermissions(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPermissionsArgs): Promise<AffectedRowsOutput>;
}
