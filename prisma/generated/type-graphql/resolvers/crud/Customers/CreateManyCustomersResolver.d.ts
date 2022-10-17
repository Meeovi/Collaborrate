import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomersArgs } from "./args/CreateManyCustomersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCustomersResolver {
    createManyCustomers(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomersArgs): Promise<AffectedRowsOutput>;
}
