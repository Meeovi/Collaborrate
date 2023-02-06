import { GraphQLResolveInfo } from "graphql";
import { CreateManyPermissionsArgs } from "./args/CreateManyPermissionsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPermissionsResolver {
    createManyPermissions(ctx: any, info: GraphQLResolveInfo, args: CreateManyPermissionsArgs): Promise<AffectedRowsOutput>;
}
