import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCustomerArgs } from "./args/DeleteManyCustomerArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCustomerResolver {
    deleteManyCustomer(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCustomerArgs): Promise<AffectedRowsOutput>;
}
