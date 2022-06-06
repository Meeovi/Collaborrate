import { GraphQLResolveInfo } from "graphql";
import { CreateManyRoleArgs } from "./args/CreateManyRoleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRoleResolver {
    createManyRole(ctx: any, info: GraphQLResolveInfo, args: CreateManyRoleArgs): Promise<AffectedRowsOutput>;
}
