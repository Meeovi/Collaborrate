import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomerArgs } from "./args/CreateManyCustomerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCustomerResolver {
    createManyCustomer(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomerArgs): Promise<AffectedRowsOutput>;
}
