import { GraphQLResolveInfo } from "graphql";
import { CreateManyUsersArgs } from "./args/CreateManyUsersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyUsersResolver {
    createManyUsers(ctx: any, info: GraphQLResolveInfo, args: CreateManyUsersArgs): Promise<AffectedRowsOutput>;
}
