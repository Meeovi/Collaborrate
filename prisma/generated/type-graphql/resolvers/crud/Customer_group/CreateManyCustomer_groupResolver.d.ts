import { GraphQLResolveInfo } from "graphql";
import { CreateManyCustomer_groupArgs } from "./args/CreateManyCustomer_groupArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCustomer_groupResolver {
    createManyCustomer_group(ctx: any, info: GraphQLResolveInfo, args: CreateManyCustomer_groupArgs): Promise<AffectedRowsOutput>;
}
