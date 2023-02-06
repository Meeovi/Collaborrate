import { GraphQLResolveInfo } from "graphql";
import { CreateManyRolesArgs } from "./args/CreateManyRolesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyRolesResolver {
    createManyRoles(ctx: any, info: GraphQLResolveInfo, args: CreateManyRolesArgs): Promise<AffectedRowsOutput>;
}
